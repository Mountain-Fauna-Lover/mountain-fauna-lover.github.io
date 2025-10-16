/**
 * Instagram Graph API Response Types
 * Based on Instagram Graph API for Business/Creator accounts
 */

/**
 * Instagram Business Account Response
 * GET /{ig-user-id}?fields=followers_count,media_count,username
 */
export interface InstagramBusinessAccount {
  id: string;
  username: string;
  followers_count: number;
  media_count: number;
  biography?: string;
  profile_picture_url?: string;
  website?: string;
}

/**
 * Facebook Page Response (needed to get Instagram Business Account ID)
 * GET /me/accounts?fields=instagram_business_account
 */
export interface FacebookPageResponse {
  data: Array<{
    id: string;
    name: string;
    instagram_business_account?: {
      id: string;
    };
  }>;
  paging?: {
    cursors: {
      before: string;
      after: string;
    };
  };
}

/**
 * Instagram Error Response
 */
export interface InstagramErrorResponse {
  error: {
    message: string;
    type: string;
    code: number;
    fbtrace_id: string;
  };
}

/**
 * Processed statistics for our application
 */
export interface InstagramStats {
  followers: number;
  posts: number;
  username: string;
  lastFetched: Date;
}

export interface InstagramStatsError {
  message: string;
  code?: string;
  status?: number;
}

/**
 * OAuth Token Response
 */
export interface InstagramOAuthTokenResponse {
  access_token: string;
  token_type: string;
  expires_in?: number;
}

/**
 * Long-lived Token Exchange Response
 */
export interface InstagramLongLivedTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number; // typically 60 days (5184000 seconds)
}

/**
 * Token Refresh Response
 */
export interface InstagramTokenRefreshResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}
