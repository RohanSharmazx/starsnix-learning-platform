/* ─── Section & layout helpers ─────────────────────────── */
function SectionLabel({
  num,
  children,
}: {
  num: string;
  children: React.ReactNode;
}) {
  return (
    <p className="ds-section-label">
      <span>{num}</span>
      {children}
    </p>
  );
}

/* ─── Colour data ───────────────────────────────────────── */
const primaryColors = [
  { name: "Primary 500", hex: "#6366F1", bg: "#6366F1" },
  { name: "Primary 400", hex: "#8B5CF6", bg: "#8B5CF6" },
  { name: "Primary 300", hex: "#A78BFA", bg: "#A78BFA" },
  { name: "Primary 200", hex: "#C4B5FD", bg: "#C4B5FD" },
  { name: "Primary 100", hex: "#EDE9FE", bg: "#EDE9FE" },
];

const neutralColors = [
  { name: "Neutral 900", hex: "#0F172A", bg: "#0F172A" },
  { name: "Neutral 700", hex: "#334155", bg: "#334155" },
  { name: "Neutral 500", hex: "#64748B", bg: "#64748B" },
  { name: "Neutral 300", hex: "#CBD5E1", bg: "#CBD5E1" },
  { name: "Neutral 200", hex: "#E2E8F0", bg: "#E2E8F0" },
  { name: "Neutral 100", hex: "#F1F5F9", bg: "#F1F5F9" },
  { name: "Neutral 50",  hex: "#FBFAFC", bg: "#FBFAFC" },
  { name: "White",       hex: "#FFFFFF", bg: "#FFFFFF" },
];

/* ─── Type scale data ───────────────────────────────────── */
const typeScale = [
  { style: "Display 1",  font: "Playfair Display", size: "48 / 56", weight: "Bold",      use: "Page titles" },
  { style: "Display 2",  font: "Playfair Display", size: "36 / 44", weight: "Bold",      use: "Section titles" },
  { style: "Heading 1",  font: "Inter",            size: "28 / 36", weight: "Semi Bold", use: "Card titles" },
  { style: "Heading 2",  font: "Inter",            size: "22 / 30", weight: "Semi Bold", use: "Sub section" },
  { style: "Heading 3",  font: "Inter",            size: "18 / 26", weight: "Medium",    use: "Small titles" },
  { style: "Body Large", font: "Inter",            size: "16 / 24", weight: "Regular",   use: "Body copy" },
  { style: "Body",       font: "Inter",            size: "14 / 20", weight: "Regular",   use: "Supporting text" },
  { style: "Small",      font: "Inter",            size: "12 / 16", weight: "Regular",   use: "Captions, meta" },
];

/* ─── Spacing data ──────────────────────────────────────── */
const spacingStops = [
  { px: 4,  rem: "0.25rem", label: "4" },
  { px: 8,  rem: "0.5rem",  label: "8" },
  { px: 12, rem: "0.75rem", label: "12" },
  { px: 16, rem: "1rem",    label: "16" },
  { px: 24, rem: "1.5rem",  label: "24" },
  { px: 32, rem: "2rem",    label: "32" },
  { px: 40, rem: "2.5rem",  label: "40" },
  { px: 48, rem: "3rem",    label: "48" },
  { px: 64, rem: "4rem",    label: "64" },
];

/* ─── Radius data ───────────────────────────────────────── */
const radii = [
  { label: "4px",  sub: "(xs)",      r: "4px" },
  { label: "8px",  sub: "(sm)",      r: "8px" },
  { label: "12px", sub: "(md)",      r: "12px" },
  { label: "16px", sub: "(lg)",      r: "16px" },
  { label: "24px", sub: "(xl)",      r: "24px" },
  { label: "Full", sub: "(circle)",  r: "9999px" },
];

/* ─── Shadow data ───────────────────────────────────────── */
const shadows = [
  {
    label: "Sm",
    value: "0 1px 2px 0\nrgba(15, 23, 42, 0.05)",
    shadow: "0 1px 2px 0 rgba(15,23,42,0.05)",
  },
  {
    label: "Md",
    value: "0 4px 12px -2px\nrgba(15, 23, 42, 0.08)",
    shadow: "0 4px 12px -2px rgba(15,23,42,0.08)",
  },
  {
    label: "Lg",
    value: "0 12px 24px -4px\nrgba(15, 23, 42, 0.10)",
    shadow: "0 12px 24px -4px rgba(15,23,42,0.10)",
  },
  {
    label: "Xl",
    value: "0 20px 40px -8px\nrgba(15, 23, 42, 0.12)",
    shadow: "0 20px 40px -8px rgba(15,23,42,0.12)",
  },
];

