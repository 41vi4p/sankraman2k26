const events = [
  {
    number: '01',
    title: 'Project Competition',
    description:
      'Showcase your innovative solutions for real-world problems. Team up and compete for the grand prize.',
    metaA: '24 Hours',
    metaB: 'Team Event'
  },
  {
    number: '02',
    title: 'Technical Quiz',
    description:
      'Test your knowledge across various domains including programming, algorithms, data structures, and emerging technologies.',
    metaA: '2 Rounds',
    metaB: 'Individual'
  },
  {
    number: '03',
    title: 'Project Exhibition',
    description:
      'Showcase your innovative projects and prototypes. Get feedback from industry experts and win exciting prizes.',
    metaA: 'Full Day',
    metaB: 'Team/Solo'
  },
  {
    number: '04',
    title: 'Workshops',
    description:
      'Learn from industry professionals through hands-on workshops covering cutting-edge technologies and best practices.',
    metaA: '3 Hours',
    metaB: 'All Levels'
  }
];

export default function EventsSection() {
  return (
    <section className="section section-dark" id="events">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">What's Happening</span>
          <h2 className="section-title">Event Highlights</h2>
          <p className="section-subtitle">Diverse competitions and activities for every tech enthusiast</p>
        </div>
        <div className="events-grid">
          {events.map((event) => (
            <div className="event-card" key={event.number}>
              <div className="event-number">{event.number}</div>
              <h3 className="event-title">{event.title}</h3>
              <p className="event-description">{event.description}</p>
              <div className="event-meta">
                <span className="meta-item">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path d="M8 5V8L10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  {event.metaA}
                </span>
                <span className="meta-item">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M12 2H4C2.89543 2 2 2.89543 2 4V12C2 13.1046 2.89543 14 4 14H12C13.1046 14 14 13.1046 14 12V4C14 2.89543 13.1046 2 12 2Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path d="M2 6H14" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                  {event.metaB}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
