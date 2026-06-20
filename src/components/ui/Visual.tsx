import type { ElementType, ReactNode } from 'react';

export function GlassCard({ children, className = '', as: Tag = 'div' }: { children: ReactNode; className?: string; as?: ElementType }) {
  return <Tag className={`glass-card ${className}`}>{children}</Tag>;
}

export function GradientBlob({ tone = 'violet', className = '' }: { tone?: 'violet' | 'cyan' | 'pink' | 'emerald'; className?: string }) {
  return <span aria-hidden="true" className={`gradient-blob gradient-blob-${tone} ${className}`}/>;
}

export function SectionGlow({ className = '' }: { className?: string }) {
  return <span aria-hidden="true" className={`section-glow ${className}`}/>;
}
