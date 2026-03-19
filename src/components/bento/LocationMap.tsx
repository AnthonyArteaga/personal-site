'use client';

import { useRef, useState, useEffect } from 'react';
import { IconMapPin, IconSun, IconMoon } from '@tabler/icons-react';
import type L from 'leaflet';

// TODO: Change these to your location
const LAT = 40.697472;
const LNG = -73.950528;
const TIMEZONE = 'America/New_York';
const CITY = 'New York, NY';

export default function LocationMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [isDaytime, setIsDaytime] = useState(true);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const localTime = new Intl.DateTimeFormat('en-US', {
        timeZone: TIMEZONE,
        hour: '2-digit', minute: '2-digit', second: '2-digit',
        hour12: false,
      }).format(now);
      setCurrentTime(localTime);
      const hour = parseInt(localTime.split(':')[0]);
      setIsDaytime(hour >= 6 && hour < 21);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let destroyed = false;

    (async () => {
      const L = (await import('leaflet')).default;
      await import('leaflet/dist/leaflet.css');
      if (destroyed || !mapRef.current) return;

      const map = L.map(mapRef.current, {
        zoomControl: false,
        attributionControl: false,
        dragging: true,
        scrollWheelZoom: true,
        doubleClickZoom: true,
        touchZoom: true,
      }).setView([LAT, LNG], 8.5);

      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
        attribution: '',
      }).addTo(map);

      mapInstanceRef.current = map;
      setLoaded(true);
    })();

    return () => { destroyed = true; };
  }, []);

  const recenter = () => {
    mapInstanceRef.current?.setView([LAT, LNG], 8.5);
  };

  return (
    <div className="border-surface0 bg-base flex flex-col rounded-xl border p-4 shadow-lg lg:col-span-1">
      <button
        onClick={recenter}
        className="text-text hover:text-accent mb-3 flex w-full cursor-pointer items-center gap-2 text-left text-sm font-semibold transition-colors"
      >
        <IconMapPin size={16} className="text-accent" />
        Currently Based In
      </button>
      <div className="bg-surface0 relative w-full flex-1 overflow-hidden rounded-lg" style={{ minHeight: 120 }}>
        <div ref={mapRef} className="h-full w-full" style={{ background: 'var(--color-base)' }} />
        {!loaded && (
          <div className="bg-surface0 absolute inset-0 flex items-center justify-center">
            <span className="text-subtext1 text-xs">Loading map...</span>
          </div>
        )}
      </div>
      <div className="mt-3 flex items-center justify-between gap-2">
        <button onClick={recenter} className="text-subtext0 hover:text-accent cursor-pointer text-xs transition-colors">
          {CITY}
        </button>
        {currentTime && (
          <div className="flex items-center gap-1">
            {isDaytime ? (
              <IconSun size={12} className="text-yellow" />
            ) : (
              <IconMoon size={12} className="text-blue" />
            )}
            <span className="text-accent font-mono text-xs whitespace-nowrap">{currentTime}</span>
          </div>
        )}
      </div>
    </div>
  );
}
