interface BrowserMockupProps {
  src: string;
  alt: string;
  url?: string;
  className?: string;
  eager?: boolean;
  aspect?: string;
}

/**
 * BrowserMockup — a desktop browser window frame for landscape screenshots.
 */
function BrowserMockup({
  src,
  alt,
  url = "mohamedalkhrouf.dev",
  className = "",
  eager = false,
  aspect = "aspect-[946/602]",
}: BrowserMockupProps) {
  return (
    <div className={`browser-frame ${className}`}>
      <div className="browser-bar">
        <span className="browser-dot" />
        <span className="browser-dot" />
        <span className="browser-dot" />
        <div className="browser-url">
          <span>{url}</span>
        </div>
      </div>
      <div className={`browser-body ${aspect}`}>
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
        />
      </div>
    </div>
  );
}

export default BrowserMockup;
