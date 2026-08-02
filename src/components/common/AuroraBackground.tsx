/**
 * AuroraBackground — Full-page animated gradient blobs.
 * Pure CSS animations, no canvas. z-index: 0, pointer-events: none.
 * Sits behind all page content.
 */
function AuroraBackground() {
  return (
    <div className="aurora-container" aria-hidden="true">
      <div className="aurora-blob aurora-blob--1" />
      <div className="aurora-blob aurora-blob--2" />
      <div className="aurora-blob aurora-blob--3" />
      <div className="aurora-blob aurora-blob--4" />
    </div>
  );
}

export default AuroraBackground;
