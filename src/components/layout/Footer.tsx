'use client';

import { useState, useEffect } from 'react';
import { IconClock } from '@tabler/icons-react';
import { Socials } from '@/lib/config/common';
import { useLocalStorage } from '@/lib/hooks/useLocalStorage';
import SocialIcon from '@/components/SocialIcon';

function formatTime(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }
  return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

export default function Footer() {
  const year = new Date().getFullYear();
  const [totalTime, setTotalTime] = useLocalStorage<number>('total-time-on-site', 0);
  const [display, setDisplay] = useState('00:00');

  useEffect(() => {
    const sessionStart = Date.now();
    const initial = totalTime;

    const interval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - sessionStart) / 1000);
      setDisplay(formatTime(initial + elapsed));
    }, 1000);

    const save = () => {
      const elapsed = Math.floor((Date.now() - sessionStart) / 1000);
      setTotalTime(initial + elapsed);
    };

    window.addEventListener('beforeunload', save);
    return () => {
      clearInterval(interval);
      window.removeEventListener('beforeunload', save);
      save();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative m-auto mx-5 mb-5">
      <footer className="bg-crust text-subtext0 border-surface0/20 flex h-auto flex-col items-center justify-center gap-y-3 rounded-lg border p-5 text-sm md:flex-row md:justify-between md:gap-y-0">
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 md:justify-start">
          <span className="whitespace-nowrap">© {year} Anthony Arteaga</span>
          <span className="text-surface0 hidden md:inline">-</span>
          <div className="flex items-center gap-1 whitespace-nowrap" title="Service Status">
            <span className="relative mr-1.5 flex h-3 w-3">
              <span className="bg-green/75 absolute inline-flex h-full w-full animate-ping rounded-full" />
              <span className="bg-green relative inline-flex h-3 w-3 rounded-full" />
            </span>
            <span className="text-subtext1 text-sm font-medium">All Systems Go</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 md:justify-end">
          <div className="flex items-center gap-1.5" title="Time on site">
            <IconClock size={14} className="text-subtext1" />
            <span className="text-accent font-mono text-xs">{display}</span>
          </div>
          <span className="text-surface0 hidden sm:inline">-</span>
          <div className="flex items-center gap-x-3">
            {Socials.filter((s) => s.footer).map((item) => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="text-subtext1 hover:text-accent transition-colors duration-200"
              >
                <SocialIcon name={item.iconName} stroke={1.5} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
