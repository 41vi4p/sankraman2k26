import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="gradient-orb orb-1" />
        <div className="gradient-orb orb-2" />
        <div className="gradient-orb orb-3" />
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="pulse-dot" />
            <span>Theme 2026: Sankraman</span>
          </div>
          <h1 className="hero-title">
            SANKRAMAN <span className="gradient-text">From Concept to Change.</span>
          </h1>
          <p className="hero-subtitle">
            Purposeful transition from idea to implementation. PRAKALP 2026 is designed as a live innovation
            pipeline where thought becomes design, design becomes execution, and execution creates social impact.
          </p>
          <p className="hero-tagline-line">Transition is not drift. It is deliberate movement.</p>
          <div className="hero-cta">
            <Link href="/register" className="btn-primary btn-large">
              <span>Enter Sankraman</span>
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
            <a href="#about" className="btn-secondary btn-large">
              View Theme Intent
            </a>
          </div>

          <div className="journey-pipeline" aria-label="Sankraman journey stages">
            <article className="journey-stage">
              <span className="stage-label">01</span>
              <h3>Ideation</h3>
              <p>Identify urgent problems and frame concepts with real-world relevance.</p>
            </article>
            <article className="journey-stage">
              <span className="stage-label">02</span>
              <h3>Design</h3>
              <p>Structure concepts into feasible, testable systems with intent.</p>
            </article>
            <article className="journey-stage">
              <span className="stage-label">03</span>
              <h3>Development</h3>
              <p>Build, refine, and iterate continuously until solutions become reliable.</p>
            </article>
            <article className="journey-stage">
              <span className="stage-label">04</span>
              <h3>Impact</h3>
              <p>Deliver measurable outcomes that move beyond prototypes.</p>
            </article>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <h3 className="stat-number">500+</h3>
              <p className="stat-label">Participants</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">10+</h3>
              <p className="stat-label">Events</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">₹1L+</h3>
              <p className="stat-label">Prize Pool</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
