"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { IconBrandGithub } from "@tabler/icons-react";
import Link from "next/link";
import type { Activity, ThemeInput } from "react-github-calendar";
import Site from "@/lib/config/common";

const USERNAME = Site.out.github.split("/").pop()!;

function selectLastHalfYear(contributions: Activity[]) {
  const cutoff = new Date();
  cutoff.setMonth(cutoff.getMonth() - 6);
  return contributions.filter((c) => new Date(c.date) >= cutoff);
}

function readVar(name: string) {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
}

export default function GitHubActivity() {
  const [theme, setTheme] = useState<ThemeInput | undefined>(undefined);

  useEffect(() => {
    function buildTheme(): ThemeInput {
      const surface = readVar("--color-surface0") || "#313244";
      const accent = readVar("--color-accent") || "#fab387";
      const colors: ThemeInput = {
        light: [surface, accent],
        dark: [surface, accent],
      };
      return colors;
    }

    setTheme(buildTheme());

    // Rebuild when the theme CSS variables change (accent/palette swaps)
    const observer = new MutationObserver(() => setTheme(buildTheme()));
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["style", "class"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="border-surface0 bg-base flex flex-col rounded-xl border p-5 shadow-lg">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <IconBrandGithub size={15} className="text-subtext0" />
          <span className="text-subtext0 text-xs font-semibold uppercase tracking-widest">
            GitHub Activity
          </span>
        </div>
        <Link
          href={Site.out.github}
          target="_blank"
          rel="noopener"
          className="text-subtext0 hover:text-accent text-xs transition-colors"
        >
          @{USERNAME}
        </Link>
      </div>

      {/* Calendar */}
      <div className="flex flex-1 items-center overflow-hidden">
        {theme ? (
          <GitHubCalendar
            username={USERNAME}
            transformData={selectLastHalfYear}
            theme={theme}
            hideColorLegend
            hideTotalCount={false}
            blockSize={11}
            blockMargin={3}
            fontSize={11}
            style={{ width: "100%" }}
          />
        ) : (
          // Skeleton while CSS vars load
          <div className="bg-surface0 h-24 w-full animate-pulse rounded-lg" />
        )}
      </div>
    </div>
  );
}
