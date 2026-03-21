'use client';

import Link from 'next/link';
import { IconMenu2 } from '@tabler/icons-react';
import { mainNavItems } from '@/lib/config/navItems';
import Breadcrumb from './Breadcrumb';

export default function Header({ onToggleSidebar }: { onToggleSidebar: () => void }) {
  return (
    <div
      className="sticky top-0 z-10 flex h-24 items-center justify-between p-5 pb-10 select-none"
      style={{
        mask: 'linear-gradient(black, black, transparent)',
        WebkitMask: 'linear-gradient(black, black, transparent)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
      }}
    >
      <Breadcrumb />
      <button
        onClick={onToggleSidebar}
        className="text-text hover:text-accent rounded p-2 md:hidden"
        aria-label="Open navigation menu"
      >
        <IconMenu2 size={24} />
      </button>
      <nav className="hidden items-center space-x-4 md:flex">
        {mainNavItems.map((item) =>
          item.scrollTo ? (
            <button
              key={item.title}
              onClick={() => {
                const el = document.getElementById(item.scrollTo!);
                if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 96, behavior: 'smooth' });
              }}
              className="text-text hover:text-accent cursor-pointer rounded px-3 py-2 text-sm font-medium transition-colors duration-150"
            >
              {item.title}
            </button>
          ) : (
            <Link
              key={item.title}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className="text-text hover:text-accent rounded px-3 py-2 text-sm font-medium transition-colors duration-150"
            >
              {item.title}
            </Link>
          )
        )}
        <button
          onClick={onToggleSidebar}
          className="text-text hover:text-accent cursor-pointer rounded px-3 py-2 text-sm font-medium"
          aria-label="Open more navigation items"
        >
          More...
        </button>
      </nav>
    </div>
  );
}
