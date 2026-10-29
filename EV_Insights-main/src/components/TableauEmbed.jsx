import { useEffect, useState } from 'react';

// Embeds a Tableau Public view in an iframe with loading and fallback states.
// An iframe cannot report cross-origin load errors, so a timeout is used to
// show a helpful hint if the view has not finished loading.
export default function TableauEmbed({ title, embedUrl, publicUrl, height }) {
  const [loaded, setLoaded] = useState(false);
  const [slow, setSlow] = useState(false);

  useEffect(() => {
    setLoaded(false);
    setSlow(false);
    const t = setTimeout(() => setSlow(true), 12000);
    return () => clearTimeout(t);
  }, [embedUrl]);

  return (
    <div className="embed" style={{ '--embed-h': `${height}px` }}>
      {!loaded && (
        <div className="embed-status" role="status">
          <span className="spinner" aria-hidden="true" />
          <p>Loading {title} from Tableau Public…</p>
          {slow && (
            <p className="muted">
              This is taking longer than expected. Check your connection, or{' '}
              <a href={publicUrl} target="_blank" rel="noopener noreferrer">open it directly on Tableau Public</a>.
            </p>
          )}
        </div>
      )}
      <iframe
        title={title}
        src={embedUrl}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        allowFullScreen
      />
    </div>
  );
}
