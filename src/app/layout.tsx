import type { Metadata } from "next";
import { ThemeProvider } from "@/lib/hooks/ThemeContext";
import Shell from "@/components/layout/Shell";
import Site from "@/lib/config/common";
import "./globals.css";

export const metadata: Metadata = {
  title: Site.name,
  description: Site.description,
  authors: [{ name: Site.seo.author }],
  robots: "index, follow",
  openGraph: {
    title: Site.name,
    description: Site.description,
    type: "website",
    url: Site.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="bg-base font-jetbrains-mono text-text selection:bg-accent/30 selection:text-accent/80 caret-accent scrollbar min-h-screen scroll-smooth"
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
        {/* Theme bootstrap — runs before React hydrates to prevent FOUC */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (() => {
                try {
                  const safeParse = (raw) => {
                    if (!raw) return null;
                    try { return JSON.parse(raw); } catch { return raw; }
                  };
                  const storedPalette = safeParse(localStorage.getItem('palette'));
                  const storedAccent = safeParse(localStorage.getItem('accent'));
                  const palette = storedPalette ?? 'frappe';
                  if (palette) document.documentElement.classList.add(palette);
                  const accent = storedAccent ?? 'pink';
                  document.documentElement.style.setProperty(
                    '--current-accent-color', 'var(--color-' + accent + ')'
                  );
                } catch (e) {
                  console.warn('Theme bootstrap failed', e);
                }
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <Shell>{children}</Shell>
        </ThemeProvider>
      </body>
    </html>
  );
}
