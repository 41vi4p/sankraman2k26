const benefits = [
  {
    icon: 'I',
    title: 'Recognition',
    description: 'Gain recognition for your skills and achievements with certificates and awards'
  },
  {
    icon: 'II',
    title: 'Networking',
    description: 'Connect with industry professionals, mentors, and fellow tech enthusiasts'
  },
  {
    icon: 'III',
    title: 'Learning',
    description: 'Enhance your technical skills through workshops and hands-on challenges'
  },
  {
    icon: 'IV',
    title: 'Innovation',
    description: 'Work on real-world problems and develop innovative solutions'
  },
  {
    icon: 'V',
    title: 'Career Growth',
    description: 'Boost your resume and get opportunities for internships and placements'
  },
  {
    icon: 'VI',
    title: 'Prizes',
    description: 'Win exciting prizes, goodies, and cash rewards worth lakhs'
  }
];

export default function BenefitsSection() {
  return (
    <section className="section" id="benefits">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Why Participate</span>
          <h2 className="section-title">Event Benefits</h2>
          <p className="section-subtitle">What you'll gain from participating in PRAKALP</p>
        </div>
        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <div className="benefit-item" key={benefit.title}>
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
