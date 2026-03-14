import Image from 'next/image';
import Link from 'next/link';

type FooterProps = {
  homeMode?: boolean;
};

export default function Footer({ homeMode = false }: FooterProps) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>PRAKALP 2026</h3>
            <p>Organized by IEEExCRCE</p>
            <p className="footer-tagline">Innovate • Collaborate • Excel</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link href={homeMode ? '#home' : '/'}>Home</Link>
              </li>
              <li>
                <Link href={homeMode ? '#about' : '/#about'}>About</Link>
              </li>
              <li>
                <Link href={homeMode ? '#events' : '/#events'}>Events</Link>
              </li>
              <li>
                <Link href={homeMode ? '#benefits' : '/#benefits'}>Benefits</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <ul className="footer-links">
              <li>Email: ieeecrce.24@gmail.com</li>
              <li>Phone: +91 7977316406</li>
              <li>Location: CRCE, Mumbai</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/company/ieeexcrce/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Image
                  src="/assets/images/icons8-linkedin-48.png"
                  alt="LinkedIn"
                  width={30}
                  height={30}
                />
              </a>
              <a
                href="https://www.instagram.com/ieee_crce?igsh=MXVsbzBjazdicDQ4OQ=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Image
                  src="/assets/images/icons8-instagram-50.png"
                  alt="Instagram"
                  width={30}
                  height={30}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 PRAKALP - IEEExCRCE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
