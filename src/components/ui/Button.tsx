import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'text' | 'danger';

type Props = {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  showIcon?: boolean;
  ariaLabel?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, to, href, variant = 'primary', className = '', showIcon = true, ariaLabel, disabled, ...props }: Props) {
  const styles = `btn btn-${variant} ${className}`;
  const content = <><span className="btn-label">{children}</span>{showIcon && <ArrowUpRight aria-hidden="true" className="btn-icon" />}</>;

  if (to) return <Link aria-label={ariaLabel} className={styles} to={to}>{content}</Link>;
  if (href) return <a aria-label={ariaLabel} className={styles} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>{content}</a>;
  return <button aria-label={ariaLabel} className={styles} disabled={disabled} {...props}>{content}</button>;
}
