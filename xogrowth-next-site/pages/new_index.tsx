import Head from 'next/head';
import { useState } from 'react';

// Define a simple Tab type for our "How it Works" section. Each tab has an
// identifier, a visible title, a heading and descriptive text. Updating
// this array will automatically update the UI without any further changes.
type Tab = {
  id: string;
  title: string;
  heading: string;
  text: string;
};

// Data for the various tabs. Feel free to adjust the headings and copy to
// better reflect the services XO Growth provides. The order in this array
// determines the order in the UI.
const tabs: Tab[] = [
  {
    id: 'chat',
    title: 'Chatting Copilot',
    heading: 'AI Chatting Copilot',
    text:
      'Leverage an AI co‑pilot that assists with drafting, scheduling and personalising messages. Maintain genuine connections with fans while reducing manual effort.',
  },
  {
    id: 'automation',
    title: 'Automation',
    heading: 'Automated Workflows',
    text:
      'Automate repetitive tasks like tipping, follow‑ups and content releases. Free up time to focus on creating high‑value experiences for your community.',
  },
  {
    id: 'access',
    title: 'Access Management',
    heading: 'Access & Team Roles',
    text:
      'Assign roles and permissions to teammates, collaborators and partners. Control who can post, chat or access analytics while keeping your data secure.',
  },
  {
    id: 'analytics',
    title: 'Analytics',
    heading: 'Performance Analytics',
    text:
      'Get actionable insights on subscriber growth, revenue and engagement. Make smarter decisions with data‑driven dashboards tailored for creators.',
  },
  {
    id: 'ai',
    title: 'AI Chatter',
    heading: 'AI‑Driven Engagement',
    text:
      'Utilise cutting‑edge conversational AI to maintain personalised interactions at scale. Delight your audience with responsive, 24/7 engagement.',
  },
];

export default function Home() {
  // Keep track of which tab is active. Initialise to the first tab in the array.
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1>XO Growth</h1>
            <p>
              Elevate your brand with AI‑powered growth solutions. Built by women and scaled by
              artificial intelligence.
            </p>
            <div className="actions">
              <a href="#" className="btn primary">
                Start Your Project
              </a>
              <a href="#" className="btn secondary">
                See Pricing
              </a>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
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

        {/* Founder Section */}
        <section className="founder">
          <div className="founder-img" />
          <div className="founder-text">
            <h2>Meet Our Founder</h2>
            <p>
              Known affectionately as “Special K,” our founder brings bold leadership and an unwavering
              commitment to excellence. With a keen eye for aesthetics and a passion for community
              empowerment, she ensures that every creator working with XO Growth receives bespoke
              support and strategic guidance.
            </p>
          </div>
        </section>
      </main>

      {/* Scoped styles for this page. The global variables define the colour palette pulled
          from the original mock‑up: dark cocoa backgrounds with rose‑gold highlights. */}
      <style jsx>{`
        :root {
          --bg: #0d0b0c;
          --bg2: #302124;
          --bg3: #29202a;
          --primary: #f2a5b4;
          --secondary: #de8e80;
          --text-light: #ffffff;
          --text-muted: #d1c5c8;
        }

        * {
          box-sizing: border-box;
        }

        :global(body) {
          margin: 0;
          font-family: 'Inter', sans-serif;
          background: var(--bg);
          color: var(--text-light);
        }

        section {
          padding: 4rem 2rem;
        }

        .hero {
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          min-height: 80vh;
          /* Parallax background: dark overlay on top of the uploaded hero image */
          background-image: linear-gradient(
              rgba(13, 11, 12, 0.7),
              rgba(13, 11, 12, 0.85)
            ),
            url('/hero-baddies.jpg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }

        .hero-content h1 {
          font-size: 4rem;
          font-weight: 700;
          margin: 0 0 1rem;
        }

        .hero-content p {
          font-size: 1.5rem;
          margin-bottom: 2rem;
          max-width: 600px;
        }

        .actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn {
          padding: 0.75rem 1.75rem;
          border-radius: 9999px;
          font-weight: 600;
          text-decoration: none;
          border: 2px solid transparent;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .btn.primary {
          background: linear-gradient(45deg, var(--primary), var(--secondary));
          color: var(--bg);
        }

        .btn.secondary {
          background: transparent;
          border-color: var(--primary);
          color: var(--primary);
        }

        .btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        }

        .how {
          background: var(--bg2);
          text-align: center;
        }

        .how h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .tabs {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .tab {
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          background: var(--bg3);
          color: var(--text-light);
          border: none;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.3s ease;
        }

        .tab:hover {
          background: var(--primary);
          color: var(--bg);
          transform: translateY(-2px);
        }

        .tab.active {
          background: var(--primary);
          color: var(--bg);
        }

        .panel {
          max-width: 700px;
          margin: 0 auto;
          text-align: left;
          background: var(--bg);
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.4);
        }

        .panel h3 {
          margin-top: 0;
        }

        .founder {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 2rem;
          background: var(--bg3);
          border-radius: 1rem;
        }

        .founder-img {
          flex: 1;
          min-width: 280px;
          min-height: 400px;
          background-image: url('/specialk.png');
          background-size: cover;
          background-position: center;
          border-radius: 1rem;
        }

        .founder-text {
          flex: 2;
          min-width: 280px;
        }

        .founder-text h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .founder-text p {
          font-size: 1.25rem;
          line-height: 1.6;
          color: var(--text-muted);
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 3rem;
          }
          .hero-content p {
            font-size: 1.25rem;
          }
          .founder {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </>
  );
}