/* ─── Icon data ─────────────────────────────────────────── */
const outlineIcons = ["⌂", "⌕", "⊙", "▣", "☆", "ＩI", "⊙", "○", "›"];
const filledIcons  = ["⌂", "⌕", "⊙", "▣", "☆", "ＩI", "⊙", "●", "›"];

/* ─── Principles data ───────────────────────────────────── */
const principles = [
  {
    icon: "👁",
    title: "Clarity First",
    desc: "Every element should communicate clearly.",
  },
  {
    icon: "⊞",
    title: "Consistency",
    desc: "Use components and patterns consistently across the platform.",
  },
  {
    icon: "◎",
    title: "Focus & Calm",
    desc: "Remove noise and help learners focus on what matters.",
  },
  {
    icon: "♿",
    title: "Accessible",
    desc: "Design with accessibility and inclusivity in mind.",
  },
];

/* ================================================================
   PAGE COMPONENT
   ================================================================ */
export default function Home() {
  return (
    <div className="ds-page">
      {/* ============================================================
          HERO — Design System Cover
          ============================================================ */}
      <div className="ds-hero">
        <div className="ds-hero-left">
          {/* Brand */}
          <div className="ds-brand">
            <span className="ds-brand-icon">✦</span>
            <span className="ds-brand-name">Starsnix</span>
          </div>

          {/* Title */}
          <h1 className="ds-hero-title">
            Design<br />
            <em>System</em>
          </h1>

          {/* Description */}
          <p className="ds-hero-desc">
            A unified design language for Starsnix learning platform. Clean,
            modern and focused on clarity, consistency and intuitive learning
            experiences.
          </p>

          <p className="ds-hero-version">VERSION 1.0 &nbsp;·&nbsp; MAY 2025</p>
        </div>

        <div className="ds-hero-right">
          <div className="ds-hero-deco" aria-hidden="true" />
          <span className="ds-hero-star2" aria-hidden="true">✦</span>
          <div className="ds-hero-taglines">
            <span>Learn</span>
            <span>Create</span>
            <span>Grow</span>
            <span>Brighter.</span>
          </div>
          <span className="ds-hero-star" aria-hidden="true">✦</span>
        </div>
      </div>

      {/* ============================================================
          01 — COLORS
          ============================================================ */}
      <section className="ds-section" id="colors" aria-labelledby="colors-heading">
        <SectionLabel num="01">COLORS</SectionLabel>

        {/* Primary */}
        <div className="ds-color-group">
          <p className="ds-color-group-label">Primary</p>
          <div className="ds-swatch-row">
            {primaryColors.map((c) => (
              <div key={c.name} className="ds-swatch">
                <div
                  className="ds-swatch-chip"
                  style={{ background: c.bg }}
                  title={c.hex}
                />
                <span className="ds-swatch-name">{c.name}</span>
                <span className="ds-swatch-hex">{c.hex}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Neutral */}
        <div className="ds-color-group">
          <p className="ds-color-group-label">Neutral</p>
          <div className="ds-swatch-row">
            {neutralColors.map((c) => (
              <div key={c.name} className="ds-swatch">
                <div
                  className="ds-swatch-chip"
                  style={{ background: c.bg }}
                  title={c.hex}
                />
                <span className="ds-swatch-name">{c.name}</span>
                <span className="ds-swatch-hex">{c.hex}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          02 — TYPOGRAPHY  +  03 — TYPE SCALE
          ============================================================ */}
      <section className="ds-section" id="typography" aria-labelledby="type-heading">
        <div className="ds-type-grid">
          {/* Left — specimens */}
          <div>
            <SectionLabel num="02">TYPOGRAPHY</SectionLabel>

            <div className="ds-type-specimen">
              {/* Playfair Display */}
              <div className="ds-type-item">
                <span className="ds-type-item-display">Ag</span>
                <div className="ds-type-item-info">
                  <h3>Playfair Display</h3>
                  <p>Elegant · Readable · Timeless</p>
                </div>
              </div>

              {/* Inter */}
              <div className="ds-type-item">
                <span className="ds-type-item-body" style={{ fontFamily: "var(--font-body)" }}>
                  Ag
                </span>
                <div className="ds-type-item-info">
                  <h3>Inter</h3>
                  <p>Clean · Modern · Highly legible</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — scale table */}
          <div>
            <SectionLabel num="03">TYPE SCALE</SectionLabel>
            <table className="ds-type-scale-table" aria-label="Type scale">
              <thead>
                <tr>
                  <th>Style</th>
                  <th>Font</th>
                  <th>Size / Line Height</th>
                  <th>Weight</th>
                  <th>Use</th>
                </tr>
              </thead>
              <tbody>
                {typeScale.map((row) => (
                  <tr key={row.style}>
                    <td>{row.style}</td>
                    <td style={{ color: "var(--neutral-500)" }}>{row.font}</td>
                    <td style={{ color: "var(--neutral-500)" }}>{row.size}</td>
                    <td style={{ color: "var(--neutral-500)" }}>{row.weight}</td>
                    <td style={{ color: "var(--neutral-500)" }}>{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============================================================
          04 — SPACING SYSTEM  +  05 — RADIUS & SHADOWS
          ============================================================ */}
      <section className="ds-section" id="spacing">
        <div className="ds-two-col">
          {/* Spacing */}
          <div>
            <SectionLabel num="04">SPACING SYSTEM</SectionLabel>
            <p className="text-small text-muted" style={{ marginBottom: "8px" }}>Base unit: 4px</p>

            <div className="ds-spacing-row">
              {spacingStops.map((s) => (
                <div key={s.px} className="ds-spacing-item">
                  <div
                    className="ds-spacing-bar"
                    style={{ width: `${Math.max(s.px, 12)}px`, height: `${s.px + 12}px` }}
                  />
                  <span className="ds-spacing-value">{s.label}</span>
                  <span className="ds-spacing-label">({s.rem})</span>
                </div>
              ))}
            </div>
          </div>

          {/* Radius & Shadows */}
          <div>
            <SectionLabel num="05">RADIUS &amp; SHADOWS</SectionLabel>

            <p className="text-small" style={{ fontWeight: 600, marginBottom: "12px", color: "var(--neutral-700)" }}>
              Radius
            </p>
            <div className="ds-radius-row">
              {radii.map((r) => (
                <div key={r.label} className="ds-radius-item">
                  <div
                    className="ds-radius-chip"
                    style={{ borderRadius: r.r }}
                  />
                  <span className="ds-radius-label">{r.label}</span>
                  <span className="ds-radius-sub">{r.sub}</span>
                </div>
              ))}
            </div>

            <p className="text-small" style={{ fontWeight: 600, marginBottom: "12px", color: "var(--neutral-700)" }}>
              Shadows
            </p>
            <div className="ds-shadow-row">
              {shadows.map((s) => (
                <div
                  key={s.label}
                  className="ds-shadow-item"
                  style={{ boxShadow: s.shadow }}
                >
                  <p className="ds-shadow-item-label">{s.label}</p>
                  <p className="ds-shadow-item-value">{s.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          06 — ICONS  +  07 — BUTTONS  +  08 — INPUTS
          ============================================================ */}
      <section className="ds-section" id="components">
        <div className="ds-three-col">

          {/* 06 — Icons */}
          <div>
            <SectionLabel num="06">ICONS</SectionLabel>

            <p className="text-small" style={{ fontWeight: 600, marginBottom: "8px", color: "var(--neutral-600)" }}>
              Outline Style
            </p>
            <div className="ds-icon-grid">
              {outlineIcons.map((icon, i) => (
                <div key={`out-${i}`} className="ds-icon-chip" aria-hidden="true">{icon}</div>
              ))}
            </div>

            <p className="text-small" style={{ fontWeight: 600, marginBottom: "8px", marginTop: "12px", color: "var(--neutral-600)" }}>
              Filled Style
            </p>
            <div className="ds-icon-grid">
              {filledIcons.map((icon, i) => (
                <div key={`fill-${i}`} className="ds-icon-chip" style={{ background: "var(--primary-100)", borderColor: "var(--primary-200)" }} aria-hidden="true">{icon}</div>
              ))}
            </div>

            <p className="text-small" style={{ fontWeight: 600, marginTop: "16px", marginBottom: "6px", color: "var(--neutral-700)" }}>
              Icon Specs
            </p>
            <ul className="ds-icon-specs">
              <li>24x24px grid</li>
              <li>2px stroke width (outline)</li>
              <li>Rounded line caps</li>
              <li>Consistent optical balance</li>
            </ul>
          </div>

          {/* 07 — Buttons */}
          <div>
            <SectionLabel num="07">BUTTONS</SectionLabel>

            {/* Column headers */}
            <div style={{ display: "grid", gridTemplateColumns: "60px 1fr 1fr 1fr 1fr", gap: "8px 12px", marginBottom: "8px" }}>
              <span />
              {["Primary", "Secondary", "Tertiary", "Text"].map((col) => (
                <span key={col} className="text-small text-muted" style={{ fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  {col}
                </span>
              ))}
            </div>

            {/* Default row */}
            <div style={{ display: "grid", gridTemplateColumns: "60px 1fr 1fr 1fr 1fr", gap: "8px 12px", alignItems: "center", marginBottom: "8px" }}>
              <span className="text-small text-muted" style={{ fontWeight: 600 }}>Default</span>
              <button className="btn btn-primary" id="btn-primary-default">Get Started</button>
              <button className="btn btn-secondary" id="btn-secondary-default">Explore Courses</button>
              <button className="btn btn-tertiary" id="btn-tertiary-default">View Lesson ↗</button>
              <button className="btn btn-text" id="btn-text-default">Watch Video ▶</button>
            </div>

            {/* Hover row (visual only — shown at reduced opacity to illustrate hover) */}
            <div style={{ display: "grid", gridTemplateColumns: "60px 1fr 1fr 1fr 1fr", gap: "8px 12px", alignItems: "center", marginBottom: "8px" }}>
              <span className="text-small text-muted" style={{ fontWeight: 600 }}>Hover</span>
              <button className="btn btn-primary" id="btn-primary-hover" style={{ background: "#4f46e5", boxShadow: "var(--shadow-md)" }}>Get Started</button>
              <button className="btn btn-secondary" id="btn-secondary-hover" style={{ background: "var(--primary-100)" }}>Explore Courses</button>
              <button className="btn btn-tertiary" id="btn-tertiary-hover" style={{ background: "var(--neutral-100)" }}>View Lesson ↗</button>
              <button className="btn btn-text" id="btn-text-hover" style={{ color: "#4f46e5", textDecoration: "underline" }}>Watch Video ▶</button>
            </div>

            {/* Disabled row */}
            <div style={{ display: "grid", gridTemplateColumns: "60px 1fr 1fr 1fr 1fr", gap: "8px 12px", alignItems: "center", marginBottom: "16px" }}>
              <span className="text-small text-muted" style={{ fontWeight: 600 }}>Disabled</span>
              <button className="btn btn-primary" disabled id="btn-primary-disabled">Get Started</button>
              <button className="btn btn-secondary" disabled id="btn-secondary-disabled">Explore Courses</button>
              <button className="btn btn-tertiary" disabled id="btn-tertiary-disabled">View Lesson ↗</button>
              <button className="btn btn-text" disabled id="btn-text-disabled">Watch Video ▶</button>
            </div>

            <div className="ds-btn-specs">
              <p>Button Specs</p>
              <ul>
                <li>Height: 44px (default)</li>
                <li>Padding: 0 16px (lg), 0 12px (md)</li>
                <li>Radius: 12px</li>
                <li>Font: Inter Medium (14–16px)</li>
              </ul>
            </div>
          </div>

          {/* 08 — Inputs */}
          <div>
            <SectionLabel num="08">INPUTS</SectionLabel>

            <div className="ds-input-group">
              <label className="ds-input-label" htmlFor="search-input">Search / Text Input</label>
              <div className="ds-input-wrapper">
                <span className="ds-input-icon" aria-hidden="true">⌕</span>
                <input
                  id="search-input"
                  className="ds-input"
                  type="search"
                  placeholder="Search anything..."
                />
                <span className="ds-input-shortcut" aria-label="Keyboard shortcut">⌘ K</span>
              </div>
            </div>

            <div className="ds-input-group">
              <label className="ds-input-label" htmlFor="sort-select">Select</label>
              <select id="sort-select" className="ds-select">
                <option>Most Relevant</option>
                <option>Newest</option>
                <option>Most Popular</option>
              </select>
            </div>

            <div className="ds-field-specs">
              <p>Field Specs</p>
              <ul>
                <li>Height: 44px</li>
                <li>Radius: 12px</li>
                <li>Border: 1px solid #E2E8F0</li>
                <li>Padding: 0 16px</li>
                <li>Focus: Border color #6366F1</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          09 — BADGES  +  10 — STATUS  +  11 — PROGRESS
          ============================================================ */}
      <section className="ds-section" id="badges">
        <div className="ds-three-col">

          {/* 09 — Badges */}
          <div>
            <SectionLabel num="09">BADGES / TAGS</SectionLabel>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
              <div>
                <p className="text-small text-muted" style={{ marginBottom: "8px" }}>Video</p>
                <span className="badge badge-video" id="badge-video">
                  <span className="badge-icon">▶</span> VIDEO
                </span>
              </div>
              <div>
                <p className="text-small text-muted" style={{ marginBottom: "8px" }}>Lesson</p>
                <span className="badge badge-lesson" id="badge-lesson">
                  <span className="badge-icon">▣</span> LESSON
                </span>
              </div>
              <div>
                <p className="text-small text-muted" style={{ marginBottom: "8px" }}>Popular</p>
                <span className="badge badge-popular" id="badge-popular">
                  🔥 POPULAR
                </span>
              </div>
            </div>
          </div>

          {/* 10 — Status */}
          <div>
            <SectionLabel num="10">STATUS / INDICATORS</SectionLabel>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div className="status status-in-progress" id="status-in-progress">
                <span className="status-dot" aria-hidden="true" />
                In Progress
              </div>
              <div className="status status-completed" id="status-completed">
                <span className="status-dot" aria-hidden="true">✓</span>
                Completed
              </div>
              <div className="status status-now-playing" id="status-now-playing">
                <span className="status-dot" aria-hidden="true">▶</span>
                Now Playing
              </div>
              <div className="status status-locked" id="status-locked">
                <span className="status-dot" aria-hidden="true">🔒</span>
                Locked
              </div>
            </div>
          </div>

          {/* 11 — Progress bar */}
          <div>
            <SectionLabel num="11">PROGRESS BAR</SectionLabel>
            <div className="progress-bar-wrapper" id="progress-bar-35">
              <div className="progress-bar-track">
                <div className="progress-bar-fill" style={{ width: "35%" }} />
              </div>
              <span className="progress-bar-label">35% complete</span>
            </div>
            <br />
            <div className="progress-bar-wrapper" id="progress-bar-70">
              <div className="progress-bar-track">
                <div className="progress-bar-fill" style={{ width: "70%" }} />
              </div>
              <span className="progress-bar-label">70% complete</span>
            </div>
            <br />
            <div className="progress-bar-wrapper" id="progress-bar-100">
              <div className="progress-bar-track">
                <div className="progress-bar-fill" style={{ width: "100%", background: "#22c55e" }} />
              </div>
              <span className="progress-bar-label">100% complete</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          12 — CARDS
          ============================================================ */}
      <section className="ds-section" id="cards">
        <SectionLabel num="12">CARDS</SectionLabel>

        <div className="ds-cards-grid">
          {/* Course Card */}
          <article className="card-course" id="card-course-nextjs">
            <div className="card-course-icon" aria-hidden="true">N</div>
            <div className="card-course-body">
              <p className="card-course-title">Next.js for Production</p>
              <p className="card-course-desc">
                Build scalable, high-performance web applications with Next.js.
              </p>
              <div className="card-course-meta">
                <span className="card-course-meta-item">
                  <span className="meta-icon">⊙</span> Intermediate
                </span>
                <span className="card-course-meta-item">
                  <span className="meta-icon">⊙</span> 16h 24m
                </span>
                <span className="card-course-meta-item">
                  <span className="meta-icon">▣</span> 12 modules
                </span>
              </div>
            </div>
          </article>

          {/* Lesson Card — Video */}
          <article className="card-lesson-video" id="card-lesson-video-datafetching">
            <span className="badge badge-video"><span className="badge-icon">▶</span> VIDEO</span>
            <p className="card-lesson-video-title">
              Data Fetching in Server Components
            </p>
            <p className="card-lesson-video-desc">
              Learn how to fetch data on the server using async/await and
              Next.js best practices.
            </p>
            <div className="card-lesson-video-footer">
              <span className="card-lesson-video-meta">
                Lesson 5.1 &nbsp;·&nbsp; 12:45
              </span>
              <a href="#" className="watch-from" aria-label="Watch from 12:45">
                ▶ Watch from 12:45
              </a>
            </div>
          </article>

          {/* Lesson Card — Topic */}
          <article className="card-lesson-topic" id="card-lesson-topic-caching">
            <span className="badge badge-lesson"><span className="badge-icon">▣</span> LESSON</span>
            <p className="card-lesson-topic-title">Data Fetching &amp; Caching</p>
            <p className="card-lesson-topic-desc">
              Explore different data fetching methods in Next.js and how to
              cache and revalidate data for optimal performance.
            </p>
            <div className="card-lesson-topic-footer">
              <span className="text-small text-muted">Module 5</span>
              <a href="#" className="view-lesson" aria-label="View lesson on Data Fetching">
                View lesson ↗
              </a>
            </div>
          </article>

          {/* Resource Card */}
          <article className="card-resource" id="card-resource-caching-guide">
            <div className="card-resource-header">
              <div className="card-resource-icon" aria-hidden="true">📄</div>
              <div>
                <p className="card-resource-title">Caching and Revalidation Guide</p>
                <p className="card-resource-desc">
                  Deep dive into Next.js caching strategies.
                </p>
              </div>
            </div>
            <div className="card-resource-footer">
              <span>
                <span className="card-resource-type">PDF</span>
                &nbsp;·&nbsp; 1.2 MB
              </span>
              <a href="#" aria-label="Open resource in new tab">↗</a>
            </div>
          </article>
        </div>
      </section>

      {/* ============================================================
          13 — NAVIGATION
          ============================================================ */}
      <section className="ds-section" id="navigation">
        <SectionLabel num="13">NAVIGATION</SectionLabel>

        <div className="ds-two-col" style={{ alignItems: "start", gap: "var(--space-12)" }}>
          {/* Top nav */}
          <div>
            <p className="text-small text-muted" style={{ marginBottom: "12px" }}>Top Nav</p>
            <nav className="ds-nav" aria-label="Main navigation example">
              <a href="#" className="ds-nav-brand">
                <span className="ds-nav-brand-icon">✦</span>
                Starsnix
              </a>
              <ul className="ds-nav-links" role="list">
                <li><a href="#" className="ds-nav-link active" aria-current="page">Courses</a></li>
                <li><a href="#" className="ds-nav-link">My Learning</a></li>
              </ul>
            </nav>
          </div>

          {/* Breadcrumbs + Pagination */}
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
            <div>
              <p className="text-small text-muted" style={{ marginBottom: "12px" }}>Breadcrumbs</p>
              <nav className="ds-breadcrumbs" aria-label="Breadcrumb example">
                <a href="#" className="ds-breadcrumb-link">All Courses</a>
                <span className="ds-breadcrumb-sep" aria-hidden="true">›</span>
                <a href="#" className="ds-breadcrumb-link">Next.js for Production</a>
                <span className="ds-breadcrumb-sep" aria-hidden="true">›</span>
                <span className="ds-breadcrumb-current" aria-current="page">Data Fetching &amp; Caching</span>
              </nav>
            </div>

            <div>
              <p className="text-small text-muted" style={{ marginBottom: "12px" }}>Pagination</p>
              <nav className="ds-pagination" aria-label="Pagination example">
                <button className="ds-page-btn" id="page-prev" aria-label="Previous page">‹</button>
                <button className="ds-page-btn active" id="page-1" aria-current="page" aria-label="Page 1">1</button>
                <button className="ds-page-btn" id="page-2" aria-label="Page 2">2</button>
                <button className="ds-page-btn" id="page-3" aria-label="Page 3">3</button>
                <span className="ds-page-dots" aria-hidden="true">…</span>
                <button className="ds-page-btn" id="page-8" aria-label="Page 8">8</button>
                <button className="ds-page-btn" id="page-next" aria-label="Next page">›</button>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          14 — PRINCIPLES
          ============================================================ */}
      <section className="ds-section" id="principles">
        <SectionLabel num="14">PRINCIPLES</SectionLabel>

        <div className="ds-principles-grid">
          {principles.map((p) => (
            <div key={p.title} className="ds-principle">
              <div className="ds-principle-icon" aria-hidden="true">{p.icon}</div>
              <p className="ds-principle-title">{p.title}</p>
              <p className="ds-principle-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          CTA STRIP
          ============================================================ */}
      <div className="ds-cta-strip" aria-label="Starsnix tagline">
        <div>
          <p className="ds-cta-label">STARSNIX DESIGN SYSTEM</p>
          <p className="ds-cta-title">
            Learn, Create<br />
            <em>Grow Brighter.</em>
          </p>
        </div>
        <div className="ds-cta-taglines">
          <p>Ideas today.</p>
          <p>Brighter tomorrow.</p>
        </div>
        <span className="ds-cta-star" aria-hidden="true">✦</span>
      </div>
    </div>
  );
}
