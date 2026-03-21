'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IconX, IconExternalLink } from '@tabler/icons-react';
import { mainNavItems, moreNavItems } from '@/lib/config/navItems';
import ThemeSelector from '@/components/themes/ThemeSelector';
import ColorSelector from '@/components/themes/ColorSelector';

export default function Sidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-30 backdrop-blur-sm transition-opacity duration-300 ease-in-out"
          onClick={onClose}
          role="button"
          tabIndex={-1}
          aria-label="Close sidebar"
        />
      )}

      <aside
        className={`bg-mantle text-text border-surface0 fixed inset-y-0 right-0 z-40 flex w-64 transform flex-col border-l shadow-xl transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        id="sidebar-nav"
      >
        <div className="border-surface0 flex h-16 shrink-0 items-center justify-between border-b p-4">
          <span className="text-accent font-mono text-lg font-semibold">Navigation</span>
          <button
            onClick={onClose}
            className="text-subtext1 hover:text-red rounded"
            aria-label="Close navigation menu"
          >
            <IconX size={24} />
          </button>
        </div>

        <div className="border-surface0 shrink-0 border-b p-4">
          <div className="pb-1">
            <ThemeSelector />
          </div>
          <ColorSelector />
        </div>

        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-2" role="list">
            {mainNavItems.map((item) => (
              <li key={item.title}>
                {item.scrollTo ? (
                  <button
                    className="hover:bg-surface0 w-full cursor-pointer rounded p-2 text-left transition-colors duration-150 focus:outline-none"
                    onClick={() => {
                      const el = document.getElementById(item.scrollTo!);
                      onClose();
                      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 96, behavior: 'smooth' });
                    }}
                  >
                    {item.title}
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    className="hover:bg-surface0 focus:bg-surface1 block rounded p-2 transition-colors duration-150 focus:outline-none"
                    aria-current={!item.external && pathname === item.href ? 'page' : undefined}
                    onClick={onClose}
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            ))}

            <li><hr className="border-surface1 my-2 border-t" /></li>
            <li className="text-subtext0 px-2 py-1 text-xs font-semibold tracking-wider uppercase">More</li>

            {moreNavItems.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="hover:bg-surface0 focus:bg-surface1 flex items-center justify-between rounded p-2 transition-colors duration-150 focus:outline-none"
                  onClick={onClose}
                >
                  {item.title}
                  {item.external && <IconExternalLink size={14} className="text-subtext0" />}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
