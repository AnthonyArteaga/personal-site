"use client";

import { useTheme, accentColorNames } from "@/lib/hooks/ThemeContext";

export default function ColorSelector() {
  const { accent, setAccent, backgroundEnabled, setBackgroundEnabled } =
    useTheme();

  const selectedIndex = accentColorNames.indexOf(accent);
  const row = Math.floor(selectedIndex / 7);
  const col = selectedIndex % 7;

  return (
    <>
      <div className="relative grid grid-cols-7 gap-2.5 md:gap-1.5">
        {accentColorNames.map((colorName) => {
          const isSelected = accent === colorName;
          return (
            <button
              key={colorName}
              aria-label={`Select ${colorName} accent color`}
              title={colorName.charAt(0).toUpperCase() + colorName.slice(1)}
              onClick={() => setAccent(colorName)}
              style={{ backgroundColor: `var(--color-${colorName})` }}
              className={`aspect-square min-h-5 w-full min-w-5 cursor-pointer rounded-md shadow-sm transition-all duration-150 ${
                isSelected
                  ? "scale-105"
                  : "opacity-80 hover:scale-110 hover:opacity-100"
              }`}
            >
              <span className="sr-only">{colorName}</span>
            </button>
          );
        })}

        {/* Animated selection ring */}

        <div
          className="ring-offset-base pointer-events-none absolute aspect-square min-h-5 min-w-5 rounded-md ring-2 ring-offset-2 transition-all duration-300 ease-out"
          style={{
            transform: `translate(calc(${col} * (100% + 0.625rem)), calc(${row} * (100% + 0.625rem)))`,
            width: "calc((100% - 6 * 0.625rem) / 7)",
            color: `var(--color-${accent})`,
            // @ts-expect-error tw ring color css var
            "--tw-ring-color": "currentColor",
          }}
        />
      </div>

      <div className="mt-4 flex items-center">
        <label className="flex cursor-pointer items-center">
          <input
            type="checkbox"
            checked={backgroundEnabled}
            onChange={(e) => setBackgroundEnabled(e.target.checked)}
            className="h-4 w-4 rounded text-current"
            aria-label="Toggle the colorful background on/off"
          />
          <span className="text-subtext0 ml-2 text-sm">
            Background effect:{" "}
            <span className="text-accent">
              {backgroundEnabled ? "on" : "off"}
            </span>
          </span>
        </label>
      </div>
    </>
  );
}
