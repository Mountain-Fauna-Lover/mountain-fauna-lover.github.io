import type { YouTubeChannelResponse, YouTubeStats, YouTubeStatsError } from '@/types/youtube';

/**
 * YouTube Data API v3 Service
 *
 * Handles all interactions with YouTube API including:
 * - Fetching channel statistics
 * - Error handling
 * - Rate limiting awareness
 */

const YOUTUBE_API_BASE_URL = 'https://www.googleapis.com/youtube/v3';

class YouTubeApiService {
  private apiKey: string;
  private channelId: string;

  constructor() {
    this.apiKey = import.meta.env.VITE_YOUTUBE_API_KEY || '';
    this.channelId = import.meta.env.VITE_YOUTUBE_CHANNEL_ID || '';

    if (!this.apiKey) {
      console.warn('⚠️ YouTube API Key is not set. Please add VITE_YOUTUBE_API_KEY to your .env file');
    }

    if (!this.channelId) {
      console.warn('⚠️ YouTube Channel ID is not set. Please add VITE_YOUTUBE_CHANNEL_ID to your .env file');
    }
  }

  /**
   * Validate API configuration
   */
  private validateConfig(): void {
    if (!this.apiKey || !this.channelId) {
      throw new Error('YouTube API key or Channel ID is missing. Check your .env file.');
    }
  }

  /**
   * Fetch channel statistics from YouTube API
   *
   * @returns Promise with channel statistics
   * @throws Error if API call fails or configuration is invalid
   */
  async fetchChannelStats(): Promise<YouTubeStats> {
    this.validateConfig();

    const url = new URL(`${YOUTUBE_API_BASE_URL}/channels`);
    url.searchParams.append('part', 'statistics,snippet');
    url.searchParams.append('id', this.channelId);
    url.searchParams.append('key', this.apiKey);

    try {
      const response = await fetch(url.toString(), {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw this.handleApiError(response.status, errorData);
      }

      const data: YouTubeChannelResponse = await response.json();

      if (!data.items || data.items.length === 0) {
        throw new Error('Channel not found. Please check your Channel ID.');
      }

      return this.parseChannelStats(data);
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('An unexpected error occurred while fetching YouTube statistics.');
    }
  }

  /**
   * Parse YouTube API response into our YouTubeStats format
   */
  private parseChannelStats(data: YouTubeChannelResponse): YouTubeStats {
    const item = data.items[0];
    const statistics = item.statistics;

    if (!statistics) {
      throw new Error('Statistics data not available from YouTube API');
    }

    return {
      subscribers: parseInt(statistics.subscriberCount, 10),
      videoCount: parseInt(statistics.videoCount, 10),
      viewCount: parseInt(statistics.viewCount, 10),
      lastFetched: new Date(),
    };
  }

  /**
   * Handle API errors with detailed messages
   */
  private handleApiError(status: number, errorData: any): Error {
    const errorMessage = errorData?.error?.message || 'Unknown error';
    const errorCode = errorData?.error?.code;

    switch (status) {
      case 400:
        return new Error(`Bad Request: ${errorMessage}. Please check your API configuration.`);
      case 401:
        return new Error('Unauthorized: Invalid API Key. Please check your VITE_YOUTUBE_API_KEY.');
      case 403:
        if (errorMessage.includes('quotaExceeded')) {
          return new Error('YouTube API quota exceeded. Please try again tomorrow.');
        }
        return new Error(`Forbidden: ${errorMessage}. Your API key might not have the necessary permissions.`);
      case 404:
        return new Error('Channel not found. Please verify your Channel ID.');
      case 429:
        return new Error('Too many requests. Please wait a moment before trying again.');
      case 500:
      case 503:
        return new Error('YouTube API is temporarily unavailable. Please try again later.');
      default:
        return new Error(`YouTube API Error (${status}): ${errorMessage}`);
    }
  }

  /**
   * Get API configuration status
   */
  isConfigured(): boolean {
    return Boolean(this.apiKey && this.channelId);
  }

  /**
   * Get current API key (masked for security)
   */
  getApiKeyStatus(): string {
    if (!this.apiKey) return 'Not configured';
    return `Configured (${this.apiKey.substring(0, 10)}...)`;
  }

  /**
   * Get current channel ID
   */
  getChannelId(): string {
    return this.channelId || 'Not configured';
  }
}

// Export singleton instance
export const youtubeApi = new YouTubeApiService();

// Export class for testing purposes
export { YouTubeApiService };
