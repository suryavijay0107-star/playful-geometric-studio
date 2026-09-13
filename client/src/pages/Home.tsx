import { useState } from "react";
import { ArrowUpRight, Check, ChevronDown, Circle, Menu, MoveRight, Sparkles, Star, X } from "lucide-react";

const features = [
  { number: "01", title: "Tokens with a point of view", body: "A tidy set of expressive variables for color, type, motion, radius, and the little details that make a system feel alive.", color: "lilac", icon: Sparkles },
  { number: "02", title: "Primitives that play well", body: "Buttons, cards, forms, and navigation that share one visual language—and get better every time you reuse them.", color: "butter", icon: Circle },
  { number: "03", title: "Motion with manners", body: "Bouncy when it helps, quiet when it matters. Every interaction is tuned for clarity, comfort, and keyboard confidence.", color: "mint", icon: Star },
];

const principles = ["Stable grid", "Wild decoration", "Clear hierarchy", "Human motion"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [copied, setCopied] = useState(false);

  const copyToken = () => {
    navigator.clipboard?.writeText("--pg-accent: #8B5CF6");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <main className="site-shell">
      <div className="announcement"><span className="announcement-dot" /> Playful Geometric is now in beta <a href="#principles">Meet the system <ArrowUpRight size={14} /></a></div>
      <nav className="nav container" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="Playful Geometric home"><span className="mark"><i /><i /><i /></span>playful<span className="wordmark-dot">.</span></a>
        <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          <a href="#system" onClick={() => setMenuOpen(false)}>System</a><a href="#principles" onClick={() => setMenuOpen(false)}>Principles</a><a href="#components" onClick={() => setMenuOpen(false)}>Components</a><a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
          <a className="nav-cta" href="#start" onClick={() => setMenuOpen(false)}>Start building <MoveRight size={16} /></a>
        </div>
        <button className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </nav>

      <section className="hero container" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-star">✳</span> A design system for bright ideas</div>
          <h1>Make room for<br /><em>more delight.</em></h1>
          <p className="hero-lede">Playful Geometric is a warm, expressive UI system for teams who believe useful can also be unforgettable.</p>
          <div className="hero-actions"><a className="button button-primary" href="#system">Explore the system <ArrowUpRight size={17} /></a><a className="text-link" href="#principles">See the thinking <MoveRight size={17} /></a></div>
          <div className="hero-proof"><div className="avatar-stack"><span>AM</span><span>JR</span><span>SL</span><span className="avatar-more">+</span></div><span>Made for curious teams<br /><strong>from first sketch to final pixel</strong></span></div>
        </div>
        <div className="hero-art" aria-label="Decorative geometric composition">
          <div className="art-grid" /><div className="art-sun" /><div className="art-blob" /><div className="art-ring" /><div className="art-spark spark-one">✦</div><div className="art-spark spark-two">✳</div><div className="art-label label-one">fresh thinking</div><div className="art-label label-two">good energy</div>
          <div className="art-card"><span className="mini-label">TODAY'S NOTE</span><strong>Keep it human.</strong><span className="card-line" /><span className="mini-label">01 / 04</span></div>
        </div>
      </section>

      <div className="ticker"><div className="ticker-track"><span>DESIGN WITH JOY</span><b>✳</b><span>BUILD WITH CARE</span><b>✦</b><span>MAKE IT MEMORABLE</span><b>●</b><span>DESIGN WITH JOY</span><b>✳</b><span>BUILD WITH CARE</span></div></div>

      <section className="section container" id="system">
        <div className="section-heading"><div><span className="kicker">01 / THE SYSTEM</span><h2>Order on the inside.<br /><em>Energy on the outside.</em></h2></div><p>One flexible foundation. Infinite ways to make it yours. Built for products that want to feel like people made them.</p></div>
        <div className="feature-grid">{features.map(({ number, title, body, color, icon: Icon }) => <article className={`feature-card ${color}`} key={number}><div className="feature-top"><span className="feature-number">{number}</span><span className="feature-icon"><Icon size={21} /></span></div><h3>{title}</h3><p>{body}</p><a href="#start" className="round-arrow" aria-label={`Learn more about ${title}`}><ArrowUpRight size={18} /></a></article>)}</div>
      </section>

      <section className="principles-section" id="principles"><div className="container principles-wrap"><div className="principles-copy"><span className="kicker">02 / THE PHILOSOPHY</span><h2>Let the grid<br />hold the <em>joy.</em></h2><p>The best interfaces know when to be quiet. We keep the structure steady so personality can roam free.</p><a className="button button-dark" href="#components">Explore the principles <MoveRight size={17} /></a></div><div className="principles-orbit"><div className="orbit-center">PG<span>✳</span></div>{principles.map((item, index) => <div className={`orbit-tag orbit-${index + 1}`} key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</div>)}<div className="orbit-star">✦</div></div></div></section>

      <section className="section components-section container" id="components"><div className="section-heading compact"><div><span className="kicker">03 / THE TOOLKIT</span><h2>Small pieces.<br /><em>Big personality.</em></h2></div><button className="token-chip" onClick={copyToken}>{copied ? <><Check size={15} /> Copied!</> : <><span className="token-dot" /> --pg-accent: #8B5CF6</>}</button></div><div className="component-showcase"><div className="showcase-label">A TINY TASTE OF THE SYSTEM</div><div className="showcase-inner"><div className="sample-buttons"><span className="sample-caption">CANDY BUTTONS</span><button className="button button-primary">Primary action <ArrowUpRight size={16} /></button><button className="button button-pink">A little sparkle <Sparkles size={16} /></button><button className="button button-outline">Maybe later</button></div><div className="sample-card"><span className="mini-label">STICKER CARD</span><h3>Good things<br /><em>take shape.</em></h3><div className="sample-shapes"><span /><span /><span /></div><span className="card-footer">A friendly reminder / 2024</span></div></div></div></section>

      <section className="faq-section" id="faq"><div className="container faq-layout"><div><span className="kicker">04 / QUESTIONS</span><h2>Curious minds<br /><em>ask better.</em></h2><p>Everything you need to know before bringing a little more character to your product.</p></div><div className="faq-list">{["Is Playful Geometric a UI kit or a full design system?", "Can I use it with my existing codebase?", "How does it handle accessibility and reduced motion?", "Where do I start?"] .map((question, index) => <div className={`faq-item ${activeFaq === index ? "active" : ""}`} key={question}><button onClick={() => setActiveFaq(activeFaq === index ? null : index)} aria-expanded={activeFaq === index}><span>{question}</span><ChevronDown size={20} /></button>{activeFaq === index && <p>{index === 0 ? "It is both: a considered set of tokens and patterns, plus the thinking to help your team use them with intention." : index === 1 ? "Absolutely. The system is framework-agnostic and designed to layer onto the tools your team already trusts." : index === 2 ? "Accessibility is a baseline, not a bonus. Every pattern includes visible focus, semantic structure, and reduced-motion guidance." : "Start with the principles, pick a token, and make one small delightful thing. The rest tends to follow."}</p>}</div>)}</div></div></section>

      <section className="cta-section container" id="start"><div className="cta-shape shape-left" /><div className="cta-shape shape-right" /><span className="eyebrow"><span className="eyebrow-star">✳</span> Ready when you are</span><h2>Build something<br /><em>worth smiling at.</em></h2><p>The system is open. Your next idea is waiting.</p><a className="button button-dark" href="mailto:hello@playful.geometric">Say hello <ArrowUpRight size={17} /></a></section>

      <footer className="footer container"><a className="wordmark" href="#top"><span className="mark"><i /><i /><i /></span>playful<span className="wordmark-dot">.</span></a><span>© 2024 Playful Geometric</span><div><a href="#system">System</a><a href="#principles">Principles</a><a href="mailto:hello@playful.geometric">Contact</a></div></footer>
    </main>
  );
}

export function App() { return <Home />; }

// Keep the component export intentionally simple for the static scaffold.
void App;
