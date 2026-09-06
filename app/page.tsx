import Link from "next/link";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

/* ── Course data ─────────────────────────────────────────── */
const courses = [
  {
    id: "nextjs",
    icon: "nextjs",
    iconLabel: "N",
    title: "Next.js for Production",
    desc: "Build scalable, high-performance web applications with Next.js.",
    level: "Intermediate",
    duration: "18h 24m",
    modules: "12 modules",
  },
  {
    id: "docker",
    icon: "docker",
    iconLabel: "🐳",
    title: "Docker Essentials",
    desc: "Containerize applications and streamline your development workflow.",
    level: "Beginner",
    duration: "10h 12m",
    modules: "8 modules",
  },
  {
    id: "typescript",
    icon: "ts",
    iconLabel: "TS",
    title: "TypeScript Deep Dive",
    desc: "Go beyond the basics and write safer, more expressive code.",
    level: "Intermediate",
    duration: "14h 36m",
    modules: "10 modules",
  },
];

/* ── Logo mark — uses the actual Starsnix PNG logo ──────────
   Logo has a white/transparent background — works everywhere.
   ────────────────────────────────────────────────────────── */
function LogoMark({
  size = 32,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo-mark.png"
      alt="Starsnix logo mark"
      width={size}
      height={size}
      className={className}
      style={{
        width: size,
        height: size,
        objectFit: "contain",
        display: "block",
        flexShrink: 0,
      }}
    />
  );
}


/* ── Navbar brand icon (small) ──────────────────────────── */
function BrandIcon() {
  return <LogoMark size={32} />;
}


/* ── SVG: Footer wave ───────────────────────────────────── */
function FooterWave() {
  return (
    <svg
      className="hp-footer-wave"
      viewBox="0 0 900 180"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ width: "100%", height: "180px", display: "block" }}
    >
      <path
        d="M0,100 C150,160 300,40 450,100 C600,160 750,40 900,100 L900,180 L0,180 Z"
        fill="rgba(167,139,250,0.18)"
      />
      <path
        d="M0,120 C200,170 400,60 600,130 C750,175 850,90 900,120 L900,180 L0,180 Z"
        fill="rgba(196,181,253,0.22)"
      />
      <path
        d="M0,140 C120,155 280,110 450,145 C620,178 780,118 900,145 L900,180 L0,180 Z"
        fill="rgba(167,139,250,0.14)"
      />
    </svg>
  );
}

/* ── Search icon ─────────────────────────────────────────── */
function SearchIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="7.5" cy="7.5" r="5.5" stroke="#a09ec0" strokeWidth="1.5" />
      <path d="M11.5 11.5L15.5 15.5" stroke="#a09ec0" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/* ── Bell icon ───────────────────────────────────────────── */
function BellIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M10 2a6 6 0 00-6 6v3l-1.5 2.5h15L16 11V8a6 6 0 00-6-6z"
        stroke="#64748b"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M8.5 16a1.5 1.5 0 003 0" stroke="#64748b" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

/* ── Course icon picker ──────────────────────────────────── */
function CourseIcon({ type, label }: { type: string; label: string }) {
  if (type === "nextjs") {
    return (
      <div className="hp-course-icon hp-course-icon-nextjs" aria-label="Next.js">
        N
      </div>
    );
  }
  if (type === "docker") {
    return (
      <div className="hp-course-icon hp-course-icon-docker" aria-label="Docker">
        {/* Simple docker whale SVG */}
        <svg width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="2" y="4" width="6" height="5" rx="1" fill="white" opacity="0.9"/>
          <rect x="10" y="4" width="6" height="5" rx="1" fill="white" opacity="0.9"/>
          <rect x="18" y="4" width="6" height="5" rx="1" fill="white" opacity="0.9"/>
          <rect x="10" y="11" width="6" height="5" rx="1" fill="white" opacity="0.9"/>
          <rect x="18" y="11" width="6" height="5" rx="1" fill="white" opacity="0.9"/>
          <rect x="26" y="11" width="6" height="5" rx="1" fill="white" opacity="0.9"/>
          <path d="M2 18 Q18 22 34 16" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7"/>
        </svg>
      </div>
    );
  }
  if (type === "ts") {
    return (
      <div className="hp-course-icon hp-course-icon-ts" aria-label="TypeScript">
        TS
      </div>
    );
  }
  return <div className="hp-course-icon" aria-label={label}>{label}</div>;
}

