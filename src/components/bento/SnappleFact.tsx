'use client';

import { useState, useCallback, useEffect } from 'react';
import { IconInfoCircle, IconRefresh } from '@tabler/icons-react';
import snappleFacts from '@/lib/config/snappleFacts';

function getRandomFact() {
  return snappleFacts[Math.floor(Math.random() * snappleFacts.length)];
}

export default function SnappleFact() {
  const [fact, setFact] = useState<typeof snappleFacts[0] | null>(null);
  const [spinning, setSpinning] = useState(false);

  useEffect(() => {
    setFact(getRandomFact());
  }, []);

  const newFact = useCallback(() => {
    setSpinning(true);
    setTimeout(() => setSpinning(false), 400);
    setFact(getRandomFact());
  }, []);

  return (
    <div className="border-surface0 bg-base relative flex flex-col justify-between rounded-xl border p-4 shadow-lg">
      <div className="group absolute top-3 right-3">
        <IconInfoCircle size={16} className="text-subtext1 cursor-default" />
        <div className="bg-base/70 border-accent/20 text-subtext0 invisible absolute top-6 right-0 z-10 w-56 rounded-lg border p-3 text-xs opacity-0 shadow-xl backdrop-blur-md transition-all duration-200 group-hover:visible group-hover:opacity-100">
          <p>Did you know you could get random facts from Snapple texted to you daily?</p>
        </div>
      </div>

      <div className="flex h-full flex-col justify-between gap-4 py-2">
        <p className="text-subtext0 text-xs font-semibold tracking-wider uppercase">
          {fact ? `Snapple Fact #${fact.number}` : <span className="bg-surface0 inline-block h-3 w-24 animate-pulse rounded" />}
        </p>
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          {fact ? (
            <p className="text-text text-sm leading-relaxed">{fact.fact}</p>
          ) : (
            <div className="w-full space-y-2">
              <div className="bg-surface0 h-3 w-full animate-pulse rounded" />
              <div className="bg-surface0 h-3 w-4/5 animate-pulse rounded" />
            </div>
          )}
        </div>

        <button
          onClick={newFact}
          className="border-surface1 hover:border-accent text-subtext1 hover:text-accent flex cursor-pointer items-center gap-2 self-center rounded-lg border px-3 py-1.5 text-xs transition-all duration-200"
        >
          <IconRefresh
            size={13}
            className={`transition-transform duration-300 ${spinning ? 'rotate-180' : ''}`}
          />
          New fact
        </button>
      </div>
    </div>
  );
}
