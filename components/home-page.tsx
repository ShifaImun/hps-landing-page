"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

const hpsLogo = "/images/hps-logo.png";
const venueImg = "/images/venue.jpg";
const sec1 = "/images/sec1.jpg";
const sec2 = "/images/sec2.jpg";
const sec3 = "/images/sec3.jpg";
const sec4 = "/images/sec4.jpg";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <BackgroundField />
      <Nav />
      <Hero />
      <Standard />
      <Committees />
      <Secretariat />
      <Registration />
      <Experience />
      <Testimonials />
      <Venue />
      <Footer />
    </div>
  );
}

/* ---------- Background ambient ---------- */
function BackgroundField() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 vignette" />
      <div className="absolute inset-0 noise opacity-[0.35]" />
    </div>
  );
}

/* ---------- Nav ---------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-background/70 border-b hairline"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 md:px-12">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={hpsLogo}
            alt="The Hyderabad Public School, Warangal"
            className="h-9 w-9 rounded-full object-cover"
          />
          <div className="leading-tight">
            <div className="font-serif text-lg tracking-wide">HPS HIGH SCHOOL</div>
            <div className="text-[10px] tracking-eyebrow uppercase text-muted-foreground">
              Be Vigilant
            </div>
          </div>
        </a>
        <nav className="hidden items-center gap-10 text-[12px] tracking-eyebrow uppercase text-muted-foreground md:flex">
          <a href="#committees" className="hover:text-foreground transition">
            Committees
          </a>
          <a href="#secretariat" className="hover:text-foreground transition">
            Secretariat
          </a>
          <a href="#registration" className="hover:text-foreground transition">
            Registration
          </a>
          <a href="#venue" className="hover:text-foreground transition">
            Venue
          </a>
        </nav>
        <a
          href="#registration"
          className="group inline-flex items-center gap-2 border hairline-strong px-4 py-2 text-[11px] tracking-eyebrow uppercase text-foreground hover:bg-gold hover:text-primary-foreground hover:border-gold transition-colors"
        >
          Register
          <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
        </a>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  return (
    <section id="top" ref={ref} className="relative min-h-[100vh] pt-28 md:pt-32">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-16 px-6 pb-24 md:px-12 lg:grid-cols-12 lg:gap-12">
        <motion.div style={{ y, opacity }} className="lg:col-span-7 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 text-[11px] tracking-eyebrow uppercase text-gold"
          >
            <span className="h-px w-10 bg-gold/60" />
            <TypingLine text="DIPLOMACY · DEBATE · LEADERSHIP" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 font-serif text-[clamp(3.2rem,8vw,7.5rem)] leading-[0.92] tracking-tight text-balance"
          >
            <span className="font-sans text-foreground/90 tracking-[0.18em]">HPSMUN 2026</span>
            <br />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35 }}
            className="mt-10 max-w-xl font-sans text-base leading-relaxed text-muted-foreground md:text-[17px]"
          >
            HPSMUN 2026 gathers India&rsquo;s most discerning young delegates for two days of
            substantive negotiation, policy authorship, and diplomatic exchange — convened on the
            historic grounds of Hyderabad Public School, Warangal.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.55 }}
            className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4 text-[12px] tracking-eyebrow uppercase text-muted-foreground"
          >
            <Datum label="Dates" value="25 — 26 Jul 2026" />
            <span className="h-6 w-px bg-border" />
            <Datum label="Venue" value="HPS · Warangal" />
            <span className="h-6 w-px bg-border" />
            <Datum label="Delegate Fee" value="₹ 800" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <a
              href="#registration"
              className="group inline-flex items-center gap-3 bg-gold px-7 py-4 text-[11px] tracking-eyebrow uppercase text-primary-foreground hover:bg-gold-soft transition-colors"
            >
              Register Now
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#committees"
              className="group inline-flex items-center gap-3 border hairline-strong px-7 py-4 text-[11px] tracking-eyebrow uppercase text-foreground hover:border-gold hover:text-gold transition-colors"
            >
              Explore Committees
            </a>
          </motion.div>
        </motion.div>

        <div className="relative lg:col-span-5 flex items-center justify-center">
          <Globe />
        </div>
      </div>

      {/* Marquee strip */}
      <div className="relative border-y hairline overflow-hidden">
        <div className="flex animate-[scroll_40s_linear_infinite] whitespace-nowrap py-4 text-[11px] tracking-eyebrow uppercase text-muted-foreground">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-12 px-6">
              <span>United Nations Development Programme</span>
              <span className="text-gold">◆</span>
              <span>United Nations General Assembly</span>
              <span className="text-gold">◆</span>
              <span>World Health Organization</span>
              <span className="text-gold">◆</span>
              <span>Lok Sabha</span>
              <span className="text-gold">◆</span>
              <span>Hyderabad Public School · Warangal</span>
              <span className="text-gold">◆</span>
            </div>
          ))}
        </div>
        <style>{`@keyframes scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
      </div>
    </section>
  );
}

function TypingLine({ text }: { text: string }) {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    let timeout = 0;
    let deleting = false;

    const tick = () => {
      setVisible((current) => {
        if (!deleting && current >= text.length) {
          deleting = true;
          timeout = window.setTimeout(tick, 900);
          return current;
        }

        if (deleting && current <= 0) {
          deleting = false;
          timeout = window.setTimeout(tick, 250);
          return current;
        }

        timeout = window.setTimeout(tick, deleting ? 28 : 45);
        return deleting ? current - 1 : current + 1;
      });
    };

    timeout = window.setTimeout(tick, 180);
    return () => window.clearTimeout(timeout);
  }, [text]);

  return (
    <span className="inline-flex items-center">
      <span>{text.slice(0, visible)}</span>
      <span className="ml-0.5 inline-block h-[1em] w-[1px] bg-current animate-pulse" aria-hidden />
    </span>
  );
}

function Datum({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[10px] text-muted-foreground/70">{label}</span>
      <span className="text-foreground text-sm tracking-[0.18em]">{value}</span>
    </div>
  );
}

/* ---------- Globe ---------- */
function Globe() {
  const markers = [
    { name: "UNGA", x: 50, y: 30 },
    { name: "UNDP", x: 76, y: 52 },
    { name: "WHO", x: 28, y: 60 },
    { name: "Lok Sabha", x: 58, y: 76 },
  ];
  return (
    <div className="relative aspect-square w-full max-w-[520px]">
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,_var(--elevated),_var(--midnight)_60%)] shadow-[0_0_120px_-20px_color-mix(in_oklab,var(--gold)_25%,transparent)]" />
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, ease: "linear", repeat: Infinity }}
      >
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <defs>
            <radialGradient id="g" cx="35%" cy="35%" r="70%">
              <stop offset="0%" stopColor="rgba(232,199,102,0.18)" />
              <stop offset="60%" stopColor="rgba(212,175,55,0.04)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="48" fill="url(#g)" />
          <circle
            cx="50"
            cy="50"
            r="48"
            fill="none"
            stroke="rgba(248,250,252,0.18)"
            strokeWidth="0.25"
          />
          {/* longitude */}
          {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5].map((a) => (
            <ellipse
              key={a}
              cx="50"
              cy="50"
              rx={48 * Math.abs(Math.cos((a * Math.PI) / 180))}
              ry="48"
              fill="none"
              stroke="rgba(212,175,55,0.18)"
              strokeWidth="0.18"
            />
          ))}
          {/* latitude */}
          {[10, 22, 35, 50, 65, 78, 90].map((y) => (
            <ellipse
              key={y}
              cx="50"
              cy={y}
              rx="48"
              ry={Math.sin((y / 100) * Math.PI) * 4 + 1}
              fill="none"
              stroke="rgba(248,250,252,0.10)"
              strokeWidth="0.18"
            />
          ))}
        </svg>
      </motion.div>

      {/* Markers (counter-static) */}
      <div className="absolute inset-0">
        {markers.map((m, i) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 + i * 0.18, duration: 0.8 }}
            className="absolute"
            style={{ left: `${m.x}%`, top: `${m.y}%`, transform: "translate(-50%, -50%)" }}
          >
            <div className="relative">
              <div className="absolute inset-0 h-3 w-3 rounded-full bg-gold/40 blur-[6px]" />
              <div className="relative h-1.5 w-1.5 rounded-full bg-gold ring-2 ring-gold/30" />
              <div className="absolute left-3 top-1/2 -translate-y-1/2 whitespace-nowrap text-[10px] tracking-eyebrow uppercase text-gold-soft">
                {m.name}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Ring */}
      <div className="absolute inset-[-6%] rounded-full border hairline animate-[spin_60s_linear_infinite]" />
      <div className="absolute inset-[-14%] rounded-full border border-gold/10" />
    </div>
  );
}

/* ---------- Standard ---------- */
function Standard() {
  return (
    <Section id="standard" eyebrow="The Standard">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-7">
          <h2 className="font-serif text-[clamp(2.4rem,5vw,4.5rem)] leading-[1.02] tracking-tight text-balance">
            Built for serious <em className="italic text-gold">diplomatic exchange</em> — not
            theatre.
          </h2>
        </div>
        <div className="lg:col-span-5 lg:pt-6">
          <p className="text-muted-foreground leading-relaxed">
            Each committee is convened with the rigour of a working forum. Delegates are expected to
            research deeply, write substantively, and negotiate with the posture of practitioners —
            not performers.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-y-3 text-sm">
            {["Research", "Negotiation", "Policy Writing", "International Relations"].map((p) => (
              <li key={p} className="flex items-center gap-3 text-foreground/90">
                <span className="h-px w-5 bg-gold" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-24 border-t hairline pt-12 grid grid-cols-1 gap-12 md:grid-cols-3">
        <Metric
          kicker="Duration"
          value="02"
          suffix="Days"
          caption="Two consecutive days of substantive debate."
        />
        <Metric
          kicker="Participation"
          value="800"
          prefix="₹"
          caption="A single delegate fee. Inclusive of all sessions."
        />
        <Metric
          kicker="Forums"
          value="04"
          suffix="Committees"
          caption="Hand-picked agendas across global and national bodies."
        />
      </div>
    </Section>
  );
}

function Metric({
  kicker,
  value,
  prefix,
  suffix,
  caption,
}: {
  kicker: string;
  value: string;
  prefix?: string;
  suffix?: string;
  caption: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const target = parseInt(value, 10);
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const dur = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);
  const padded = value.length === 2 ? n.toString().padStart(2, "0") : n.toString();
  return (
    <div ref={ref}>
      <div className="text-[10px] tracking-eyebrow uppercase text-gold">{kicker}</div>
      <div className="mt-4 flex items-baseline gap-2">
        {prefix && <span className="font-serif text-3xl text-foreground/70">{prefix}</span>}
        <span className="font-serif text-[clamp(3.5rem,7vw,6rem)] leading-none">{padded}</span>
        {suffix && (
          <span className="ml-2 text-xs tracking-eyebrow uppercase text-muted-foreground">
            {suffix}
          </span>
        )}
      </div>
      <p className="mt-4 max-w-xs text-sm text-muted-foreground">{caption}</p>
    </div>
  );
}

/* ---------- Committees ---------- */
const committees = [
  {
    no: "I",
    short: "UNDP",
    name: "United Nations Development Programme",
    agenda:
      "Sovereign debt restructuring and its consequences for development finance in the Global South.",
    description:
      "Delegates will examine the architecture of multilateral lending, conditionality, and the legitimacy of restructuring frameworks in an era of compounding crises.",
  },
  {
    no: "II",
    short: "UNGA",
    name: "United Nations General Assembly",
    agenda: "The militarisation of outer space and the future of the Outer Space Treaty regime.",
    description:
      "A plenary deliberation on dual-use technologies, anti-satellite capabilities, and the contours of a renewed framework for orbital governance.",
  },
  {
    no: "III",
    short: "WHO",
    name: "World Health Organization",
    agenda: "Pandemic preparedness and equitable access to medical countermeasures.",
    description:
      "From the Pandemic Accord to compulsory licensing — delegates will negotiate the instruments that determine who lives, and at what price.",
  },
  {
    no: "IV",
    short: "LS",
    name: "Lok Sabha",
    agenda:
      "Federalism, fiscal devolution, and the contested architecture of Indian cooperative governance.",
    description:
      "A simulation of the Lower House examining the constitutional and political dimensions of centre–state economic relations.",
  },
];

function Committees() {
  return (
    <Section id="committees" eyebrow="The Forums">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <h2 className="max-w-3xl font-serif text-[clamp(2.4rem,5vw,4.5rem)] leading-[1.02] tracking-tight text-balance">
          The diplomatic <em className="italic text-gold">centerpiece</em>.
        </h2>
        <p className="max-w-sm text-sm text-muted-foreground">
          Four committees. Four agendas authored with deliberate ambition — drawn from the most
          pressing questions in global and Indian governance.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-px bg-border md:grid-cols-2">
        {committees.map((c, i) => (
          <CommitteeCard key={c.short} c={c} index={i} />
        ))}
      </div>
    </Section>
  );
}

function CommitteeCard({ c, index }: { c: (typeof committees)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: (index % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-background p-10 md:p-14 transition-colors hover:bg-surface/40"
    >
      <div className="flex items-start justify-between gap-6">
        <div className="text-[11px] tracking-eyebrow uppercase text-muted-foreground">
          Committee · {c.no}
        </div>
        <span className="font-serif text-xl text-gold/70">{c.short}</span>
      </div>

      <h3 className="mt-8 font-serif text-[clamp(1.6rem,2.4vw,2.4rem)] leading-tight text-balance">
        {c.name}
      </h3>

      <div className="mt-8 border-t hairline pt-6">
        <div className="text-[10px] tracking-eyebrow uppercase text-gold/80">Agenda</div>
        <p className="mt-3 font-serif text-lg italic leading-snug text-foreground/90">
          &ldquo;{c.agenda}&rdquo;
        </p>
      </div>

      <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{c.description}</p>

      <div className="mt-10 flex items-center justify-between">
        <button className="group/btn inline-flex items-center gap-3 text-[11px] tracking-eyebrow uppercase text-foreground hover:text-gold transition-colors">
          Explore
          <span className="h-px w-8 bg-foreground transition-all group-hover/btn:w-14 group-hover/btn:bg-gold" />
        </button>
        <span className="font-mono text-[10px] text-muted-foreground/60">N° 0{index + 1} / 04</span>
      </div>
    </motion.article>
  );
}

/* ---------- Secretariat ---------- */
const leadership = [
  { role: "Secretary-General", name: "Aarav Reddy", img: sec1 },
  { role: "Director-General", name: "Ananya Kapoor", img: sec2 },
  { role: "Chargé d’Affaires", name: "Ishaan Mehta", img: sec3 },
  { role: "USG, Delegate Affairs", name: "Riya Subramanian", img: sec4 },
];

function Secretariat() {
  return (
    <Section id="secretariat" eyebrow="The Office">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 className="font-serif text-[clamp(2.4rem,5vw,4.5rem)] leading-[1.02] tracking-tight text-balance">
            The leadership of <em className="italic text-gold">HPSMUN 2026</em>.
          </h2>
          <p className="mt-8 max-w-md text-muted-foreground leading-relaxed">
            A secretariat drawn from accomplished delegates and chairs across India&rsquo;s most
            competitive circuits. Stewards of the conference&rsquo;s standard and tone.
          </p>
        </div>
        <div className="lg:col-span-7 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-2">
          {leadership.map((p, i) => (
            <SecCard key={p.role} p={p} i={i} />
          ))}
        </div>
      </div>
    </Section>
  );
}

function SecCard({ p, i }: { p: (typeof leadership)[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <motion.figure
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-surface">
        <img
          src={p.img}
          alt={p.name}
          loading="lazy"
          width={800}
          height={1000}
          className="h-full w-full object-cover grayscale transition-all duration-[1200ms] ease-out group-hover:grayscale-0 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      </div>
      <figcaption className="mt-5">
        <div className="text-[10px] tracking-eyebrow uppercase text-gold">{p.role}</div>
        <div className="mt-2 font-serif text-2xl">{p.name}</div>
      </figcaption>
    </motion.figure>
  );
}

/* ---------- Registration ---------- */
const pathway = [
  {
    n: "01",
    t: "Application",
    d: "Submit your delegate application with committee preferences and a brief statement of intent.",
  },
  {
    n: "02",
    t: "Allocation",
    d: "Receive your committee and portfolio. Background guides are dispatched on the day of allocation.",
  },
  {
    n: "03",
    t: "Confirmation",
    d: "Confirm participation with payment of the ₹800 delegate fee. A formal invitation follows.",
  },
  {
    n: "04",
    t: "Conference",
    d: "Convene at Hyderabad Public School, Warangal on 25–26 July 2026 for two days of substantive debate.",
  },
];

function Registration() {
  return (
    <Section id="registration" eyebrow="The Pathway">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 className="font-serif text-[clamp(2.4rem,5vw,4.5rem)] leading-[1.02] tracking-tight text-balance">
            Attend <em className="italic text-gold">HPSMUN 2026</em>.
          </h2>
          <dl className="mt-10 space-y-6 border-l hairline pl-6">
            <Row k="Dates" v="25 — 26 July 2026" />
            <Row k="Venue" v="Hyderabad Public School, Warangal" />
            <Row k="Delegate Fee" v="₹ 800 / delegate" />
            <Row k="Eligibility" v="Students, Grades IX — XII" />
          </dl>
          <a
            href="#"
            className="mt-10 inline-flex items-center gap-3 bg-gold px-7 py-4 text-[11px] tracking-eyebrow uppercase text-primary-foreground hover:bg-gold-soft transition-colors"
          >
            Open Application →
          </a>
        </div>
        <div className="lg:col-span-7">
          <ol className="relative space-y-12">
            <div className="absolute left-[14px] top-2 bottom-2 w-px bg-gradient-to-b from-gold via-border to-transparent" />
            {pathway.map((s, i) => (
              <motion.li
                key={s.n}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, delay: i * 0.08 }}
                className="relative pl-12"
              >
                <span className="absolute left-0 top-1 grid h-7 w-7 place-items-center rounded-full border hairline-strong bg-background font-mono text-[10px] text-gold">
                  {s.n}
                </span>
                <div className="font-serif text-2xl">{s.t}</div>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex flex-col gap-1">
      <dt className="text-[10px] tracking-eyebrow uppercase text-muted-foreground">{k}</dt>
      <dd className="font-serif text-xl text-foreground">{v}</dd>
    </div>
  );
}

/* ---------- Experience ---------- */
const pillars = [
  { t: "Research Excellence", d: "Substantive guides authored to demand depth, not summary." },
  {
    t: "Public Speaking",
    d: "Moderated caucuses calibrated for clarity, restraint, and persuasion.",
  },
  { t: "Networking", d: "A delegate body curated for substance — peers worth remembering." },
  {
    t: "Diplomatic Simulation",
    d: "Procedure honoured. Crisis introduced with intent, not spectacle.",
  },
  { t: "Leadership", d: "Bloc-building, drafting, and the quiet authorship of consensus." },
];

function Experience() {
  return (
    <Section eyebrow="The Return">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <h2 className="lg:col-span-5 font-serif text-[clamp(2.4rem,5vw,4.5rem)] leading-[1.02] tracking-tight text-balance">
          Why delegates <em className="italic text-gold">return</em>.
        </h2>
        <div className="lg:col-span-7">
          <ul className="divide-y hairline border-y hairline">
            {pillars.map((p, i) => (
              <motion.li
                key={p.t}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, delay: i * 0.05 }}
                className="group grid grid-cols-12 items-baseline gap-6 py-6 transition-colors hover:bg-surface/30"
              >
                <span className="col-span-2 font-mono text-[10px] text-gold">0{i + 1}</span>
                <span className="col-span-4 font-serif text-xl">{p.t}</span>
                <span className="col-span-6 text-sm text-muted-foreground">{p.d}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

/* ---------- Testimonials ---------- */
const quotes = [
  {
    q: "There was a discipline to HPSMUN&rsquo;s floor that I hadn&rsquo;t encountered elsewhere. The chairs read every paper. It changed how I prepare.",
    a: "Vedika Iyer",
    r: "Delegate · The Doon School",
  },
  {
    q: "Few conferences treat the rules of procedure as a craft. This one does — and it shows in the quality of the resolutions that emerge.",
    a: "Aryan Bhat",
    r: "Delegate · Mayo College",
  },
  {
    q: "An unusually serious convening for a school conference. I left with a notebook of policy, not a tote bag of stickers.",
    a: "Tara Menon",
    r: "Delegate · Cathedral & John Connon",
  },
];

function Testimonials() {
  return (
    <Section id="testimonials" eyebrow="In the Words">
      <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-3">
        {quotes.map((q, i) => (
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: i * 0.1 }}
            className="bg-background p-10 md:p-12"
          >
            <div className="font-serif text-5xl leading-none text-gold/60">&ldquo;</div>
            <blockquote
              className="mt-4 font-serif text-xl italic leading-snug text-foreground/95"
              dangerouslySetInnerHTML={{ __html: q.q }}
            />
            <figcaption className="mt-8 border-t hairline pt-5">
              <div className="text-sm">{q.a}</div>
              <div className="mt-1 text-[10px] tracking-eyebrow uppercase text-muted-foreground">
                {q.r}
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Venue ---------- */
function Venue() {
  return (
    <section id="venue" className="relative">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <Eyebrow label="The Venue" />
      </div>
      <div className="relative mt-12">
        <div className="relative aspect-[21/9] w-full overflow-hidden">
          <img
            src={venueImg}
            alt="Hyderabad Public School, Warangal at twilight"
            loading="lazy"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-transparent" />
        </div>

        <div className="mx-auto max-w-[1440px] px-6 md:px-12">
          <div className="-mt-32 md:-mt-48 relative grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 className="font-serif text-[clamp(2.4rem,5vw,4.5rem)] leading-[1.02] tracking-tight text-balance">
                Hyderabad Public School,
                <br />
                <em className="italic text-gold">Warangal</em>.
              </h2>
              <p className="mt-8 max-w-xl text-muted-foreground leading-relaxed">
                A historic campus of colonnaded halls and quiet, deliberate spaces — a fitting
                ground for an assembly that prizes contemplation as much as oratory.
              </p>
            </div>
            <div className="lg:col-span-5 lg:pt-10">
              <dl className="grid grid-cols-2 gap-y-6 border-t hairline pt-8">
                <div>
                  <dt className="text-[10px] tracking-eyebrow uppercase text-muted-foreground">
                    Established
                  </dt>
                  <dd className="mt-2 font-serif text-2xl">1923</dd>
                </div>
                <div>
                  <dt className="text-[10px] tracking-eyebrow uppercase text-muted-foreground">
                    City
                  </dt>
                  <dd className="mt-2 font-serif text-2xl">Warangal</dd>
                </div>
                <div>
                  <dt className="text-[10px] tracking-eyebrow uppercase text-muted-foreground">
                    State
                  </dt>
                  <dd className="mt-2 font-serif text-2xl">Telangana</dd>
                </div>
                <div>
                  <dt className="text-[10px] tracking-eyebrow uppercase text-muted-foreground">
                    Distinction
                  </dt>
                  <dd className="mt-2 font-serif text-2xl">Academic Heritage</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div className="h-24" />
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  const conferenceLinks = [
    { label: "Committees", href: "#committees" },
    { label: "Secretariat", href: "#secretariat" },
    { label: "Registration", href: "#registration" },
    { label: "Venue", href: "#venue" },
  ];
  const officeLinks = [
    { label: "Press", href: "#testimonials" },
    { label: "Partnerships", href: "mailto:partnerships@hpsmun.in" },
    { label: "Code of Conduct", href: "#standard" },
    { label: "Contact", href: "mailto:secretariat@hpsmun.in" },
  ];
  const correspondenceLinks = [
    { label: "secretariat@hpsmun.in", href: "mailto:secretariat@hpsmun.in" },
    { label: "press@hpsmun.in", href: "mailto:press@hpsmun.in" },
    { label: "+91 · · · · · · · ·", href: "#top" },
  ];

  return (
    <footer className="border-t hairline">
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <img
                src={hpsLogo}
                alt="The Hyderabad Public School, Warangal"
                className="h-9 w-9 rounded-full object-cover"
              />
              <div>
                <div className="font-serif text-xl">HPSMUN 2026</div>
                <div className="text-[10px] tracking-eyebrow uppercase text-muted-foreground">
                  Be Vigilant · MMXXVI
                </div>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm text-muted-foreground">
              An annual convening of the Hyderabad Public School Model United Nations Society,
              Warangal. Convened in the tradition of serious diplomatic exchange.
            </p>
          </div>

          <FooterCol title="Conference" items={conferenceLinks} />
          <FooterCol title="Office" items={officeLinks} />
          <FooterCol title="Correspondence" items={correspondenceLinks} />
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t hairline pt-8 md:flex-row md:items-center">
          <div className="text-[11px] tracking-eyebrow uppercase text-muted-foreground">
            © MMXXVI · HPSMUN · All rights reserved
          </div>
          <div className="text-[11px] tracking-eyebrow uppercase text-muted-foreground">
            Hyderabad Public School · Warangal · Telangana · India
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div className="md:col-span-2 lg:col-span-2 md:col-start-auto">
      <div className="text-[10px] tracking-eyebrow uppercase text-gold">{title}</div>
      <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="inline-flex items-center transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- Section primitives ---------- */
function Section({ id, eyebrow, children }: { id?: string; eyebrow: string; children: ReactNode }) {
  return (
    <section id={id} className="relative py-28 md:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <Eyebrow label={eyebrow} />
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

function Eyebrow({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-5">
      <span className="h-px w-12 bg-gold" />
      <span className="text-[10px] tracking-eyebrow uppercase text-gold">{label}</span>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}
