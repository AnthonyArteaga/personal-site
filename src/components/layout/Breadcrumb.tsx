'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Breadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean).slice(0, 4);

  return (
    <nav aria-label="Breadcrumbs">
      <ul className="text-md flex items-center">
        <li className="inline-flex items-center">
          <Link className="text-accent hover:text-accent/40" href="/">~</Link>
        </li>

        {segments.map((text, i) => {
          const href = '/' + segments.slice(0, i + 1).join('/');
          const isLast = i === segments.length - 1;
          return (
            <li key={i} className="inline-flex items-center">
              <span className="mx-0.5">/</span>
              {isLast ? (
                <span aria-current="page">{text}</span>
              ) : (
                <Link className="hover:text-accent" href={href}>{text}</Link>
              )}
            </li>
          );
        })}

        <li className="mx-0.5 inline-flex items-center" aria-hidden="true">/</li>
        <li className="ml-1 inline-flex items-center">
          <span className="cursor-blink bg-accent h-4 w-2" aria-hidden="true" />
        </li>
      </ul>

      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          20% { opacity: 0; }
        }
        .cursor-blink {
          animation: blink 3s cubic-bezier(0.2, 1, 0.8, 1) infinite;
          display: inline-block;
        }
      `}</style>
    </nav>
  );
}
