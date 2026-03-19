"use client";

import { useState } from "react";
import { IconArrowRight, IconStar } from "@tabler/icons-react";
import { HomeSocialLinks } from "@/lib/config/pages";
import LinkWithIcon from "@/components/LinkWithIcon";
import Link from "next/link";

import LocationMap from "@/components/bento/LocationMap";
import TimeWaster from "@/components/bento/TimeWaster";
import SnappleFact from "@/components/bento/SnappleFact";
import ThemeSelector from "@/components/themes/ThemeSelector";
import ColorSelector from "@/components/themes/ColorSelector";

export default function HomePage() {
  const [isNameHovered, setIsNameHovered] = useState(false);

  return (
    <div className="mx-auto max-w-6xl space-y-12 px-0 py--6 md:space-y-16 md:px-4 md:py--6">
      {/* Intro */}
      <section className="px-4 md:px-0">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-10">
          {/* Left: bio */}
          <div className="flex flex-col justify-center space-y-5 lg:flex-1">
            <h1 className="text-3xl font-bold md:text-4xl">
              Hey! I&apos;m{" "}
              <span className="text-accent">
                <span
                  className="decoration-accent/30 underline decoration-dashed opacity-70 cursor-pointer"
                  onMouseEnter={() => setIsNameHovered(true)}
                  onMouseLeave={() => setIsNameHovered(false)}
                  onFocus={() => setIsNameHovered(true)}
                  onBlur={() => setIsNameHovered(false)}
                  tabIndex={0}
                  role="button"
                  aria-label="Hover for a fun fact"
                >
                  Anthony
                </span>
                <span
                  className={`pointer-events-none inline-flex overflow-hidden align-baseline whitespace-nowrap transition-all duration-500 ease-out select-none ${
                    isNameHovered
                      ? "max-w-[10ch] opacity-100"
                      : "max-w-0 opacity-0"
                  }`}
                >
                  &nbsp;(Ant)
                </span>{" "}
                <span>Arteaga</span>
              </span>
            </h1>

            <p className="text-subtext0 max-w-prose text-lg leading-relaxed">
              A short bio about yourself goes here. Mention what you&apos;re
              working on, what you&apos;ve built, and what drives you. Link to{" "}
              <a
                className="link text-accent/85"
                target="_blank"
                rel="noopener"
                href="https://example.com"
              >
                notable projects
              </a>{" "}
              and{" "}
              <a
                className="link text-accent/85"
                target="_blank"
                rel="noopener"
                href="https://example.com"
              >
                organizations
              </a>{" "}
              you&apos;ve contributed to. Make it personal and memorable.
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2">
              {HomeSocialLinks.map((link, i) => (
                <span key={link.href} className="contents">
                  <LinkWithIcon
                    href={link.href}
                    text={link.text}
                    iconName={link.iconName}
                    external
                    className="text-sm"
                  />
                  {i < HomeSocialLinks.length - 1 && (
                    <span className="text-surface1 text-xs">|</span>
                  )}
                </span>
              ))}
              <span className="text-surface1 text-xs">|</span>
              <Link
                href="/about"
                className="group text-subtext1 hover:text-accent inline-flex items-center gap-1 text-sm transition-colors duration-200"
              >
                <span>More about me</span>
                <IconArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>

          {/* Right: PFP */}
          <div className="flex w-full flex-col lg:w-[250px] lg:shrink-0">
            <div className="border-surface0 h-full overflow-hidden rounded-xl border shadow-lg">
              <img
                src="/media/me.jpg"
                alt="Anthony Arteaga"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="-mt-6 px-4 md:-mt-6 md:px-0">
        <h2 className="sr-only">Dashboard / Highlights</h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-4 [&>*]:min-h-[260px] sm:[&>*]:h-[302px]">
          <LocationMap />
          <SnappleFact />
          <TimeWaster />
          <div className="border-surface0 bg-base rounded-xl border p-4 shadow-lg sm:col-span-2 lg:col-span-1">
            <ThemeSelector />
            <ColorSelector />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="px-4 md:px-0">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="flex items-center gap-3 text-2xl font-semibold md:text-3xl">
            <IconStar size={28} className="text-accent" />
            <span>Featured Projects</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {[
            {
              href: "/projects/my-project",
              title: "My Cool Project",
              desc: "A brief description of what this project does and why it matters.",
              tags: ["React", "TypeScript"],
            },
            {
              href: "/projects/another-project",
              title: "Another Project",
              desc: "Another brief description. Swap these out with real projects as you build them.",
              tags: ["Go", "Docker"],
            },
            {
              href: "/projects/another-project2",
              title: "My Nice Project",
              desc: "A brief description of what this project does and why it matters.",
              tags: ["React", "TypeScript"],
            },
            {
              href: "/projects/another-project3",
              title: "Another Nice Project",
              desc: "Another brief description. Swap these out with real projects as you build them.",
              tags: ["Go", "Docker"],
            },
          ].map((project) => (
            <Link
              key={project.href}
              href={project.href}
              className="border-surface0 bg-base hover:border-accent group block overflow-hidden rounded-xl border shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="overflow-hidden">
                <div className="bg-surface0 flex aspect-video w-full items-center justify-center text-subtext1 transition-transform duration-300 group-hover:scale-105">
                  Project Screenshot
                </div>
              </div>
              <div className="space-y-3 p-5">
                <h3 className="text-text group-hover:text-accent text-xl font-semibold transition-colors">
                  {project.title}
                </h3>
                <p className="text-subtext0 line-clamp-2 text-sm">
                  {project.desc}
                </p>
                <div className="flex gap-2 pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-surface0 text-subtext1 rounded-full px-2 py-0.5 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
