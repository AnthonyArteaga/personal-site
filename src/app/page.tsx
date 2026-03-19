'use client';

import { useState } from 'react';
import { IconArrowRight } from '@tabler/icons-react';
import { HomeSocialLinks } from '@/lib/config/pages';
import LinkWithIcon from '@/components/LinkWithIcon';
import Link from 'next/link';

export default function HomePage() {
  const [isNameHovered, setIsNameHovered] = useState(false);

  return (
    <div className="mx-auto max-w-6xl space-y-12 px-0 py-8 md:space-y-16 md:px-4 md:py-12">
      {/* Intro */}
      <section className="space-y-5 px-4 md:px-0">
        <h1 className="text-3xl font-bold md:text-4xl">
          Hey! I&apos;m{' '}
          <span className="text-accent">
            <span
              className="decoration-accent/30 underline decoration-dashed opacity-70 cursor-pointer"
              onMouseEnter={() => setIsNameHovered(true)}
              onMouseLeave={() => setIsNameHovered(false)}
              onFocus={() => setIsNameHovered(true)}
              onBlur={() => setIsNameHovered(false)}
              tabIndex={0}
              role="button"
              aria-label="Hover for a fun fact"
            >
              Anthony
            </span>
            <span
              className={`pointer-events-none inline-flex overflow-hidden align-baseline whitespace-nowrap transition-all duration-500 ease-out select-none ${
                isNameHovered ? 'max-w-[10ch] opacity-100' : 'max-w-0 opacity-0'
              }`}
            >
              &nbsp;(Ant)
            </span>{' '}
            <span>Arteaga</span>
          </span>
        </h1>

        <p className="text-subtext0 max-w-prose text-lg leading-relaxed">
          A short bio about yourself goes here. Mention what you&apos;re working on, what you&apos;ve
          built, and what drives you. Link to{' '}
          <a className="link text-accent/85" target="_blank" rel="noopener" href="https://example.com">
            notable projects
          </a>{' '}
          and{' '}
          <a className="link text-accent/85" target="_blank" rel="noopener" href="https://example.com">
            organizations
          </a>{' '}
          you&apos;ve contributed to. Make it personal and memorable.
        </p>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2">
          {HomeSocialLinks.map((link, i) => (
            <span key={link.href} className="contents">
              <LinkWithIcon
                href={link.href}
                text={link.text}
                iconName={link.iconName}
                external
                className="text-sm"
              />
              {i < HomeSocialLinks.length - 1 && (
                <span className="text-surface1 text-xs">|</span>
              )}
            </span>
          ))}
          <span className="text-surface1 text-xs">|</span>
          <Link
            href="/about"
            className="group text-subtext1 hover:text-accent inline-flex items-center gap-1 text-sm transition-colors duration-200"
          >
            <span>More about me</span>
            <IconArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </section>
    </div>
  );
}