/* ================================================================
   HOME PAGE
   ================================================================ */
export default function HomePage() {
  return (
    <div className="hp-body">
      {/* ──────────────────────────────────────────────────────
          NAVBAR
          ────────────────────────────────────────────────────── */}
      <header className="hp-nav" role="banner">
        {/* Brand */}
        <Link href="/" className="hp-nav-brand" aria-label="Starsnix home">
          <span className="hp-nav-brand-icon">
            <BrandIcon />
          </span>
          <span className="hp-nav-brand-wordmark">Starsnix</span>
        </Link>

        {/* Nav links — centred */}
        <nav aria-label="Main navigation">
          <ul className="hp-nav-links" role="list">
            <li>
              <Link href="/courses" className="hp-nav-link">
                Courses
              </Link>
            </li>
            <li>
              <Link href="/my-learning" className="hp-nav-link">
                My Learning
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right actions */}
        <div className="hp-nav-actions">
          <button
            className="hp-nav-bell"
            aria-label="Notifications"
            id="nav-bell-btn"
            type="button"
          >
            <BellIcon />
          </button>
          <Show when="signed-in">
            <UserButton />
          </Show>
          <Show when="signed-out">
            <SignInButton mode="modal">
              <button
                className="hp-nav-btn hp-nav-btn-signin"
                aria-label="Sign in"
                id="nav-signin-btn"
                type="button"
              >
                Sign In
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button
                className="hp-nav-btn hp-nav-btn-signup"
                aria-label="Sign up"
                id="nav-signup-btn"
                type="button"
              >
                Sign Up
              </button>
            </SignUpButton>
          </Show>
        </div>
      </header>

      {/* ──────────────────────────────────────────────────────
          HERO
          ────────────────────────────────────────────────────── */}
      <section className="hp-hero" aria-labelledby="hero-heading">
        {/* Decorative blobs */}
        <div className="hp-hero-blob hp-hero-blob-1" aria-hidden="true" />
        <div className="hp-hero-blob hp-hero-blob-2" aria-hidden="true" />
        <div className="hp-hero-blob hp-hero-blob-3" aria-hidden="true" />

        {/* Subtle grid */}
        <div className="hp-hero-grid" aria-hidden="true" />



        {/* Sparkles */}
        <span className="hp-sparkle hp-sparkle-1" aria-hidden="true">✦</span>
        <span className="hp-sparkle hp-sparkle-2" aria-hidden="true">✦</span>

        {/* Floating side text — left */}
        <div className="hp-hero-text-left" aria-hidden="true">
          <p>
            Learn<br />
            Create<br />
            Grow<br />
            Brighter.
          </p>
          <span className="hp-arrow">↙</span>
        </div>

        {/* Floating side text — right */}
        <div className="hp-hero-text-right" aria-hidden="true">
          <span className="hp-arrow-up">↑</span>
          <p>
            Ideas<br />
            today.<br />
            Brighter<br />
            tomorrow.
          </p>
        </div>

        {/* Central content */}
        <div className="hp-hero-content">
          {/* Pill */}
          <span className="hp-pill">Intelligent Learning</span>

          {/* Headline */}
          <h1 className="hp-headline" id="hero-heading">
            Search your learning<br />
            <em className="hp-headline-accent">in plain English.</em>
          </h1>

          {/* Subtitle */}
          <p className="hp-hero-sub">
            Starsnix understands what you want to learn and finds the exact
            lessons across all your courses.
          </p>

          {/* CTA */}
          <a href="/courses" className="hp-cta-btn" id="hero-explore-btn">
            Explore Courses
            <span className="hp-cta-arrow" aria-hidden="true">→</span>
          </a>

          {/* Search bar */}
          <div
            className="hp-search-bar"
            role="search"
            id="hero-search-bar"
          >
            <span className="hp-search-icon" aria-hidden="true">
              <SearchIcon />
            </span>
            <input
              id="hero-search-input"
              className="hp-search-input"
              type="search"
              placeholder="Ask anything about your learning..."
              aria-label="Search courses and lessons"
            />
            <span className="hp-search-kbd" aria-label="Keyboard shortcut: Command K">
              ⌘ K
            </span>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────
          COURSES
          ────────────────────────────────────────────────────── */}
      <section className="hp-courses" aria-labelledby="courses-heading">
        <div className="hp-courses-header">
          <h2 className="hp-courses-title" id="courses-heading">
            All Courses
          </h2>
          <a href="/courses" className="hp-courses-view-all" id="courses-view-all-link">
            View all courses →
          </a>
        </div>

        <div className="hp-courses-grid" role="list">
          {courses.map((course) => (
            <article
              key={course.id}
              className="hp-course-card"
              id={`course-card-${course.id}`}
              role="listitem"
            >
              {/* Top — icon + blob */}
              <div className="hp-course-card-top">
                <div className="hp-course-card-blob" aria-hidden="true" />
                <CourseIcon type={course.icon} label={course.iconLabel} />
              </div>

              {/* Body */}
              <div className="hp-course-card-body">
                <h3 className="hp-course-card-title">{course.title}</h3>
                <p className="hp-course-card-desc">{course.desc}</p>
              </div>

              {/* Meta footer */}
              <div className="hp-course-card-meta">
                <span className="hp-course-meta-item">
                  <span className="hp-course-meta-icon" aria-hidden="true">
                    {/* bar chart */}
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="1" y="7" width="2.5" height="5" rx="0.5" fill="#a9a8c8"/>
                      <rect x="5" y="4" width="2.5" height="8" rx="0.5" fill="#a9a8c8"/>
                      <rect x="9" y="1" width="2.5" height="11" rx="0.5" fill="#a9a8c8"/>
                    </svg>
                  </span>
                  {course.level}
                </span>
                <span className="hp-course-meta-item">
                  <span className="hp-course-meta-icon" aria-hidden="true">
                    {/* clock */}
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="6.5" cy="6.5" r="5" stroke="#a9a8c8" strokeWidth="1.2"/>
                      <path d="M6.5 3.5V6.5L8.5 8" stroke="#a9a8c8" strokeWidth="1.2" strokeLinecap="round"/>
                    </svg>
                  </span>
                  {course.duration}
                </span>
                <span className="hp-course-meta-item">
                  <span className="hp-course-meta-icon" aria-hidden="true">
                    {/* doc */}
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="1" width="9" height="11" rx="1.5" stroke="#a9a8c8" strokeWidth="1.2"/>
                      <path d="M4 5h5M4 7.5h3" stroke="#a9a8c8" strokeWidth="1" strokeLinecap="round"/>
                    </svg>
                  </span>
                  {course.modules}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────
          UPDATE STRIP
          ────────────────────────────────────────────────────── */}
      <div className="hp-update-strip" role="note" aria-label="Platform update">
        <span className="hp-update-star" aria-hidden="true">
          <LogoMark size={20} />
        </span>
        <p className="hp-update-text">
          New courses and lessons added every week.
        </p>
      </div>

      {/* ──────────────────────────────────────────────────────
          FOOTER
          ────────────────────────────────────────────────────── */}
      <footer className="hp-footer" role="contentinfo">
        <FooterWave />
        <div className="hp-footer-content">
          {/* Left — stacked text */}
          <div className="hp-footer-left" aria-label="Starsnix tagline">
            <p>SMALL</p>
            <p>STEPS</p>
            <p>BIGGER</p>
            <p>FUTURES</p>
          </div>

          {/* Right — bar + stacked text */}
          <div className="hp-footer-right" aria-label="Starsnix brand">
            <div className="hp-footer-bar" aria-hidden="true" />
            <div className="hp-footer-right-text">
              <p>LEARN</p>
              <p>CREATE</p>
              <p>GROW</p>
              <p>WITH STARSNIX</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
