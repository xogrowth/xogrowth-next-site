import Head from 'next/head';
import { useState } from 'react';

// Define the tab data for the "How XO Growth Works" section.  Each tab
// describes a core capability offered by XO Growth.  Updating this
// array will automatically update both the tab labels and the
// associated content without any further changes in the JSX.
type Tab = {
  id: string;
  title: string;
  heading: string;
  text: string;
};

const tabs: Tab[] = [
  {
    id: 'chat',
    title: 'Chatting Copilot',
    heading: 'AI Chatting Copilot',
    text: 'Leverage an AI co‑pilot that assists with drafting, scheduling and personalising messages. Maintain genuine connections with fans while reducing manual effort.',
  },
  {
    id: 'automation',
    title: 'Automation',
    heading: 'Automated Workflows',
    text: 'Automate repetitive tasks like tipping, follow‑ups and content releases. Free up time to focus on creating high‑value experiences for your community.',
  },
  {
    id: 'access',
    title: 'Access Management',
    heading: 'Access & Team Roles',
    text: 'Assign roles and permissions to teammates, collaborators and partners. Control who can post, chat or access analytics while keeping your data secure.',
  },
  {
    id: 'analytics',
    title: 'Analytics',
    heading: 'Performance Analytics',
    text: 'Get actionable insights on subscriber growth, revenue and engagement. Make smarter decisions with data‑driven dashboards tailored for creators.',
  },
  {
    id: 'ai',
    title: 'AI Chatter',
    heading: 'AI‑Driven Engagement',
    text: 'Utilise cutting‑edge conversational AI to maintain personalised interactions at scale. Delight your audience with responsive, 24/7 engagement.',
  },
];

// Data for the services grid.  Each entry summarises a key offering or
// advantage provided by XO Growth.  When rendered, these entries
// appear in a responsive card layout with hover effects.
const services = [
  {
    title: 'Personalised Messaging',
    desc: 'AI‑assisted drafts and templates that retain your unique voice while saving time.',
  },
  {
    title: 'Automated Tipping',
    desc: 'Schedule and automate tips or content drops to keep your audience engaged and rewarded.',
  },
  {
    title: 'Role‑Based Access',
    desc: 'Invite managers or collaborators with custom permissions, ensuring security and control.',
  },
  {
    title: 'Advanced Analytics',
    desc: 'Visualise growth metrics, conversion rates and engagement trends in real time.',
  },
  {
    title: 'AI Engagement',
    desc: '24/7 conversational AI that nurtures relationships, frees your time and boosts loyalty.',
  },
  {
    title: 'Creator Success Team',
    desc: 'Dedicated human experts available to strategise, optimise and celebrate your wins.',
  },
];

