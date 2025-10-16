import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { youtubeApi } from '@/services/youtubeApi';
import type { YouTubeStats } from '@/types/youtube';

/**
 * React Query hook for fetching YouTube channel statistics
 *
 * Features:
 * - localStorage cache with 24h expiration (instant load on revisit)
 * - React Query memory cache (30 minutes)
 * - Retry logic on failure
 * - Loading and error states
 *
 * Performance:
 * - First visit: ~2s (API call)
 * - Cached: <100ms (instant from localStorage)
 *
 * @returns UseQueryResult with YouTube statistics
 *
 * @example
 * ```tsx
 * const { data, isLoading, error } = useYouTubeStats();
 *
 * if (isLoading) return <Spinner />;
 * if (error) return <ErrorMessage error={error} />;
 *
 * return <div>Subscribers: {data.subscribers}</div>;
 * ```
 */
export const useYouTubeStats = (): UseQueryResult<YouTubeStats, Error> => {
  return useQuery<YouTubeStats, Error>({
    queryKey: ['youtube-stats'],

    queryFn: async () => {
      // fetchChannelStats now checks localStorage cache first
      // and only calls API if cache is expired (>24h)
      return await youtubeApi.fetchChannelStats();
    },

    // React Query cache for 30 minutes (in memory)
    staleTime: 1000 * 60 * 30,

    // Keep data in cache for 1 hour even when not being used
    gcTime: 1000 * 60 * 60,

    // Retry failed requests up to 2 times
    retry: 2,

    // Exponential backoff for retries (1s, 2s, 4s)
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),

    // Don't refetch on window focus (localStorage cache handles it)
    refetchOnWindowFocus: false,

    // Don't refetch when component remounts (localStorage cache handles it)
    refetchOnMount: false,

    // Don't refetch on reconnect
    refetchOnReconnect: false,

    // Enable/disable based on API configuration
    enabled: youtubeApi.isConfigured(),
  });
};

/**
 * Hook variant that returns formatted data ready for display
 *
 * @example
 * ```tsx
 * const stats = useFormattedYouTubeStats();
 *
 * return (
 *   <div>
 *     <p>Subscribers: {stats.subscribers}</p>
 *     <p>Videos: {stats.videos}</p>
 *     <p>Status: {stats.status}</p>
 *   </div>
 * );
 * ```
 */
export const useFormattedYouTubeStats = () => {
  const query = useYouTubeStats();

  return {
    subscribers: query.data?.subscribers ?? 0,
    videos: query.data?.videoCount ?? 0,
    views: query.data?.viewCount ?? 0,
    lastFetched: query.data?.lastFetched,
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    status: query.status,
    isConfigured: youtubeApi.isConfigured(),
  };
};
