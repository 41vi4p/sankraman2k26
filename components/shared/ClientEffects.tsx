'use client';

import { useEffect } from 'react';
import { ClickSpark } from '@/lib/clickSpark';

type ClientEffectsProps = {
  page: 'home' | 'register';
};

export default function ClientEffects({ page }: ClientEffectsProps) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.style.opacity = '1';
            target.style.transform = 'translateY(0)';
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const animated = document.querySelectorAll<HTMLElement>(
      '.about-card, .event-card, .benefit-item, .reward-card, .journey-stage'
    );

    animated.forEach((element) => {
      if (window.scrollY > element.offsetTop - window.innerHeight + 100) {
        return;
      }
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [page]);

  useEffect(() => {
    const sparks: ClickSpark[] = [];

    const primaryButtons = document.querySelectorAll<HTMLElement>('.btn-primary');
    primaryButtons.forEach((button) => {
      sparks.push(
        new ClickSpark(button, {
          sparkColor: '#ffffff',
          sparkSize: 12,
          sparkRadius: 20,
          sparkCount: 10,
          duration: 500,
          easing: 'ease-out',
          extraScale: 1.2
        })
      );
    });

    const secondaryButtons = document.querySelectorAll<HTMLElement>('.btn-secondary');
    secondaryButtons.forEach((button) => {
      sparks.push(
        new ClickSpark(button, {
          sparkColor: '#6495ed',
          sparkSize: 10,
          sparkRadius: 18,
          sparkCount: 8,
          duration: 450,
          easing: 'ease-out'
        })
      );
    });

    const cards = document.querySelectorAll<HTMLElement>('.about-card, .event-card, .reward-card');
    cards.forEach((card) => {
      sparks.push(
        new ClickSpark(card, {
          sparkColor: '#e6e6fa',
          sparkSize: 8,
          sparkRadius: 15,
          sparkCount: 6,
          duration: 400,
          easing: 'ease-out',
          extraScale: 0.8
        })
      );
    });

    const logo = document.querySelector<HTMLElement>('.logo');
    if (logo) {
      sparks.push(
        new ClickSpark(logo, {
          sparkColor: '#6495ed',
          sparkSize: 10,
          sparkRadius: 25,
          sparkCount: 12,
          duration: 600,
          easing: 'ease-out',
          extraScale: 1.5
        })
      );
    }

    return () => {
      sparks.forEach((spark) => spark.destroy());
    };
  }, [page]);

  useEffect(() => {
    const onError = (event: ErrorEvent) => {
      console.error('Global error:', event.error);
    };

    const onRejection = (event: PromiseRejectionEvent) => {
      console.error('Unhandled promise rejection:', event.reason);
    };

    window.addEventListener('error', onError);
    window.addEventListener('unhandledrejection', onRejection);

    return () => {
      window.removeEventListener('error', onError);
      window.removeEventListener('unhandledrejection', onRejection);
    };
  }, []);

  return null;
}
