"use client";

import { IconBriefcase } from "@tabler/icons-react";
import { careerStatus } from "@/lib/config/pages";

export default function OpenToWork() {
  return (
    <div className="border-surface0 bg-base relative flex flex-col overflow-hidden rounded-xl border p-5 shadow-lg">
      {/* Ambient glow */}
      <div className="bg-accent/10 pointer-events-none absolute -bottom-8 -right-8 h-36 w-36 rounded-full blur-3xl" />

      {/* Role */}
      <div className="mb-4 flex items-center gap-2">
        <IconBriefcase size={16} className="text-accent shrink-0" />
        <p className="text-subtext0 text-xs font-semibold uppercase tracking-widest">
          Pursuing roles as
        </p>
      </div>
      <p className="text-text mb-4 text-2xl font-bold leading-tight">
        {careerStatus.role}
      </p>

      {/* Pitch */}
      <p className="text-subtext1 mb-5 flex-1 text-sm leading-relaxed">
        {careerStatus.pitch}
      </p>

    </div>
  );
}
