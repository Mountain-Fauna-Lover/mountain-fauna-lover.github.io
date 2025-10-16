import type {
  StatsCacheFile,
  YouTubeCachedStats,
  InstagramCachedStats,
  CacheMetadata,
  CACHE_DURATION_MS
} from '@/types/cache';
import type { YouTubeStats } from '@/types/youtube';
import type { InstagramStats } from '@/types/instagram';

/**
 * Stats Cache Service
 *
 * Manages persistent caching of API statistics to localStorage
 * with 24-hour expiration to minimize API calls and improve load times.
 *
 * Features:
 * - Stores stats in localStorage (survives page reloads)
 * - 24-hour cache duration
 * - Automatic expiration checking
 * - Fallback to API if cache is expired or missing
 */

const CACHE_KEY = 'mountain-fauna-stats-cache';
const CACHE_VERSION = '1.0.0';
const CACHE_DURATION_MS = 24 * 60 * 60 * 1000; // 24 hours

class StatsCacheService {
  /**
   * Get the full cache from localStorage
   */
  private getCache(): StatsCacheFile | null {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (!cached) return null;

      const data: StatsCacheFile = JSON.parse(cached);

      // Version check
      if (data.version !== CACHE_VERSION) {
        console.log('📦 Cache version mismatch, clearing cache');
        this.clearCache();
        return null;
      }

      return data;
    } catch (error) {
      console.error('❌ Error reading cache:', error);
      return null;
    }
  }

  /**
   * Save the full cache to localStorage
   */
  private saveCache(data: StatsCacheFile): void {
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify(data));
      console.log('💾 Cache saved successfully');
    } catch (error) {
      console.error('❌ Error saving cache:', error);
    }
  }

  /**
   * Check if cached data is still valid (not expired)
   */
  private isCacheValid(metadata: CacheMetadata): boolean {
    const now = new Date();
    const expiresAt = new Date(metadata.expiresAt);

    const isValid = now < expiresAt;

    if (isValid) {
      const hoursRemaining = Math.floor((expiresAt.getTime() - now.getTime()) / (1000 * 60 * 60));
      console.log(`✅ Cache valid, expires in ${hoursRemaining} hours`);
    } else {
      console.log('⏰ Cache expired, will fetch fresh data');
    }

    return isValid;
  }

  /**
   * Create cache metadata with expiration
   */
  private createMetadata(): CacheMetadata {
    const now = new Date();
    const expiresAt = new Date(now.getTime() + CACHE_DURATION_MS);

    return {
      lastUpdated: now.toISOString(),
      expiresAt: expiresAt.toISOString(),
      source: 'api',
    };
  }

  /**
   * Get YouTube stats from cache
   * Returns null if cache is missing or expired
   */
  getYouTubeStats(): YouTubeCachedStats | null {
    const cache = this.getCache();
    if (!cache?.youtube) {
      console.log('📭 No YouTube cache found');
      return null;
    }

    if (!this.isCacheValid(cache.youtube.metadata)) {
      console.log('⏰ YouTube cache expired');
      return null;
    }

    console.log('🎬 Using cached YouTube stats');
    return cache.youtube;
  }

  /**
   * Save YouTube stats to cache
   */
  setYouTubeStats(stats: YouTubeStats): void {
    const cache = this.getCache() || { version: CACHE_VERSION };

    cache.youtube = {
      subscribers: stats.subscribers,
      videoCount: stats.videoCount,
      viewCount: stats.viewCount,
      metadata: this.createMetadata(),
    };

    this.saveCache(cache);
    console.log('💾 YouTube stats cached:', {
      subscribers: stats.subscribers,
      videos: stats.videoCount,
      views: stats.viewCount,
    });
  }

  /**
   * Get Instagram stats from cache
   * Returns null if cache is missing or expired
   */
  getInstagramStats(): InstagramCachedStats | null {
    const cache = this.getCache();
    if (!cache?.instagram) {
      console.log('📭 No Instagram cache found');
      return null;
    }

    if (!this.isCacheValid(cache.instagram.metadata)) {
      console.log('⏰ Instagram cache expired');
      return null;
    }

    console.log('📸 Using cached Instagram stats');
    return cache.instagram;
  }

  /**
   * Save Instagram stats to cache
   */
  setInstagramStats(stats: InstagramStats): void {
    const cache = this.getCache() || { version: CACHE_VERSION };

    cache.instagram = {
      followers: stats.followers,
      posts: stats.posts,
      username: stats.username,
      metadata: this.createMetadata(),
    };

    this.saveCache(cache);
    console.log('💾 Instagram stats cached:', {
      followers: stats.followers,
      posts: stats.posts,
      username: stats.username,
    });
  }

  /**
   * Clear all cached stats
   */
  clearCache(): void {
    try {
      localStorage.removeItem(CACHE_KEY);
      console.log('🗑️ Cache cleared');
    } catch (error) {
      console.error('❌ Error clearing cache:', error);
    }
  }

  /**
   * Get cache info for debugging
   */
  getCacheInfo(): {
    hasYouTube: boolean;
    hasInstagram: boolean;
    youtubeExpiry?: string;
    instagramExpiry?: string;
  } {
    const cache = this.getCache();

    return {
      hasYouTube: !!cache?.youtube,
      hasInstagram: !!cache?.instagram,
      youtubeExpiry: cache?.youtube?.metadata.expiresAt,
      instagramExpiry: cache?.instagram?.metadata.expiresAt,
    };
  }

  /**
   * Force refresh - clears cache for next fetch
   */
  forceRefresh(): void {
    this.clearCache();
    console.log('🔄 Cache cleared, next fetch will be fresh');
  }
}

// Export singleton instance
export const statsCache = new StatsCacheService();

// Export class for testing
export { StatsCacheService };
