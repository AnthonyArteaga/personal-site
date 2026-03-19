"use client";

import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import { careerStatus } from "@/lib/config/pages";

export default function OpenToWork() {
  return (
    <div className="border-surface0 bg-base relative flex flex-col justify-between overflow-hidden rounded-xl border p-5 shadow-lg">
      <div className="bg-accent/5 pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full blur-2xl" />

      <div className="space-y-4">
        {/* Header */}
        <p className="text-subtext0 text-xs font-semibold uppercase tracking-widest">
          Looking For
        </p>

        {/* Role chips — what they want */}
        <div className="flex flex-wrap gap-1.5">
          {careerStatus.roles.map((role) => (
            <span
              key={role}
              className="bg-accent/10 text-accent rounded-full px-2.5 py-0.5 text-xs font-medium"
            >
              {role}
            </span>
          ))}
        </div>

        {/* Work environment */}
        <div className="space-y-1">
          <p className="text-subtext0 text-[10px] font-semibold uppercase tracking-widest">
            Environment
          </p>
          <div className="flex flex-wrap gap-1.5">
            {careerStatus.environments.map((env) => (
              <span
                key={env}
                className="bg-surface0 text-subtext1 rounded-full px-2.5 py-0.5 text-xs font-medium"
              >
                {env}
              </span>
            ))}
          </div>
        </div>

        {/* Open-minded note */}
        <p className="text-subtext0 text-xs leading-relaxed">
          {careerStatus.openTo}
        </p>
      </div>

      {/* CTA */}
      <Link
        href={careerStatus.ctaHref}
        className="group text-accent hover:text-accent/70 mt-4 inline-flex w-fit items-center gap-1 text-sm font-medium transition-colors"
      >
        <span>{careerStatus.ctaLabel}</span>
        <IconArrowRight
          size={14}
          className="transition-transform duration-200 group-hover:translate-x-0.5"
        />
      </Link>
    </div>
  );
}
