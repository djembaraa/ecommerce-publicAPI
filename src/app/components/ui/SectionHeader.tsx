import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  actionLabel?: string;
  actionHref?: string;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  actionLabel,
  actionHref,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 ${className}`}>
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-text)] tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-[var(--color-text-muted)] max-w-lg">
            {subtitle}
          </p>
        )}
      </div>
      {actionLabel && actionHref && (
        <Link
          href={actionHref}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors shrink-0"
        >
          {actionLabel}
          <ArrowRight className="w-4 h-4" />
        </Link>
      )}
    </div>
  );
}
