
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <Helmet>
      <title>WinDeck | AI-powered proposal generator</title>
      <meta name="description" content="WinDeck helps freelancers and agencies create persuasive proposal decks in minutes — powered by AI." />
      <meta property="og:title" content="WinDeck | AI-powered proposal generator" />
      <meta property="og:description" content="Transform client discovery notes into polished proposals in minutes." />
      <meta property="og:image" content="/assets/og-windeck.jpg" />
      <meta property="og:url" content="https://windeck.com" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href="https://windeck.com" />
    </Helmet>
    <App />
  </HelmetProvider>
);

