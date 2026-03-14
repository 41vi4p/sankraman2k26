export default function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Overview</span>
          <h2 className="section-title">About PRAKALP</h2>
          <p className="section-subtitle">
            A kinetic innovation journey where concepts are engineered into change.
          </p>
        </div>
        <div className="about-content">
          <div className="about-card">
            <div className="card-icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path
                  d="M20 5L25 15H35L27.5 22.5L30 32.5L20 27.5L10 32.5L12.5 22.5L5 15H15L20 5Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3>Vision</h3>
            <p>
              PRAKALP is a flagship technical event designed to inspire innovation and foster collaboration among
              tech enthusiasts, students, and professionals.
            </p>
          </div>
          <div className="about-card">
            <div className="card-icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path
                  d="M20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path d="M20 15V20L25 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <h3>Opportunity</h3>
            <p>
              Participate in challenging competitions, workshops, and networking sessions designed to expand your
              technical skills and professional network.
            </p>
          </div>
          <div className="about-card">
            <div className="card-icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path
                  d="M35 20L20 5L5 20M10 20V32.5C10 33.163 10.2634 33.7989 10.7322 34.2678C11.2011 34.7366 11.837 35 12.5 35H27.5C28.163 35 28.7989 34.7366 29.2678 34.2678C29.7366 33.7989 30 33.163 30 32.5V20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3>Community</h3>
            <p>
              Join a vibrant community of innovators, collaborate with like-minded individuals, and build lasting
              connections in the tech industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
