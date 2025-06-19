import type { LucideIcon } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  variant?: 'outline' | 'dark';
}