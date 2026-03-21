"use client";

import { useState } from "react";
import {
  IconArrowRight,
  IconStar,
  IconMail,
  IconBrandGithub,
  IconBrandReact,
  IconBrandTypescript,
  IconBrandJavascript,
  IconBrandNodejs,
  IconBrandPython,
  IconBrandMongodb,
  IconBrandMysql,
  IconBrandPhp,
  IconBrandGolang,
  IconBrandDocker,
  IconBrandTailwind,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandVite,
  IconExternalLink,
} from "@tabler/icons-react";

const FlaskIcon = ({
  size = 24,
  color = "#ffffff",
}: {
  size?: number;
  color?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10.773 2.878c-.013 1.434.322 4.624.445 5.734l-8.558 3.83c-.56-.959-.98-2.304-1.237-3.38l-.06.027c-.205.09-.406.053-.494-.088l-.011-.018-.82-1.506c-.058-.105-.05-.252.024-.392a.78.78 0 0 1 .358-.331l9.824-4.207c.146-.064.299-.063.4.004.106.062.127.128.13.327Zm.68 7c.523 1.97.675 2.412.832 2.818l-7.263 3.7a19.35 19.35 0 0 1-1.81-2.83l8.24-3.689Zm12.432 8.786h.003c.283.402-.047.657-.153.698l-.947.37c.037.125.035.319-.217.414l-.736.287c-.229.09-.398-.059-.42-.2l-.025-.125c-4.427 1.784-7.94 1.685-10.696.647-1.981-.745-3.576-1.983-4.846-3.379l6.948-3.54c.721 1.431 1.586 2.454 2.509 3.178 2.086 1.638 4.415 1.712 5.793 1.563l-.047-.233c-.015-.077.007-.135.086-.165l.734-.288a.302.302 0 0 1 .342.086l.748-.288a.306.306 0 0 1 .341.086l.583.89Z" />
  </svg>
);

const TAG_ICONS: Record<string, { Icon: React.ElementType; color: string }> = {
  React: { Icon: IconBrandReact, color: "#61DAFB" },
  TypeScript: { Icon: IconBrandTypescript, color: "#3178C6" },
  JavaScript: { Icon: IconBrandJavascript, color: "#F7DF1E" },
  "Node.js": { Icon: IconBrandNodejs, color: "#339933" },
  Python: { Icon: IconBrandPython, color: "#3776AB" },
  Flask: { Icon: FlaskIcon, color: "#ffffff" },
  MongoDB: { Icon: IconBrandMongodb, color: "#47A248" },
  MySQL: { Icon: IconBrandMysql, color: "#4479A1" },
  PHP: { Icon: IconBrandPhp, color: "#777BB4" },
  Go: { Icon: IconBrandGolang, color: "#00ADD8" },
  Docker: { Icon: IconBrandDocker, color: "#2496ED" },
  "Tailwind CSS": { Icon: IconBrandTailwind, color: "#06B6D4" },
  HTML: { Icon: IconBrandHtml5, color: "#E34F26" },
  CSS: { Icon: IconBrandCss3, color: "#1572B6" },
  Vite: { Icon: IconBrandVite, color: "#646CFF" },
};
import { HomeSocialLinks } from "@/lib/config/pages";
import LinkWithIcon from "@/components/LinkWithIcon";
import Link from "next/link";

import LocationMap from "@/components/bento/LocationMap";
import OpenToWork from "@/components/bento/OpenToWork";
import Currently from "@/components/bento/Currently";
import SnappleFact from "@/components/bento/SnappleFact";

export default function HomePage() {
  const [isNameHovered, setIsNameHovered] = useState(false);
  const [emailState, setEmailState] = useState<"idle" | "hovered" | "copied">("idle");
  const email = "anthony.m.arteaga@gmail.com";

  function handleEmailClick() {
    navigator.clipboard.writeText(email);
    setEmailState("copied");
    setTimeout(() => setEmailState("hovered"), 2000);
  }

  return (
    <div className="mx-auto max-w-6xl space-y-12 px-0 md:space-y-16 md:px-4">
      {/* Intro */}
      <section id="about" className="px-4 md:px-0">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-10">
          {/* Left: bio */}
          <div className="flex flex-col justify-center space-y-5 lg:flex-1">
            <h1 className="text-3xl font-bold md:text-4xl">
              Hey! I&apos;m{" "}
              <span className="text-accent">
                <span
                  className="decoration-accent/30 underline decoration-dashed opacity-70"
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
              Full-stack developer who learns by taking things apart and
              figuring out why they work, or why they don&apos;t. Recent grad,
              but the curiosity to{" "}
              <a
                className="link text-accent/85"
                target="_blank"
                rel="noopener"
                href="https://github.com/AnthonyArteaga/first-java-project-tetris"
              >
                build
              </a>{" "}
              has been there long before the degree made it official.
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
              <button
                onClick={handleEmailClick}
                onMouseEnter={() => emailState === "idle" && setEmailState("hovered")}
                onMouseLeave={() => {}}
                className="text-subtext1 hover:text-accent inline-flex cursor-pointer items-center gap-1 text-sm transition-colors duration-200"
              >
                <IconMail size={16} />
                <span className="overflow-hidden transition-all duration-300 whitespace-nowrap" style={{ maxWidth: emailState === "idle" ? "3rem" : "16rem" }}>
                  {emailState === "copied" ? "Copied!" : emailState === "hovered" ? email : "Email"}
                </span>
              </button>

            </div>
          </div>

          {/* Right: PFP */}
          <div className="flex w-full flex-col gap-2 lg:w-[250px] lg:shrink-0">
            <div className="border-surface0 overflow-hidden rounded-xl border shadow-lg">
              <img
                src="/media/me.jpg"
                alt="Anthony Arteaga"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <p className="text-accent text-center text-xs opacity-70">
              Computer Science BS
              <br />
              University at Buffalo
            </p>
          </div>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="-mt-6 px-4 md:-mt-6 md:px-0">
        <h2 className="sr-only">Dashboard / Highlights</h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-4 [&>*]:min-h-[260px] sm:[&>*]:h-[302px]">
          <LocationMap />
          <OpenToWork />
          <Currently />
          <SnappleFact />
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="px-4 md:px-0">
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
              title: "Personal Website",
              desc: "A brief description of what this project does and why it matters.",
              tags: ["React", "Node.js", "TypeScript", "Tailwind CSS"],
              screenshot: null,
              github: "https://github.com/AnthonyArteaga/personal-site",
              liveUrl: "https://example.com",
            },
            {
              href: "/projects/another-project",
              title: "C5Note",
              desc: "Another brief description. Swap these out with real projects as you build them.",
              tags: ["React", "Vite", "JavaScript", "PHP", "MySQL"],
              screenshot: "/media/c5-note-combined.png",
              github: "https://github.com/AnthonyArteaga/C5Note",
              liveUrl: null,
            },
            {
              href: "/projects/another-project2",
              title: "Capture the Flag",
              desc: "A brief description of what this project does and why it matters.",
              tags: [
                "HTML",
                "JavaScript",
                "CSS",
                "Flask",
                "Python",
                "MongoDB",
                "Docker",
              ],
              screenshot: "/media/ctf-combined.png",
              github: "https://github.com/NeemZ16/capture-the-flag",
              liveUrl: "https://capture-the-flag.neemo.site/",
            },
            {
              href: "/projects/another-project3",
              title: "ForumBoard App",
              desc: "Another brief description. Swap these out with real projects as you build them.",
              tags: [
                "HTML",
                "JavaScript",
                "CSS",
                "Python",
                "MongoDB",
                "Docker",
              ],
              screenshot: "/media/forumboard-combined.png",
              github: "https://github.com/AnthonyArteaga/ForumBoardApp",
              liveUrl: null,
            },
          ].map((project) => (
            <div
              key={project.href}
              className="border-surface0 bg-base hover:border-accent group relative overflow-hidden rounded-xl border shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              {/* Full-card link covers the whole card but sits behind the icon buttons */}
              <Link
                href={project.href}
                className="absolute inset-0 z-0"
                aria-label={project.title}
              />
              <div className="overflow-hidden">
                <div className="bg-surface0 aspect-video w-full overflow-hidden transition-transform duration-300 group-hover:scale-105">
                  {project.screenshot ? (
                    <img
                      src={project.screenshot}
                      alt={project.title}
                      className="h-full w-full object-cover object-top"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-subtext1">
                      Project Screenshot
                    </div>
                  )}
                </div>
              </div>
              <div className="space-y-3 p-5">
                <h3 className="text-text group-hover:text-accent text-xl font-semibold transition-colors">
                  {project.title}
                </h3>
                <p className="text-subtext0 line-clamp-2 text-sm">
                  {project.desc}
                </p>
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-2">
                    {project.tags.map((tag) => {
                      const entry = TAG_ICONS[tag];
                      return entry ? (
                        <span key={tag} title={tag}>
                          <entry.Icon
                            size={30}
                            style={{ color: entry.color }}
                          />
                        </span>
                      ) : (
                        <span
                          key={tag}
                          className="bg-surface0 text-subtext1 rounded-full px-2 py-0.5 text-xs"
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                  <div className="relative z-10 flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-subtext1 hover:text-text transition-colors"
                        title="GitHub"
                      >
                        <IconBrandGithub size={20} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-subtext1 hover:text-text transition-colors"
                        title="Live site"
                      >
                        <IconExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
