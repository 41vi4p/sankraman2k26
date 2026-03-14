'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function RegisterNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="navbar" style={{ boxShadow: scrolled ? '0 12px 28px rgba(6, 2, 15, 0.42)' : 'none' }}>
      <div className="container">
        <div className="nav-content">
          <div className="logo">
            <h1>
              PRAKALP<span className="year">2026</span>
            </h1>
            <p className="tagline">by IEEExCRCE</p>
          </div>
          <div className="nav-links">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/#about" className="nav-link">
              About
            </Link>
            <Link href="/#events" className="nav-link">
              Events
            </Link>
            <Link href="/#benefits" className="nav-link">
              Benefits
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
