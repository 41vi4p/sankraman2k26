import Image from 'next/image';

const sponsors = ['Google', 'Microsoft', 'Amazon', 'Intel', 'IBM', 'Oracle', 'Cisco', 'Adobe'];

export default function SponsorsSection() {
  const looped = [...sponsors, ...sponsors];

  return (
    <section className="section" id="sponsors">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Our Partners</span>
          <h2 className="section-title">Sponsored By</h2>
          <p className="section-subtitle">Supported by industry leaders and innovators</p>
        </div>

        <div className="logo-slider">
          <div className="logo-track">
            {looped.map((name, index) => (
              <div className="slide" key={`${name}-${index}`}>
                <Image
                  src={`https://placehold.co/200x80?text=${encodeURIComponent(name)}`}
                  alt={name}
                  width={200}
                  height={80}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
