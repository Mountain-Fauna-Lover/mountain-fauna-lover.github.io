/**
 * YouTube API Response Types
 * Based on YouTube Data API v3
 */

export interface YouTubeChannelStatistics {
  viewCount: string;
  subscriberCount: string;
  hiddenSubscriberCount: boolean;
  videoCount: string;
}

export interface YouTubeChannelSnippet {
  title: string;
  description: string;
  customUrl: string;
  publishedAt: string;
  thumbnails: {
    default: { url: string; width: number; height: number };
    medium: { url: string; width: number; height: number };
    high: { url: string; width: number; height: number };
  };
  country?: string;
}

export interface YouTubeChannelItem {
  kind: string;
  etag: string;
  id: string;
  snippet?: YouTubeChannelSnippet;
  statistics?: YouTubeChannelStatistics;
}

export interface YouTubeChannelResponse {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: YouTubeChannelItem[];
}

/**
 * Processed statistics for our application
 */
export interface YouTubeStats {
  subscribers: number;
  videoCount: number;
  viewCount: number;
  lastFetched: Date;
}

export interface YouTubeStatsError {
  message: string;
  code?: string;
  status?: number;
}
