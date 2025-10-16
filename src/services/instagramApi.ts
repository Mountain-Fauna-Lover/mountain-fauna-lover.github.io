import type {
  InstagramBusinessAccount,
  InstagramStats,
  InstagramErrorResponse,
  InstagramLongLivedTokenResponse,
  InstagramTokenRefreshResponse
} from '@/types/instagram';
import { statsCache } from './statsCache';

/**
 * Instagram Graph API Service
 *
 * Handles all interactions with Instagram Graph API including:
 * - Fetching business account statistics with 24h localStorage cache
 * - Token management (long-lived tokens)
 * - Error handling
 * - Rate limiting awareness
 *
 * Cache Strategy:
 * - Checks localStorage first for cached stats
 * - Only calls API if cache is missing or expired (>24h)
 * - Saves fresh data to cache after successful API call
 *
 * Requirements:
 * - Instagram Business or Creator account
 * - Facebook Page connected to Instagram account
 * - Facebook App with Instagram Graph API permissions
 * - Long-lived User Access Token
 */

const INSTAGRAM_GRAPH_API_BASE_URL = 'https://graph.facebook.com/v18.0';

class InstagramApiService {
  private accessToken: string;
  private instagramBusinessAccountId: string;

  constructor() {
    this.accessToken = import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN || '';
    this.instagramBusinessAccountId = import.meta.env.VITE_INSTAGRAM_BUSINESS_ACCOUNT_ID || '';

    if (!this.accessToken) {
      console.warn('⚠️ Instagram Access Token is not set. Please add VITE_INSTAGRAM_ACCESS_TOKEN to your .env file');
    }

    if (!this.instagramBusinessAccountId) {
      console.warn('⚠️ Instagram Business Account ID is not set. Please add VITE_INSTAGRAM_BUSINESS_ACCOUNT_ID to your .env file');
    }
  }

  /**
   * Validate API configuration
   */
  private validateConfig(): void {
    if (!this.accessToken || !this.instagramBusinessAccountId) {
      throw new Error('Instagram Access Token or Business Account ID is missing. Check your .env file.');
    }
  }

  /**
   * Fetch Instagram Business Account statistics with cache
   *
   * Strategy:
   * 1. Check localStorage cache first
   * 2. If cache valid (<24h), return cached data instantly
   * 3. If cache expired or missing, call API and update cache
   *
   * @returns Promise with account statistics
   * @throws Error if API call fails or configuration is invalid
   */
  async fetchAccountStats(): Promise<InstagramStats> {
    // Check cache first
    const cached = statsCache.getInstagramStats();
    if (cached) {
      console.log('⚡ Using cached Instagram stats (instant load)');
      return {
        followers: cached.followers,
        posts: cached.posts,
        username: cached.username,
        lastFetched: new Date(cached.metadata.lastUpdated),
      };
    }

    // Cache miss or expired - fetch from API
    console.log('🌐 Fetching fresh Instagram stats from API...');
    this.validateConfig();

    const url = new URL(`${INSTAGRAM_GRAPH_API_BASE_URL}/${this.instagramBusinessAccountId}`);
    url.searchParams.append('fields', 'followers_count,media_count,username,biography');
    url.searchParams.append('access_token', this.accessToken);

    try {
      const response = await fetch(url.toString(), {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });

      if (!response.ok) {
        const errorData: InstagramErrorResponse = await response.json().catch(() => ({
          error: {
            message: 'Unknown error',
            type: 'UnknownError',
            code: response.status,
            fbtrace_id: '',
          },
        }));
        throw this.handleApiError(response.status, errorData);
      }

      const data: InstagramBusinessAccount = await response.json();

      const stats = this.parseAccountStats(data);

      // Save to cache for next time
      statsCache.setInstagramStats(stats);

      return stats;
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('An unexpected error occurred while fetching Instagram statistics.');
    }
  }

  /**
   * Parse Instagram API response into our InstagramStats format
   */
  private parseAccountStats(data: InstagramBusinessAccount): InstagramStats {
    return {
      followers: data.followers_count,
      posts: data.media_count,
      username: data.username,
      lastFetched: new Date(),
    };
  }

