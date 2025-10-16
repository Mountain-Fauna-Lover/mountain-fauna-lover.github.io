/**
 * Manual Statistics Configuration
 *
 * This file contains statistics that are updated manually.
 * Use this for platforms that don't have easy API access (Instagram)
 * or for custom metrics (wildlife sightings).
 *
 * Update these values periodically (e.g., once a month).
 */

export interface ManualStats {
  instagram: {
    followers: number;
    posts: number;
    lastUpdated: string; // ISO date format
  };
  sightings: {
    total: number;
    species: number;
    locations: number;
    lastUpdated: string;
  };
  tiktok?: {
    followers: number;
    likes: number;
    lastUpdated: string;
  };
}

/**
 * Current manual statistics
 *
 * TODO: Update these values monthly or as needed
 */
export const manualStats: ManualStats = {
  instagram: {
    followers: 5800,
    posts: 120,
    lastUpdated: '2024-01-15',
  },
  sightings: {
    total: 243,
    species: 15, // Different species documented
    locations: 8, // Different locations visited
    lastUpdated: '2024-01-15',
  },
  tiktok: {
    followers: 3200,
    likes: 25000,
    lastUpdated: '2024-01-15',
  },
};

/**
 * Check if stats need updating (older than 30 days)
 */
export const isStatsStale = (lastUpdated: string): boolean => {
  const lastUpdate = new Date(lastUpdated);
  const now = new Date();
  const daysSinceUpdate = (now.getTime() - lastUpdate.getTime()) / (1000 * 60 * 60 * 24);

  return daysSinceUpdate > 30;
};

/**
 * Get all manual stats with staleness indicators
 */
export const getManualStatsWithStatus = () => {
  return {
    instagram: {
      ...manualStats.instagram,
      isStale: isStatsStale(manualStats.instagram.lastUpdated),
    },
    sightings: {
      ...manualStats.sightings,
      isStale: isStatsStale(manualStats.sightings.lastUpdated),
    },
    tiktok: manualStats.tiktok
      ? {
          ...manualStats.tiktok,
          isStale: isStatsStale(manualStats.tiktok.lastUpdated),
        }
      : undefined,
  };
};
