type BadgeVariant = 'default' | 'sale' | 'new' | 'success' | 'warning' | 'danger';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-gray-100 text-gray-700',
  sale: 'bg-[var(--color-danger)] text-white',
  new: 'bg-[var(--color-accent)] text-white',
  success: 'bg-[var(--color-success)] text-white',
  warning: 'bg-amber-500 text-white',
  danger: 'bg-[var(--color-danger)] text-white',
};

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 text-xs font-semibold rounded-lg ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
