import {
  Code2,
  Cloud,
  Cpu,
  Palette,
  ArrowRight,
  CheckCircle2,
  Globe,
  ShoppingCart,
  Leaf,
  Music,
  ChevronRight,
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

/* ─── Data ──────────────────────────────────────────────────────────────── */

const services = [
  {
    icon: Code2,
    title: "Web & Software Development",
    description:
      "Full-stack web applications, e-commerce platforms, and custom software built with Next.js, React, Node.js, and more.",
    features: [
      "Custom web applications",
      "E-commerce storefronts",
      "REST & GraphQL APIs",
      "CMS integrations",
    ],
    accent: "from-blue-500/10 to-blue-500/5",
    iconBg: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Scalable cloud infrastructure, CI/CD pipelines, containerisation, and managed deployments on AWS, GCP, and Azure.",
    features: [
      "AWS / GCP / Azure setup",
      "Docker & Kubernetes",
      "CI/CD pipelines",
      "Monitoring & alerting",
    ],
    accent: "from-violet-500/10 to-violet-500/5",
    iconBg: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
  },
  {
    icon: Cpu,
    title: "Electronics & IoT",
    description:
      "PCB design, firmware development, and end-to-end IoT systems — from sensor nodes to cloud dashboards.",
    features: [
      "PCB schematic & layout",
      "Firmware (C / C++ / MicroPython)",
      "IoT sensor systems",
      "Prototyping & testing",
    ],
    accent: "from-[#e6443b]/10 to-[#e6443b]/5",
    iconBg: "bg-[#e6443b]/10 text-[#e6443b] dark:text-red-400",
  },
  {
    icon: Palette,
    title: "UI/UX & Brand Design",
    description:
      "Thoughtful product design, brand identities, and pixel-perfect interfaces that delight users and drive conversions.",
    features: [
      "Figma UI/UX design",
      "Brand & logo design",
      "Design systems",
      "Responsive prototypes",
    ],
    accent: "from-amber-500/10 to-amber-500/5",
    iconBg: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  },
];

const projects = [
  {
    icon: ShoppingCart,
    title: "Mirai.lk Electronics Store",
    tags: ["Next.js", "Prisma", "Tailwind"],
    description:
      "A minimal, full-featured electronics e-commerce store serving makers and hobbyists across Sri Lanka — with bank-transfer checkout and 24-hour Colombo delivery.",
    href: "https://mirai.lk",
    iconBg: "bg-[#e6443b]/10 text-[#e6443b] dark:text-red-400",
  },
  {
    icon: Music,
    title: "Elegant Music Store",
    tags: ["Next.js", "CSS", "Responsive"],
    description:
      "A sleek portfolio storefront for a music instrument retailer, featuring a rich product catalogue and immersive product-detail pages.",
    href: "https://github.com/MiraiBits/elegant-musicstore-nextjs",
    iconBg: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
  },
  {
    icon: Globe,
    title: "Elegant Restaurant Site",
    tags: ["Next.js", "JavaScript", "Animations"],
    description:
      "A visually rich website for a fine-dining restaurant, showcasing the menu, ambience gallery, and online reservation flow.",
    href: "https://github.com/MiraiBits/mirai-portfolio-elegant-resturant-nextjs",
    iconBg: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  },
  {
    icon: Leaf,
    title: "Wolf-Pack Agri Sensor",
    tags: ["C++", "KiCad", "IoT"],
    description:
      "A custom agricultural IoT sensor node — PCB schematic, layout, and C++ firmware for real-time soil and environment monitoring.",
    href: "https://github.com/MiraiBits/wolf-pack-agri-sensor-kicad",
    iconBg: "bg-green-500/10 text-green-600 dark:text-green-400",
  },
];

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <main className="px-4 sm:px-6 lg:px-8 mx-auto max-w-6xl">
      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-20 sm:py-28 lg:py-32 text-center">
        {/* Soft glow */}
        <div className="pointer-events-none absolute -inset-x-32 -top-20 h-[420px] rounded-full bg-gradient-to-b from-white via-white/95 to-white/10 blur-[120px] dark:from-gray-900 dark:via-gray-900/90 dark:to-gray-900/20" />

        <div className="relative z-10 flex flex-col items-center gap-6">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#e6443b]">
            MiraiBits
          </span>

          <h1 className="max-w-3xl text-4xl font-black leading-tight text-gray-900 dark:text-gray-50 sm:text-5xl lg:text-6xl">
            We Build Meaningful{" "}
            <span className="text-[#e6443b]">Digital & Hardware</span>{" "}
            Solutions
          </h1>

          <p className="max-w-xl text-base text-gray-600 dark:text-gray-300 sm:text-lg">
            From web apps and cloud infrastructure to PCB design and IoT — we
            turn ideas into reality for startups, businesses, and makers across
            Sri Lanka and beyond.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="#services"
              className="inline-flex items-center gap-2 rounded-lg bg-[#e6443b] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#c73a34]"
            >
              Explore Services <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-gray-900 transition hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
            >
              Get in Touch
            </Link>
          </div>

          {/* Stats row */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-8 text-center">
            {[
              { value: "20+", label: "Projects Delivered" },
              { value: "4+", label: "Service Areas" },
              { value: "100%", label: "Open-Source Projects" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-black text-gray-900 dark:text-gray-50">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ───────────────────────────────────────────────── */}
      <section id="services" className="py-16 scroll-mt-20">
        <div className="mb-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#e6443b]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#e6443b]">
            What We Do
          </span>
          <h2 className="mt-4 text-3xl font-bold text-gray-900 dark:text-gray-50 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-3 max-w-xl mx-auto text-gray-600 dark:text-gray-300">
            End-to-end expertise across software, cloud, electronics, and
            design — so you can ship faster with confidence.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.title}
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${svc.accent} border border-gray-100 dark:border-gray-800 p-6 transition hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)]`}
              >
                <div
                  className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl ${svc.iconBg}`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                  {svc.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  {svc.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {svc.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#e6443b]" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Why MiraiBits ──────────────────────────────────────────── */}
      <section className="relative my-4 overflow-hidden rounded-2xl border border-red-100 bg-gradient-to-br from-red-50 via-white to-white dark:border-red-900/40 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="absolute inset-0 -translate-x-1/3 translate-y-1/3 rounded-full bg-red-200/60 blur-3xl dark:bg-red-900/30 pointer-events-none" />
        <div className="relative px-6 py-12 sm:px-10 lg:px-14">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#e6443b]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#e6443b]">
              Why MiraiBits
            </span>
            <h2 className="mt-4 text-2xl font-bold text-gray-900 dark:text-gray-50 sm:text-3xl">
              A Team That Ships
            </h2>
            <p className="mt-4 text-base text-gray-600 dark:text-gray-300">
              We are a multidisciplinary team combining software engineering,
              electronics, and design to deliver solutions that work in the real
              world.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              {
                step: "01",
                emoji: "💡",
                title: "Understand",
                body: "We dive deep into your problem before writing a single line of code.",
              },
              {
                step: "02",
                emoji: "⚙️",
                title: "Build",
                body: "Rapid prototyping followed by production-grade engineering.",
              },
              {
                step: "03",
                emoji: "��",
                title: "Deliver",
                body: "On-time delivery with documentation, support, and long-term partnership.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex flex-col gap-3 rounded-2xl bg-white/95 p-5 text-left ring-1 ring-red-100 backdrop-blur dark:bg-gray-900/70 dark:ring-gray-800 sm:p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#e6443b] text-xs font-semibold text-white sm:text-sm">
                    {item.step}
                  </span>
                  <div className="text-3xl" aria-hidden>
                    {item.emoji}
                  </div>
                </div>
                <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ───────────────────────────────────────────────── */}
      <section id="projects" className="py-16 scroll-mt-20">
        <div className="mb-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#e6443b]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#e6443b]">
            Portfolio
          </span>
          <h2 className="mt-4 text-3xl font-bold text-gray-900 dark:text-gray-50 sm:text-4xl">
            Projects We&apos;re Proud Of
          </h2>
          <p className="mt-3 max-w-xl mx-auto text-gray-600 dark:text-gray-300">
            A selection of live products and open-source work that demonstrates
            the breadth of what we build.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((proj) => {
            const Icon = proj.icon;
            return (
              <Link
                key={proj.title}
                href={proj.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white/80 p-6 backdrop-blur transition hover:border-[#e6443b]/30 hover:shadow-[0_8px_24px_rgba(230,68,59,0.08)] dark:border-gray-800 dark:bg-gray-800/60 dark:hover:border-[#e6443b]/30"
              >
                <div className="flex items-start justify-between gap-3">
                  <div
                    className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${proj.iconBg}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <ChevronRight className="h-5 w-5 shrink-0 text-gray-400 transition group-hover:translate-x-1 group-hover:text-[#e6443b]" />
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 dark:text-gray-100">
                    {proj.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                    {proj.description}
                  </p>
                </div>

                <div className="mt-auto flex flex-wrap gap-2">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── Contact / CTA ──────────────────────────────────────────── */}
      <section
        id="contact"
        className="mb-16 scroll-mt-20 overflow-hidden rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white px-6 py-14 text-center dark:border-gray-800 dark:from-gray-900 dark:to-gray-800 sm:px-12"
      >
        <span className="inline-flex items-center gap-2 rounded-full bg-[#e6443b]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#e6443b]">
          Contact Us
        </span>
        <h2 className="mt-4 text-3xl font-bold text-gray-900 dark:text-gray-50 sm:text-4xl">
          Ready to Start Your Project?
        </h2>
        <p className="mt-4 mx-auto max-w-xl text-gray-600 dark:text-gray-300">
          Tell us about your idea and we&apos;ll get back to you within one
          business day.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:hello@miraibits.com"
            className="inline-flex items-center gap-2 rounded-lg bg-[#e6443b] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#c73a34]"
          >
            <Mail className="h-4 w-4" />
            Email Us
          </a>
          <a
            href="https://wa.me/94726604751"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-gray-900 transition hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
          <a
            href="tel:+94726604751"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-gray-900 transition hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
          >
            <Phone className="h-4 w-4" />
            Call Us
          </a>
        </div>
      </section>
    </main>
  );
}
