import Head from 'next/head';
import { useState } from 'react';

export type Tab = {
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
    text: 'Converse effortlessly with your customers and team using our AI‑powered assistant that understands context and keeps the conversation flowing.'
  },
  {
    id: 'automation',
    title: 'Automation',
    heading: 'Marketing Automation',
    text: 'Streamline your workflows with intelligent automation. From scheduling posts to sending targeted messages, we handle the busy work so you can focus on growth.'
  },
  {
    id: 'access',
    title: 'Access Management',
    heading: 'VIP Access Management',
    text: 'Control membership tiers and exclusive content with ease. Our access tools help you create VIP experiences that keep fans engaged and loyal.'
  },
  {
    id: 'analytics',
    title: 'Analytics',
    heading: 'Insights & Analytics',
    text: 'Make data‑driven decisions with dashboards that surface the metrics that matter. Track engagement, revenue and growth in real time.'
  },
  {
    id: 'ai',
    title: 'AI Chatter',
    heading: 'AI Chatter & Recommendations',
    text: 'Let our recommendation engine delight your audience with personalized suggestions, AI‑generated content ideas and trend forecasts.'
  }
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);
  const current = tabs.find(tab => tab.id === activeTab) || tabs[0];

  return (
    <>
      <Head>
        <title>XO Growth — AI Growth Platform</title>
        <meta name="description" content="Discover how XO Growth accelerates your business with AI." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>
      <section className="hero">
        <h1>XO Growth</h1>
        <p>Elevate your brand with AI‑powered growth solutions.</p>
        <div className="actions">
          <a href="#" className="btn primary">Start Your Project</a>
          <a href="#" className="btn secondary">See Pricing</a>
        </div>
      </section>
      <section className="how">
        <h2>How XO Growth Works</h2>
        <div className="tabs">
          {tabs.map(tab => (
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
      <style jsx>{`
        :root {
          --bg: #0f0c29;
          --bg2: #302b63;
          --bg3: #24243e;
          --primary: #ff6ec7;
          --secondary: #8a71fa;
          --text-light: #ffffff;
          --text-muted: #d1d1e0;
        }
        * {
          box-sizing: border-box;
        }
      {     :global(body)          margin: 0;
          font-family: 'Inter', sans-serif;
          background: linear-gradient(135deg, var(--bg), var(--bg2), var(--bg3));
          color: var(--text-light);
}

        }
        section {
          padding: 4rem 2rem;
        }
        .hero {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          min-height: 70vh;
          justify-content: center;
          background: linear-gradient(135deg, var(--bg), var(--bg2), var(--bg3));
          color: var(--text-light);
        }
        .hero h1 {
          font-size: 3rem;
          font-weight: 700;
          margin: 0 0 1rem;
        }
        .hero p {
          font-size: 1.25rem;
          margin-bottom: 2rem;
          max-width: 600px;
        }
        .actions {
          display: flex;
          gap: 1rem;
        }
        .btn {
          padding: 0.75rem 1.5rem;
          border-radius: 9999px;
          font-weight: 600;
          text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .btn.primary {
          background: var(--primary);
          color: #000;
        }
        .btn.secondary {
          background: var(--secondary);
          color: #fff;
        }
        .btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        }
        .how {
          max-width: 800px;
          margin: 0 auto;
        }
        .how h2 {
          text-align: center;
          font-size: 2rem;
          margin-bottom: 2rem;
        }
        .tabs {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }
        .tab {
          padding: 0.5rem 1rem;
          border: none;
          background: transparent;
          color: var(--text-muted);
          border-bottom: 2px solid transparent;
          cursor: pointer;
          transition: color 0.2s ease, border-color 0.2s ease;
        }
        .tab:hover {
          color: var(--text-light);
        }
        .tab.active {
          color: var(--primary);
          border-color: var(--primary);
        }
        .panel {
          background: rgba(255,255,255,0.05);
          padding: 2rem;
          border-radius: 1rem;
          backdrop-filter: blur(5px);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .panel h3 {
          margin-top: 0;
          font-size: 1.5rem;
        }
        .panel p {
          margin-bottom: 0;
          line-height: 1.6;
          color: var(--text-muted);
        }
        @media (max-width: 600px) {
          .hero h1 {
            font-size: 2.25rem;
          }
          .panel {
            padding: 1.5rem;
          }
        }
      `}</style>
    </>
  );
}
