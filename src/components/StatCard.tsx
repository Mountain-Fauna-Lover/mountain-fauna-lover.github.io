import { type ReactNode } from 'react';

interface StatCardProps {
  icon: ReactNode;
  value: string | number;
  label: string;
  color: 'red' | 'primary' | 'amber' | 'pink' | 'blue' | 'green';
  isLoading?: boolean;
}

const colorClasses = {
  red: {
    icon: 'text-red-500',
    border: 'hover:border-red-500/30',
    glow: 'from-red-500/10 to-red-600/5',
  },
  primary: {
    icon: 'text-primary',
    border: 'hover:border-primary/30',
    glow: 'from-primary/10 to-accent/5',
  },
  amber: {
    icon: 'text-amber-600',
    border: 'hover:border-amber-500/30',
    glow: 'from-amber-500/10 to-amber-600/5',
  },
  pink: {
    icon: 'text-pink-500',
    border: 'hover:border-pink-500/30',
    glow: 'from-pink-500/10 to-purple-600/5',
  },
  blue: {
    icon: 'text-blue-500',
    border: 'hover:border-blue-500/30',
    glow: 'from-blue-500/10 to-blue-600/5',
  },
  green: {
    icon: 'text-green-500',
    border: 'hover:border-green-500/30',
    glow: 'from-green-500/10 to-green-600/5',
  },
};

export const StatCard = ({ icon, value, label, color, isLoading = false }: StatCardProps) => {
  const colors = colorClasses[color];

  return (
    <div className="group relative">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${colors.glow} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />
      <div
        className={`relative text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 ${colors.border} transition-all duration-300 hover:scale-105`}
      >
        <div className="mb-3">
          <div className={colors.icon}>{icon}</div>
        </div>

        {isLoading ? (
          // Skeleton loader
          <div className="animate-pulse space-y-2">
            <div className="h-9 bg-muted/50 rounded w-20 mx-auto" />
            <div className="h-4 bg-muted/30 rounded w-24 mx-auto" />
          </div>
        ) : (
          <>
            <div className="font-serif text-3xl md:text-4xl font-bold bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent mb-2">
              {value}
            </div>
            <div className="text-sm text-muted-foreground font-medium">{label}</div>
          </>
        )}
      </div>
    </div>
  );
};

/**
 * Error State Card
 */
interface StatCardErrorProps {
  icon: ReactNode;
  label: string;
  error?: string;
  color: StatCardProps['color'];
}

export const StatCardError = ({ icon, label, error, color }: StatCardErrorProps) => {
  const colors = colorClasses[color];

  return (
    <div className="group relative">
      <div
        className={`relative text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 opacity-60`}
      >
        <div className="mb-3">
          <div className={colors.icon}>{icon}</div>
        </div>
        <div className="font-serif text-3xl md:text-4xl font-bold text-muted-foreground mb-2">--</div>
        <div className="text-sm text-muted-foreground font-medium">{label}</div>
        {error && (
          <div className="mt-2 text-xs text-red-500/70" title={error}>
            Non disponibile
          </div>
        )}
      </div>
    </div>
  );
};
