'use client';

import Link from 'next/link';
import type { MouseEvent } from 'react';
import { useEffect, useState } from 'react';

function trackEvent(eventName: string, eventData: Record<string, string>) {
  console.log('Event tracked:', eventName, eventData);
}

export default function HomeNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const onAnchorClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
    label: string
  ) => {
    event.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      trackEvent('nav_click', { link_text: label, link_href: href });
    }
    setMobileOpen(false);
  };

  return (
    <nav className="navbar" style={{ boxShadow: scrolled ? '0 12px 28px rgba(6, 2, 15, 0.42)' : 'none' }}>
      <div className="container">
        <div className="nav-content">
          <div className="logo">
            <h1>
              PRAKALP<span className="year">2026</span>
            </h1>
            <p className="tagline">SANKRAMAN by IEEExCRCE</p>
          </div>
          <div className={`nav-links${mobileOpen ? ' mobile-open' : ''}`}>
            <a href="#about" className="nav-link" onClick={(e) => onAnchorClick(e, '#about', 'About')}>
              About
            </a>
            <a href="#events" className="nav-link" onClick={(e) => onAnchorClick(e, '#events', 'Events')}>
              Events
            </a>
            <a
              href="#benefits"
              className="nav-link"
              onClick={(e) => onAnchorClick(e, '#benefits', 'Benefits')}
            >
              Benefits
            </a>
            <a
              href="#rewards"
              className="nav-link"
              onClick={(e) => onAnchorClick(e, '#rewards', 'Rewards')}
            >
              Rewards
            </a>
            <Link
              href="/register"
              className="btn-primary"
              onClick={() => trackEvent('register_click', { button_location: 'navbar' })}
            >
              Register Now
            </Link>
          </div>
          <button
            type="button"
            className="mobile-menu-toggle"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  );
}
