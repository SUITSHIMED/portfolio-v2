interface PhoneMockupProps {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
}

/**
 * PhoneMockup — a refined phone frame tuned to the screenshot ratio (0.45).
 */
function PhoneMockup({ src, alt, className = "", eager = false }: PhoneMockupProps) {
  return (
    <div className={`phone-frame ${className}`}>
      <div className="phone-screen">
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

export default PhoneMockup;
