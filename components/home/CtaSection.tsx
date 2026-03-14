import Link from 'next/link';

export default function CtaSection() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Join PRAKALP 2026?</h2>
          <p className="cta-subtitle">
            Don't miss this opportunity to showcase your skills, learn from experts, and win exciting prizes
          </p>
          <Link href="/register" className="btn-primary btn-large">
            <span>Register for PRAKALP</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M7.5 15L12.5 10L7.5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <p className="cta-note">Limited slots available</p>
        </div>
      </div>
    </section>
  );
}
