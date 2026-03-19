'use client';

import { useState, useCallback } from 'react';
import { IconInfoCircle } from '@tabler/icons-react';
import { useLocalStorage } from '@/lib/hooks/useLocalStorage';

interface Sparkle {
  id: number;
  x: number;
  y: number;
}

export default function TimeWaster() {
  const [count, setCount] = useLocalStorage<number>('click-counter', 0);
  const [buttonScale, setButtonScale] = useState(1);
  const [counterGlow, setCounterGlow] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  const handleClick = useCallback(() => {
    setButtonScale(0.95);
    setTimeout(() => setButtonScale(1), 150);
    setCount((n) => n + 1);

    setCounterGlow(true);
    setTimeout(() => setCounterGlow(false), 600);

    setSparkles((prev) => {
      if (prev.length >= 10) return prev;
      const id = Date.now();
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      setTimeout(() => {
        setSparkles((s) => s.filter((sp) => sp.id !== id));
      }, 2000);
      return [...prev, { id, x, y }];
    });
  }, [setCount]);

  return (
    <div className="border-surface0 bg-base relative flex flex-col justify-between rounded-xl border p-4 shadow-lg lg:col-span-1">
      <div className="group absolute top-3 right-3">
        <button
          className="text-subtext1 hover:text-accent transition-colors"
          aria-label="What is this?"
          onClick={() => setShowInfo(!showInfo)}
        >
          <IconInfoCircle size={16} />
        </button>
        <div
          className={`bg-base/70 border-accent/20 text-subtext0 absolute top-6 right-0 z-10 w-56 rounded-lg border p-3 text-xs shadow-xl backdrop-blur-md transition-all duration-200 ${
            showInfo ? 'visible opacity-100' : 'invisible opacity-0'
          } group-hover:visible group-hover:opacity-100`}
        >
          <p>A pointless counter. Click it. You know you want to.</p>
        </div>
      </div>

      <div className="flex h-full flex-col items-center justify-center py-4">
        <div className="text-accent mb-3 text-4xl font-bold">
          <div className="relative inline-block">
            <span className={`transition-all duration-300 ${counterGlow ? 'scale-110' : ''}`}>
              {count.toLocaleString()}
            </span>
            {sparkles.map((sparkle) => (
              <div
                key={sparkle.id}
                className="text-accent pointer-events-none absolute text-sm font-bold"
                style={{
                  left: `${sparkle.x - 50}%`,
                  top: `${sparkle.y - 50}%`,
                  animation: 'sparkle 2s ease-out forwards',
                }}
              >
                +1
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleClick}
          className="bg-accent hover:bg-accent/90 active:bg-accent/80 rounded-xl px-6 py-3 text-base font-bold transition-all duration-150 hover:scale-105 active:scale-95"
          style={{ transform: `scale(${buttonScale})` }}
        >
          CLICK ME
        </button>

        <p className="text-subtext1 mt-6 text-xs">
          you&apos;ve clicked {count} time{count === 1 ? '' : 's'}
        </p>
      </div>

      <style jsx>{`
        @keyframes sparkle {
          0% { opacity: 0; transform: translateY(0) scale(0); }
          20% { opacity: 1; transform: translateY(-10px) scale(1); }
          100% { opacity: 0; transform: translateY(-40px) scale(0.5); }
        }
      `}</style>
    </div>
  );
}
