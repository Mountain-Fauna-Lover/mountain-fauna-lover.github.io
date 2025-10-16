/**
 * Format large numbers for display
 *
 * Converts numbers to abbreviated format (K, M, B)
 *
 * @param num - Number to format
 * @param decimals - Number of decimal places (default: 1)
 * @returns Formatted string
 *
 * @example
 * formatNumber(1234) => "1.2K"
 * formatNumber(12345) => "12.3K"
 * formatNumber(1234567) => "1.2M"
 * formatNumber(1234567890) => "1.2B"
 * formatNumber(999) => "999"
 */
export const formatNumber = (num: number, decimals: number = 1): string => {
  if (isNaN(num) || !isFinite(num)) {
    return '0';
  }

  // Less than 1000, return as-is
  if (num < 1000) {
    return num.toString();
  }

  // Billions
  if (num >= 1_000_000_000) {
    return `${(num / 1_000_000_000).toFixed(decimals)}B`;
  }

  // Millions
  if (num >= 1_000_000) {
    return `${(num / 1_000_000).toFixed(decimals)}M`;
  }

  // Thousands
  if (num >= 1000) {
    return `${(num / 1000).toFixed(decimals)}K`;
  }

  return num.toString();
};

/**
 * Format number with commas for thousands separator
 *
 * @param num - Number to format
 * @returns Formatted string with commas
 *
 * @example
 * formatNumberWithCommas(1234567) => "1,234,567"
 */
export const formatNumberWithCommas = (num: number): string => {
  return num.toLocaleString('it-IT');
};

/**
 * Format compact number (similar to YouTube's display)
 *
 * Uses more aggressive rounding and no decimal places for larger numbers
 *
 * @param num - Number to format
 * @returns Formatted string
 *
 * @example
 * formatCompact(1234) => "1.2K"
 * formatCompact(12345) => "12K"
 * formatCompact(1234567) => "1.2M"
 */
export const formatCompact = (num: number): string => {
  if (num < 1000) {
    return num.toString();
  }

  if (num >= 1_000_000) {
    const millions = num / 1_000_000;
    return millions >= 10 ? `${Math.floor(millions)}M` : `${millions.toFixed(1)}M`;
  }

  const thousands = num / 1000;
  return thousands >= 10 ? `${Math.floor(thousands)}K` : `${thousands.toFixed(1)}K`;
};

/**
 * Get the appropriate suffix for a number
 *
 * @param num - Number to check
 * @returns Suffix string (K, M, B, or empty)
 */
export const getNumberSuffix = (num: number): string => {
  if (num >= 1_000_000_000) return 'B';
  if (num >= 1_000_000) return 'M';
  if (num >= 1000) return 'K';
  return '';
};

/**
 * Parse formatted number back to integer
 *
 * @param formatted - Formatted string (e.g., "1.2K")
 * @returns Original number
 *
 * @example
 * parseFormattedNumber("1.2K") => 1200
 * parseFormattedNumber("5M") => 5000000
 */
export const parseFormattedNumber = (formatted: string): number => {
  const multipliers: Record<string, number> = {
    K: 1000,
    M: 1_000_000,
    B: 1_000_000_000,
  };

  const match = formatted.match(/^([\d.]+)([KMB]?)$/i);
  if (!match) return 0;

  const [, numStr, suffix] = match;
  const num = parseFloat(numStr);
  const multiplier = multipliers[suffix.toUpperCase()] || 1;

  return Math.round(num * multiplier);
};
