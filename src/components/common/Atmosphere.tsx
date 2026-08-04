/**
 * Atmosphere — the fixed, non-interactive layer behind all content.
 * Grid + soft drifting glows. Noise is a separate overlay with higher z-index.
 */
function Atmosphere() {
  return (
    <>
      <div className="atmosphere-grid" aria-hidden="true" />
      <div className="atmosphere-glow atmosphere-glow--a" aria-hidden="true" />
      <div className="atmosphere-glow atmosphere-glow--b" aria-hidden="true" />
      <div className="atmosphere-glow atmosphere-glow--c" aria-hidden="true" />
    </>
  );
}

export default Atmosphere;
