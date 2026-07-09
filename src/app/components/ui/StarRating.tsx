import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  maxStars?: number;
  size?: number;
  showValue?: boolean;
  className?: string;
}

export default function StarRating({
  rating,
  maxStars = 5,
  size = 14,
  showValue = false,
  className = '',
}: StarRatingProps) {
  return (
    <div className={`inline-flex items-center gap-0.5 ${className}`}>
      {Array.from({ length: maxStars }, (_, i) => {
        const filled = i < Math.floor(rating);
        const halfFilled = i === Math.floor(rating) && rating % 1 >= 0.5;

        return (
          <Star
            key={i}
            size={size}
            className={`${
              filled || halfFilled
                ? 'fill-[var(--color-accent)] text-[var(--color-accent)]'
                : 'fill-none text-gray-300'
            }`}
          />
        );
      })}
      {showValue && (
        <span className="ml-1.5 text-sm text-[var(--color-text-muted)]">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}
