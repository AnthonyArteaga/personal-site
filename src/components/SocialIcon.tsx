'use client';

import { IconBrandGithub, IconBrandLinkedin, IconBrandX } from '@tabler/icons-react';

const iconMap = {
  github: IconBrandGithub,
  linkedin: IconBrandLinkedin,
  x: IconBrandX,
} as const;

export default function SocialIcon({ name, size = 18, stroke = 1.5 }: {
  name: keyof typeof iconMap;
  size?: number;
  stroke?: number;
}) {
  const Icon = iconMap[name];
  return <Icon size={size} stroke={stroke} />;
}
