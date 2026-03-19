"use client";

import {
  IconBrandReact,
  IconBrandMongodb,
  IconBrandMysql,
  IconBrandPython,
  IconFlask,
  IconBrandTypescript,
  IconBrandPhp,
  IconBrandDocker,
  IconBrandGraphql,
  IconBrandFlutter,
  IconBrandNodejs,
  IconBrandJavascript,
  IconLetterC,
} from "@tabler/icons-react";

function IconDart({ size = 20 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M4.105 4.105S9.158 1.58 11.684.316a3.079 3.079 0 0 1 1.481-.315c.766.047 1.677.788 1.677.788L24 9.948v9.789h-4.263V24H9.789l-9-9C.21 14.422 0 13.779 0 13.1c0-.747.21-1.467.789-2.053zm.679 6.728v7.37l2.314 2.314V10.833zm14.59 1.051l-3.455-3.455-1.313 1.313 3.455 3.455zm-5.803-5.803L10.117 9.535l3.455 3.455 3.454-3.455zM7.098 7.098 4.784 9.412l3.455 3.455 2.314-2.314z" />
    </svg>
  );
}

const STACK = [
  { label: "React",      Icon: IconBrandReact,      color: "#61DAFB" },
  { label: "TypeScript", Icon: IconBrandTypescript,  color: "#3178C6" },
  { label: "JavaScript", Icon: IconBrandJavascript,  color: "#F7DF1E" },
  { label: "Node.js",    Icon: IconBrandNodejs,      color: "#339933" },
  { label: "Python",     Icon: IconBrandPython,      color: "#3776AB" },
  { label: "Flask",      Icon: IconFlask,            color: "#ffffff" },
  { label: "MongoDB",    Icon: IconBrandMongodb,     color: "#47A248" },
  { label: "MySQL",      Icon: IconBrandMysql,       color: "#F29111" },
  { label: "GraphQL",    Icon: IconBrandGraphql,     color: "#E10098" },
  { label: "Docker",     Icon: IconBrandDocker,      color: "#2496ED" },
  { label: "Flutter",    Icon: IconBrandFlutter,     color: "#54C5F8" },
  { label: "Dart",       Icon: IconDart,             color: "#0175C2" },
  { label: "PHP",        Icon: IconBrandPhp,         color: "#777BB4" },
  { label: "C",          Icon: IconLetterC,          color: "#A8B9CC" },
] as const;

export default function TechStack() {
  return (
    <div className="border-surface0 bg-base flex flex-col rounded-xl border p-5 shadow-lg">
      <p className="text-subtext0 mb-4 text-xs font-semibold uppercase tracking-widest">
        Tech Stack
      </p>

      <div className="grid grid-cols-4 gap-x-2 gap-y-3">
        {STACK.map(({ label, Icon, color }) => (
          <div key={label} className="group flex flex-col items-center gap-1">
            <span className="bg-surface0 flex h-9 w-9 items-center justify-center rounded-lg transition-colors duration-200">
              <Icon size={18} style={{ color }} />
            </span>
            <span className="text-subtext0 group-hover:text-text text-center text-[10px] leading-tight transition-colors duration-200">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
