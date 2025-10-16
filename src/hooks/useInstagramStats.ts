import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { instagramApi } from '@/services/instagramApi';
import type { InstagramStats } from '@/types/instagram';

/**
 * React Query hook for fetching Instagram Business Account statistics
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
 * @returns UseQueryResult with Instagram statistics
 *
 * @example
 * ```tsx
 * const { data, isLoading, error } = useInstagramStats();
 *
 * if (isLoading) return <Spinner />;
 * if (error) return <ErrorMessage error={error} />;
 *
 * return <div>Followers: {data.followers}</div>;
 * ```
 */
export const useInstagramStats = (): UseQueryResult<InstagramStats, Error> => {
  return useQuery<InstagramStats, Error>({
    queryKey: ['instagram-stats'],

    queryFn: async () => {
      // fetchAccountStats now checks localStorage cache first
      // and only calls API if cache is expired (>24h)
      return await instagramApi.fetchAccountStats();
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
    enabled: instagramApi.isConfigured(),
  });
};

/**
 * Hook variant that returns formatted data ready for display
 *
 * @example
 * ```tsx
 * const stats = useFormattedInstagramStats();
 *
 * return (
 *   <div>
 *     <p>Followers: {stats.followers}</p>
 *     <p>Posts: {stats.posts}</p>
 *     <p>Username: {stats.username}</p>
 *     <p>Status: {stats.status}</p>
 *   </div>
 * );
 * ```
 */
export const useFormattedInstagramStats = () => {
  const query = useInstagramStats();

  return {
    followers: query.data?.followers ?? 0,
    posts: query.data?.posts ?? 0,
    username: query.data?.username ?? '',
    lastFetched: query.data?.lastFetched,
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    status: query.status,
    isConfigured: instagramApi.isConfigured(),
  };
};
