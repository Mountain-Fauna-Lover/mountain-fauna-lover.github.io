/**
 * Cache Types for Persistent Storage
 */

export interface CacheMetadata {
  lastUpdated: string; // ISO 8601 date string
  expiresAt: string; // ISO 8601 date string
  source: 'api' | 'cache';
}

export interface YouTubeCachedStats {
  subscribers: number;
  videoCount: number;
  viewCount: number;
  metadata: CacheMetadata;
}

export interface InstagramCachedStats {
  followers: number;
  posts: number;
  username: string;
  metadata: CacheMetadata;
}

export interface StatsCacheFile {
  youtube?: YouTubeCachedStats;
  instagram?: InstagramCachedStats;
  version: string; // Cache format version
}

export const CACHE_DURATION_MS = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
export const CACHE_FILE_PATH = '/cache/stats-cache.json';
