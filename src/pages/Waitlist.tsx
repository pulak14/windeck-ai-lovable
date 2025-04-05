
import { useEffect } from 'react';

const Waitlist = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      // Cleanup if needed
      const tallyScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
      if (tallyScript) {
        document.body.removeChild(tallyScript);
      }
    };
  }, []);

  return (
    <div style={{ height: '100vh', overflow: 'hidden' }} className="bg-gray-50">
      <iframe
        data-tally-src="https://tally.so/r/wvzYVX?transparentBackground=1"
        width="100%"
        height="100%"
        frameBorder="0"
        title="Waitlist"
      ></iframe>
    </div>
  );
};

export default Waitlist;