// Metric cards to provide social proof.  Each entry contains a
// headline number and a label describing the achievement.  These cards
// reinforce trust and demonstrate the impact of XO Growth.
const metrics = [
  { number: '150+', label: 'Creators Scaled' },
  { number: '300%', label: 'Average Revenue Increase' },
  { number: '1M+', label: 'Messages Handled by AI' },
  { number: '24/7', label: 'Support and Engagement' },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const current = tabs.find((t) => t.id === activeTab)!;

  return (
    <>
      <Head>
        <title>XO Growth – OnlyFans Management Agency</title>
        <meta
          name="description"
          content="XO Growth: the baddie agency, built by women and scaled by AI. Elevate your brand with a modern management platform."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700;900&family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        {/* Hero section with parallax background */}
        <section className="hero">
          <div className="hero-content">
            <div className="hero-logo">XO Growth</div>
            <div className="hero-tagline">The Baddie Agency – Built by Women, Scaled by AI</div>
            <div className="hero-actions">
              <a href="#apply" className="btn primary btn-pulse">
                Start Your Project
              </a>
              <a href="#pricing" className="btn secondary">
                See Pricing
              </a>
            </div>
          </div>
        </section>

        {/* Intro section mirroring the poster call‑to‑action */}
        <section className="intro">
          <h2>Become a Baddie</h2>
          <p>
            Join our exclusive roster of creators and leverage the power of cutting‑edge tech to
            amplify your brand. Whether you’re new to the platform or scaling your empire, our team
            of experts and AI will elevate your growth.
          </p>
          <div className="intro-actions">
            <a href="#apply" className="btn primary">
              Apply Now
            </a>
            <a href="#demo" className="btn outline">
              Request a Demo
            </a>
          </div>
          <div className="labels">
            <span>Creators</span>
            <span className="dot" />
            <span>Agencies</span>
            <span className="dot" />
            <span>Managers</span>
          </div>
        </section>

        {/* How XO Growth Works section with interactive tabs */}
        <section className="how">
          <h2>How XO Growth Works</h2>
          <div className="tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={tab.id === activeTab ? 'tab active' : 'tab'}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.title}
              </button>
            ))}
          </div>
          <div className="panel">
            <h3>{current.heading}</h3>
            <p>{current.text}</p>
          </div>
        </section>

        {/* Services grid section */}
        <section className="services">
          <h2>Our Services</h2>
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.title} className="service-card">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Metrics and testimonial section */}
        <section className="metrics-section">
          <h2>By the Numbers</h2>
          <div className="metrics-grid">
            {metrics.map((metric) => (
              <div key={metric.label} className="metric-card">
                <div className="metric-number">{metric.number}</div>
                <div className="metric-label">{metric.label}</div>
              </div>
            ))}
          </div>
          <div className="testimonial">
            <p>
              “XO Growth transformed my creator journey. Their AI tools saved me hours every week,
              and the revenue growth has been phenomenal. The support team is incredible!”
            </p>
            <span className="testimonial-author">— Satisfied Creator</span>
          </div>
        </section>

        {/* Founder spotlight section */}
        <section className="founder">
          <div className="founder-photo">
            {/* The image is supplied via CSS background to keep markup clean */}
          </div>
          <div className="founder-blurb">
            <h2>Meet the Boss Lady</h2>
            <p>
              Affectionately known as “Special K,” our founder embodies the spirit of
              empowerment and sophistication. With a visionary approach to management and a keen eye
              for aesthetics, she leads XO Growth in championing creators worldwide.
            </p>
          </div>
        </section>

        {/* Final call to action */}
        <section className="cta-final">
          <h2>Ready to Scale?</h2>
          <p>
            Whether you’re an established creator looking to level up or just starting your journey,
            XO Growth offers the tools and support you need to thrive.
          </p>
          <div className="cta-actions">
            <a href="#apply" className="btn primary btn-pulse">
              Join the Movement
            </a>
            <a href="#learn" className="btn secondary">
              Learn More
            </a>
          </div>
        </section>
      </main>

      {/* Global and scoped styles */}
      <style jsx>{`
        :root {
          --bg: #0d0b0c;
          --panel: #161214;
          --ink: #efe7e6;
          --muted: #cdbfbb;
          --rose-light: #ffd1c4;
          --rose-mid: #f2a5b4;
          --rose-dark: #de8e80;
          --line: rgba(255, 255, 255, 0.12);
        }

        :global(body) {
          margin: 0;
          font-family: 'Inter', sans-serif;
          background: var(--bg);
          color: var(--ink);
          line-height: 1.6;
          scroll-behavior: smooth;
        }

        section {
          padding: 5rem 1.5rem;
        }

        h2 {
          margin: 0 0 1.5rem;
          font-family: 'Cinzel', serif;
          font-size: 2.5rem;
          font-weight: 900;
          text-align: center;
        }

        /* Hero */
        .hero {
          min-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: relative;
          background-image: linear-gradient(rgba(13, 11, 12, 0.6), rgba(13, 11, 12, 0.85)), url('/hero-baddies.jpg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          color: var(--ink);
        }
        .hero-logo {
          font-family: 'Cinzel', serif;
          font-size: 4rem;
          font-weight: 900;
          background: linear-gradient(135deg, var(--rose-light), var(--rose-mid), var(--rose-dark));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .hero-tagline {
          margin-top: 0.5rem;
          font-size: 1.25rem;
          letter-spacing: 0.1em;
          color: var(--muted);
        }
        .hero-actions {
          margin-top: 2rem;
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* Buttons */
        .btn {
          display: inline-block;
          padding: 0.75rem 1.75rem;
          border-radius: 9999px;
          font-weight: 700;
          text-decoration: none;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .primary {
          background: var(--rose-mid);
          color: #1a1416;
        }
        .secondary {
          background: #ffffff;
          color: #000000;
        }
        .outline {
          border: 2px solid var(--rose-mid);
          color: var(--rose-mid);
        }
        .btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
        }
        .btn-pulse {
          animation: pulse 2.5s infinite;
        }
        @keyframes pulse {
          0% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(242, 165, 180, 0.6);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 0 0 12px rgba(242, 165, 180, 0);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(242, 165, 180, 0);
          }
        }

        /* Intro */
        .intro {
          background: linear-gradient(180deg, #130f10, #0f0c0d);
          text-align: center;
          color: var(--ink);
        }
        .intro p {
          max-width: 700px;
          margin: 0 auto 1.5rem;
          color: var(--muted);
        }
        .intro-actions {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .labels {
          margin-top: 2rem;
          display: flex;
          gap: 0.75rem;
          justify-content: center;
          align-items: center;
          color: var(--muted);
          font-weight: 700;
          letter-spacing: 0.05em;
        }
        .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--rose-mid);
        }

        /* How section */
        .how {
          background: #0d0b0c;
          text-align: center;
        }
        .tabs {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 2rem;
        }
        .tab {
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--rose-mid);
          color: var(--rose-mid);
          font-weight: 700;
          transition: background 0.3s ease, transform 0.3s ease;
        }
        .tab:hover {
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.1);
        }
        .tab.active {
          background: var(--rose-mid);
          color: #1a1416;
        }
        .panel {
          max-width: 700px;
          margin: 0 auto;
          background: var(--panel);
          border: 1px solid var(--line);
          border-radius: 16px;
          padding: 2rem;
          text-align: left;
        }
        .panel h3 {
          margin-top: 0;
          font-size: 1.5rem;
          color: var(--rose-mid);
          font-family: 'Cinzel', serif;
        }
        .panel p {
          margin-bottom: 0;
          color: var(--muted);
        }

        /* Services */
        .services {
          background: linear-gradient(180deg, #0d0b0c, #0f0c0d, #0d0b0c);
          text-align: center;
        }
        .services-grid {
          display: grid;
          gap: 1.5rem;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          max-width: 1000px;
          margin: 0 auto;
        }
        .service-card {
          background: var(--panel);
          border: 1px solid var(--line);
          border-radius: 16px;
          padding: 1.5rem;
          text-align: left;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
        }
        .service-title {
          margin: 0 0 0.5rem;
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--rose-mid);
        }
        .service-desc {
          margin: 0;
          color: var(--muted);
        }

        /* Metrics */
        .metrics-section {
          background: #130f10;
          text-align: center;
        }
        .metrics-grid {
          display: grid;
          gap: 1.5rem;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          max-width: 800px;
          margin: 0 auto 2rem;
        }
        .metric-card {
          background: var(--panel);
          border: 1px solid var(--line);
          border-radius: 16px;
          padding: 2rem 1rem;
        }
        .metric-number {
          font-family: 'Cinzel', serif;
          font-size: 2rem;
          font-weight: 900;
          color: var(--rose-mid);
        }
        .metric-label {
          font-weight: 700;
          color: var(--muted);
        }
        .testimonial {
          max-width: 700px;
          margin: 0 auto;
          font-style: italic;
          color: var(--muted);
          font-size: 1rem;
        }
        .testimonial-author {
          display: block;
          margin-top: 0.5rem;
          color: var(--rose-mid);
          font-weight: 700;
        }

        /* Founder */
        .founder {
          background: #0f0c0d;
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          align-items: center;
          justify-content: center;
        }
        .founder-photo {
          width: 280px;
          height: 380px;
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid var(--line);
          background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(13, 11, 12, 0.6)), url('/specialk.png');
          background-size: cover;
          background-position: center;
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
        }
        .founder-blurb {
          max-width: 320px;
          background: rgba(13, 11, 12, 0.95);
          border: 1px solid var(--line);
          border-radius: 12px;
          padding: 1.5rem;
          color: var(--rose-light);
        }
        .founder-blurb h2 {
          margin-top: 0;
          color: var(--rose-mid);
          font-family: 'Cinzel', serif;
          font-size: 2rem;
        }
        .founder-blurb p {
          font-size: 1rem;
          color: var(--muted);
          margin-bottom: 0;
        }

        /* Final CTA */
        .cta-final {
          background: #130f10;
          text-align: center;
        }
        .cta-final p {
          max-width: 700px;
          margin: 0 auto 2rem;
          color: var(--muted);
        }
        .cta-actions {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
      `}</style>
    </>
  );
}
