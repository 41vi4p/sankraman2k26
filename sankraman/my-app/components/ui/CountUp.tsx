"use client";

import { useEffect, useRef } from "react";
import { animate } from "animejs";

interface CountUpProps {
  /** The final number to count up to */
  target: number;
  /** Animation duration in ms. Default 1800 */
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function CountUp({
  target,
  duration = 1800,
  className,
  style,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          observer.disconnect();

          // anime.js v4: animate a plain proxy object, read .value in onUpdate
          const proxy = { value: 0 };

          animate(proxy, {
            value: target,
            duration,
            ease: "outExpo",
            onUpdate: () => {
              if (el) {
                el.textContent = Math.round(proxy.value).toString();
              }
            },
            onComplete: () => {
              // Guarantee the final value is pixel-perfect
              if (el) el.textContent = target.toString();
            },
          });
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref} className={className} style={style}>
      0
    </span>
  );
}
