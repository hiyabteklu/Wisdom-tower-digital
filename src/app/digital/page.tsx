"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { categories } from "@/data/services";
import TalentPath from "@/components/TalentPath";
// import WelcomeVideoCard from "@/components/WelcomeVideoCard"; // re-enable with intro video
import BusinessRegisterSection from "@/components/BusinessRegisterSection";
import {
  Palette,
  PenTool,
  GraduationCap,
  Database,
  Globe,
  Briefcase,
  BookOpen,
  ArrowRight,
  ClipboardList,
  Zap,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  palette: <Palette className="w-5 h-5" />,
  "pen-tool": <PenTool className="w-5 h-5" />,
  "graduation-cap": <GraduationCap className="w-5 h-5" />,
  database: <Database className="w-5 h-5" />,
  globe: <Globe className="w-5 h-5" />,
  briefcase: <Briefcase className="w-5 h-5" />,
  "book-open": <BookOpen className="w-5 h-5" />,
};

const categoryCover = (id: string) => `/images/digital/${id}.jpg`;

function CategoryCoverCard({
  href,
  title,
  tagline,
  meta,
  icon,
  imageSrc,
  accent = "cyan",
  delay = 0,
}: {
  href: string;
  title: string;
  tagline: string;
  meta: string;
  icon: React.ReactNode;
  imageSrc: string;
  accent?: "cyan" | "violet";
  delay?: number;
}) {
  const [failed, setFailed] = useState(false);
  const border =
    accent === "violet"
      ? "border-wisdom-cyan/35 hover:border-wisdom-cyan/60"
      : "border-white/12 hover:border-wisdom-cyan/40";

  return (
    <Link
      href={href}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-wisdom-card transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-20px_rgba(46,230,197,0.28)] ${border} animate-fade-up`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative aspect-video w-full overflow-hidden bg-wisdom-navy">
        {!failed ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageSrc}
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="absolute inset-0 bg-wisdom-navy" />
        )}
        {/* Bottom scrim only — no full-image gradient */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-black/40" />
        <div className="absolute bottom-3 left-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-black/50 text-wisdom-cyan">
            {icon}
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5 border-t border-white/10">
        <h3 className="font-display text-lg font-bold text-white group-hover:text-wisdom-cyan transition-colors">
          {title}
        </h3>
        <p className="mt-1.5 text-sm text-wisdom-muted leading-relaxed line-clamp-2">{tagline}</p>
        <p className="mt-2 text-xs font-semibold text-wisdom-cyan/90">{meta}</p>
        <span className="mt-4 inline-flex items-center justify-center gap-2 min-h-[2.75rem] rounded-xl bg-wisdom-cyan text-wisdom-dark text-sm font-bold px-4">
          Open
          <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
}

export default function DigitalPage() {
  const [heroIn, setHeroIn] = useState(false);
  useEffect(() => {
    const t = window.setTimeout(() => setHeroIn(true), 40);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <div className="relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-wisdom-cyan/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
              heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-wisdom-cyan mb-3">
              Wisdom Tower Digital
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
              Professional services, clear next steps
            </h1>
            <p className="text-wisdom-muted text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Design, writing, web, marketing, data & business — order a service or start a custom
              project.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 min-h-[3.25rem] px-8 py-3.5 rounded-2xl bg-wisdom-cyan text-wisdom-dark text-base font-bold hover:opacity-90 transition shadow-lg"
              >
                Browse all services
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/request"
                className="inline-flex items-center justify-center gap-2 min-h-[3.25rem] px-8 py-3.5 rounded-2xl border-2 border-wisdom-cyan/50 text-white text-base font-bold bg-wisdom-card hover:bg-wisdom-cyan/10 transition"
              >
                Request a project
              </Link>
            </div>
          </div>

          {/* Welcome video — commented out until we have a final intro video
          <div className="mb-16 md:mb-20">
            <WelcomeVideoCard
              variant="digital"
              title="How we work with you"
              subtitle="A short intro to our service lines, custom work, and what to expect when you start a project."
            />
          </div>
          */}

          <div className="mb-8 md:mb-10 text-center sm:text-left">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-wisdom-cyan mb-3">
              <Zap className="w-3.5 h-3.5" />
              Quick order
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              Want something done quickly?
            </h2>
            <p className="mt-2 text-wisdom-muted text-base sm:text-lg max-w-2xl leading-relaxed">
              Explore a category, pick from the list, and order — same request form, clear next steps.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {categories.map((category, i) => (
              <CategoryCoverCard
                key={category.id}
                href={`/services/${category.id}`}
                title={category.name}
                tagline={category.tagline}
                meta={`${category.services.length} services`}
                icon={iconMap[category.icon]}
                imageSrc={categoryCover(category.id)}
                delay={i * 60}
              />
            ))}

            <CategoryCoverCard
              href="/services/custom"
              title="Custom order"
              tagline="Tell us who you are and what you need. We'll shape a package that isn't on the standard list."
              meta="Submit a request"
              icon={<ClipboardList className="w-5 h-5" />}
              imageSrc="/images/digital/custom-order.jpg"
              accent="violet"
              delay={categories.length * 60}
            />
          </div>

          <BusinessRegisterSection />

          <section className="mt-24 md:mt-32" id="work-with-us">
            <TalentPath />
          </section>
        </div>
      </div>
    </div>
  );
}
