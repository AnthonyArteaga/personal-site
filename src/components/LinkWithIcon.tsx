'use client';

import SocialIcon from '@/components/SocialIcon';

interface LinkWithIconProps {
  href: string;
  text: string;
  iconName?: 'github' | 'linkedin' | 'x';
  external?: boolean;
  className?: string;
}

export default function LinkWithIcon({ href, text, iconName, external = false, className = '' }: LinkWithIconProps) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`text-subtext1 hover:text-accent inline-flex items-center gap-1.5 transition-colors duration-200 ${className}`}
    >
      {iconName && <SocialIcon name={iconName} size={18} stroke={1.5} />}
      {text && <span>{text}</span>}
    </a>
  );
}
