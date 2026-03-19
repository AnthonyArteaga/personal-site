"use client";

import { useState, type ReactNode } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Sidebar from "@/components/layout/Sidebar";
import BackgroundEffect from "@/components/BackgroundEffect";
import { useTheme } from "@/lib/hooks/ThemeContext";

export default function Shell({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { backgroundEnabled } = useTheme();

  return (
    <div className="text-text mx-auto flex min-h-screen max-w-[90%] flex-col md:max-w-[80%]">
      {backgroundEnabled && <BackgroundEffect />}
      <Header onToggleSidebar={() => setSidebarOpen((o) => !o)} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className="flex-1 px-0 py-8 md:px-5">{children}</main>
      <Footer />
    </div>
  );
}
