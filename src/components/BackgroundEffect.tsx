'use client';

import { useRef, useEffect, useCallback } from 'react';
import { accentColorNames } from '@/lib/hooks/ThemeContext';

export default function BackgroundEffect() {
  const gridRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef({
    lastHovered: -1,
    isMouseDown: false,
    prevDown: {} as Record<number, boolean>,
    lastAccentIndex: 0,
  });

  const ROWS = 5;
  const COLS = 5;

  const render = useCallback((clientX: number, clientY: number) => {
    const grid = gridRef.current;
    if (!grid) return;
    const s = stateRef.current;
    const rect = grid.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const row = Math.floor((y * ROWS) / rect.height);
    const col = Math.floor((x * COLS) / rect.width);

    let idx = -1;
    if (row >= 0 && row < ROWS && col >= 0 && col < COLS) idx = row * COLS + col;

    const hovered = grid.children[idx] as HTMLElement | undefined;

    if (idx >= 0 && hovered) {
      if (!s.prevDown[idx] && s.isMouseDown) {
        const color = accentColorNames[s.lastAccentIndex];
        s.lastAccentIndex = (s.lastAccentIndex + 1) % accentColorNames.length;
        hovered.style.background = `var(--color-${color})`;
      }
      if (s.isMouseDown) hovered.classList.add('clicked');
    }

    const last = grid.children[s.lastHovered] as HTMLElement | undefined;
    if (last) last.classList.remove('hovered', 'clicked');
    s.prevDown[s.lastHovered] = false;
    s.lastHovered = idx;
    if (idx >= 0) s.prevDown[idx] = s.isMouseDown;
  }, []);

  useEffect(() => {
    const s = stateRef.current;
    const move = (e: MouseEvent) => render(e.clientX, e.clientY);
    const leave = () => render(-1, -1);
    const down = (e: MouseEvent) => { s.isMouseDown = true; render(e.clientX, e.clientY); };
    const up = (e: MouseEvent) => { s.isMouseDown = false; render(e.clientX, e.clientY); };

    document.addEventListener('mousemove', move, { capture: true, passive: true });
    document.addEventListener('mouseleave', leave, { passive: true });
    document.addEventListener('mousedown', down, { capture: true, passive: true });
    document.addEventListener('mouseup', up, { capture: true, passive: true });

    return () => {
      document.removeEventListener('mousemove', move, { capture: true });
      document.removeEventListener('mouseleave', leave);
      document.removeEventListener('mousedown', down, { capture: true });
      document.removeEventListener('mouseup', up, { capture: true });
    };
  }, [render]);

  return (
    <>
      <div ref={gridRef} id="bg-grid" aria-hidden="true">
        {Array.from({ length: ROWS * COLS }).map((_, i) => (
          <div key={i} />
        ))}
      </div>
      <style jsx>{`
        #bg-grid {
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100%;
          display: grid;
          z-index: -2;
          pointer-events: none;
          filter: blur(16px) brightness(0.6);
          grid-template-columns: repeat(5, 1fr);
          transform: scale(1.05);
        }
        #bg-grid div {
          transition: 75ms background linear, 100ms opacity ease-out;
          opacity: 1;
        }
        #bg-grid div:not(.clicked) {
          animation: fadeAway 1400ms forwards;
        }
        @keyframes fadeAway {
          0% { opacity: 1; }
          60% { opacity: 0.9; }
          100% { opacity: 0; }
        }
      `}</style>
    </>
  );
}
