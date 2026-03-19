"use client";

import Link from "next/link";
import { IconCode, IconBulb, IconFlame, IconArrowUpRight } from "@tabler/icons-react";
import { currently, type CurrentlyItem } from "@/lib/config/pages";

const iconMap: Record<CurrentlyItem["type"], React.ReactNode> = {
  building:      <IconCode size={15} />,
  learning:      <IconBulb size={15} />,
  "obsessed with": <IconFlame size={15} />,
};

export default function Currently() {
  return (
    <div className="border-surface0 bg-base flex flex-col rounded-xl border p-5 shadow-lg">
      <p className="text-subtext0 mb-5 text-xs font-semibold uppercase tracking-widest">
        Currently
      </p>

      <div className="flex flex-col gap-5">
        {currently.map((item, i) => (
          <div key={item.type}>
            <div className="flex items-start gap-3">
              {/* Icon badge */}
              <span className="bg-surface0 text-accent mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg">
                {iconMap[item.type]}
              </span>

              <div className="min-w-0">
                <p className="text-accent mb-0.5 text-xs font-semibold capitalize">
                  {item.type}
                </p>
                {item.href ? (
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener"
                    className="text-text hover:text-accent group inline-flex items-center gap-0.5 text-sm font-medium transition-colors"
                  >
                    <span className="truncate">{item.label}</span>
                    <IconArrowUpRight
                      size={12}
                      className="shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </Link>
                ) : (
                  <p className="text-text truncate text-sm font-medium">{item.label}</p>
                )}
              </div>
            </div>

            {/* Divider — skip after last item */}
            {i < currently.length - 1 && (
              <div className="border-surface0 mt-5 border-t" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