  /**
   * Handle API errors with detailed messages
   */
  private handleApiError(status: number, errorData: InstagramErrorResponse): Error {
    const errorMessage = errorData?.error?.message || 'Unknown error';
    const errorType = errorData?.error?.type || 'UnknownError';
    const errorCode = errorData?.error?.code;

    switch (status) {
      case 400:
        if (errorMessage.includes('Invalid OAuth access token')) {
          return new Error('Token non valido o scaduto. Rigenera il token e aggiorna il file .env');
        }
        return new Error(`Richiesta non valida: ${errorMessage}. Controlla la configurazione API.`);

      case 190: // Facebook-specific error code
        return new Error('Token di accesso scaduto. Rigenera un nuovo long-lived token.');

      case 401:
        return new Error('Non autorizzato: Token di accesso non valido. Controlla VITE_INSTAGRAM_ACCESS_TOKEN.');

      case 403:
        return new Error(`Accesso negato: ${errorMessage}. Verifica che il token abbia i permessi necessari (instagram_basic, pages_read_engagement).`);

      case 404:
        return new Error('Account Instagram Business non trovato. Verifica VITE_INSTAGRAM_BUSINESS_ACCOUNT_ID.');

      case 429:
        return new Error('Troppo richieste. Attendi qualche minuto prima di riprovare.');

      case 500:
      case 503:
        return new Error('Instagram API temporaneamente non disponibile. Riprova più tardi.');

      default:
        if (errorType === 'OAuthException') {
          return new Error(`Errore OAuth: ${errorMessage}. Il token potrebbe essere scaduto o non valido.`);
        }
        return new Error(`Errore Instagram API (${status}): ${errorMessage}`);
    }
  }

  /**
   * Exchange short-lived token for long-lived token (60 days)
   * This should be done server-side or during initial setup
   *
   * @param shortLivedToken - Short-lived user access token from OAuth flow
   * @returns Long-lived token response
   */
  async exchangeForLongLivedToken(shortLivedToken: string): Promise<InstagramLongLivedTokenResponse> {
    const appId = import.meta.env.VITE_FACEBOOK_APP_ID;
    const appSecret = import.meta.env.VITE_FACEBOOK_APP_SECRET;

    if (!appId || !appSecret) {
      throw new Error('Facebook App ID and App Secret are required for token exchange.');
    }

    const url = new URL(`${INSTAGRAM_GRAPH_API_BASE_URL}/oauth/access_token`);
    url.searchParams.append('grant_type', 'fb_exchange_token');
    url.searchParams.append('client_id', appId);
    url.searchParams.append('client_secret', appSecret);
    url.searchParams.append('fb_exchange_token', shortLivedToken);

    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(`Failed to exchange token: ${errorData.error?.message || 'Unknown error'}`);
    }

    return await response.json();
  }

  /**
   * Refresh long-lived token (extends expiration by 60 days)
   * Should be called before token expires
   *
   * @returns Refreshed token response
   */
  async refreshLongLivedToken(): Promise<InstagramTokenRefreshResponse> {
    this.validateConfig();

    const url = new URL(`${INSTAGRAM_GRAPH_API_BASE_URL}/oauth/access_token`);
    url.searchParams.append('grant_type', 'fb_exchange_token');
    url.searchParams.append('access_token', this.accessToken);

    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(`Failed to refresh token: ${errorData.error?.message || 'Unknown error'}`);
    }

    return await response.json();
  }

  /**
   * Debug token to check expiration and validity
   * Useful for monitoring token health
   *
   * @returns Token debug information including expiration
   */
  async debugToken(): Promise<any> {
    const appId = import.meta.env.VITE_FACEBOOK_APP_ID;
    const appToken = import.meta.env.VITE_FACEBOOK_APP_TOKEN;

    if (!appId || !appToken) {
      throw new Error('Facebook App ID and App Token required for debugging.');
    }

    const url = new URL(`${INSTAGRAM_GRAPH_API_BASE_URL}/debug_token`);
    url.searchParams.append('input_token', this.accessToken);
    url.searchParams.append('access_token', appToken);

    const response = await fetch(url.toString());

    if (!response.ok) {
      throw new Error('Failed to debug token');
    }

    return await response.json();
  }

  /**
   * Get API configuration status
   */
  isConfigured(): boolean {
    return Boolean(this.accessToken && this.instagramBusinessAccountId);
  }

  /**
   * Get current access token status (masked for security)
   */
  getAccessTokenStatus(): string {
    if (!this.accessToken) return 'Non configurato';
    if (this.accessToken.length < 20) return 'Token troppo corto';
    return `Configurato (${this.accessToken.substring(0, 15)}...)`;
  }

  /**
   * Get current Instagram Business Account ID
   */
  getBusinessAccountId(): string {
    return this.instagramBusinessAccountId || 'Non configurato';
  }
}

// Export singleton instance
export const instagramApi = new InstagramApiService();

// Export class for testing purposes
export { InstagramApiService };
