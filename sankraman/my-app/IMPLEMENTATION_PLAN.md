# SANKRAMAN / PRAKALP 4.0 - Animation Enhancement Plan

## Project Overview
Event promotional website for PRAKALP 4.0, a national-level project competition by IEEE-WIE and Project Cell, CRCE.
- **Theme**: Dune-inspired sci-fi aesthetic with desert/sand motifs
- **Stack**: Next.js 16 + React 19 + TypeScript + Tailwind CSS v4
- **Animation Libraries**: anime.js 4.3.6, Framer Motion 12.38.0

---

## Current State (What's Already Done)

### Loading Screen (`LoadingScreen.tsx`)
- [x] Cinematic letterbox wipe exit animation
- [x] Staggered letter reveal with blur/brightness effects
- [x] Glitch brightness flash effect
- [x] Progress bar with shine sweep
- [x] Floating dust particles (22 particles)
- [x] Ambient glow pulse
- [x] Scanlines overlay
- [x] Vignette effect

### CSS Animations (`globals.css`)
- [x] `floatUp` - Dust particles floating upward
- [x] `scanlinePulse` - Scanline flicker effect
- [x] `glowPulse` - Ambient glow pulsing
- [x] `shineSweep` - Progress bar shine sweep
- [x] `grainShift` - Subtle grain overlay movement
- [x] `neonPulse` - Neon border pulse for CTA buttons
- [x] `dotPulse` - Timeline dot pulse
- [x] `fadeUp` - Fade-up entrance animation
- [x] `shimmer` - Horizontal shimmer for stat cards

### Section Animations
- [x] PrizesSection - anime.js stagger card reveal
- [x] CouncilsSection - anime.js stagger card reveal
- [x] JourneySection - Framer Motion timeline with scroll progress
- [x] AboutSection - CountUp numbers, ScrambleText headings
- [x] HeroSection - Parallax scrolling with Framer Motion

### Font Overflow Fixes (Partially Done)
- [x] `.dune-heading` class for overflow prevention
- [x] `min-w-0` on grid children
- [x] Some inline overflow styles on cards

---

## Implementation Plan

### Phase 1: Fix Font Spacing Issues (HIGH PRIORITY)

#### Problem Areas Identified:
1. **Mobile viewports**: Dune Rise font with wide tracking overflows cards
2. **Long text strings**: "CERTIFICATES", "PROJECT CELL", etc. break layout
3. **Inconsistent clamp values**: Some sections use different font scaling

#### Solutions:
- [ ] Add `text-overflow: ellipsis` fallback for extreme cases
- [ ] Reduce letter-spacing on mobile (tracking-[0.04em] instead of [0.3em])
- [ ] Add responsive breakpoints for font-size clamps
- [ ] Ensure all Dune Rise elements have `dune-heading` class
- [ ] Add container queries for card-aware sizing

### Phase 2: Enhanced Loading Animation

#### New Effects to Add:
- [ ] **Sand particle storm**: More particles with varied behaviors
- [ ] **Text glitch effect**: Random character flickers before settling
- [ ] **Typewriter tagline**: Characters appear one by one
- [ ] **Energy wave pulse**: Radial wave emanating from center
- [ ] **Grain overlay**: Subtle film grain for cinematic feel
- [ ] **Audio-reactive glow** (optional): Pulse to ambient sound

#### Implementation:
```typescript
// Enhanced particle system
const PARTICLE_LAYERS = {
  dust: { count: 30, speed: 'slow', size: 'small' },
  sand: { count: 15, speed: 'medium', size: 'medium' },
  embers: { count: 8, speed: 'fast', size: 'tiny', glow: true }
};
```

### Phase 3: Section Entrance Animations

#### Animations to Add:
- [ ] **AboutSection**: Stagger stats cards with scale + opacity
- [ ] **FAQSection**: Accordion items slide in from alternating sides
- [ ] **ContactSection**: Form elements reveal sequentially
- [ ] **InfoSection**: Cards flip/rotate into view
- [ ] **RegistrationSection**: CTA button pulse + reveal

#### anime.js Timeline Pattern:
```typescript
// Reusable scroll-triggered animation hook
useScrollAnimation(ref, {
  targets: '.card',
  opacity: [0, 1],
  translateY: [40, 0],
  scale: [0.95, 1],
  delay: stagger(100),
  duration: 600,
  ease: 'outExpo'
});
```

### Phase 4: Floating Particles Across Site

#### Global Ambient Effects:
- [ ] Create `AmbientParticles.tsx` component
- [ ] Subtle dust floating throughout all sections
- [ ] Different particle colors per section (orange/amber gradient)
- [ ] Performance optimization with `will-change` and GPU layers

### Phase 5: Hover Micro-Interactions

#### Card Interactions:
- [ ] Glow border follows mouse position
- [ ] Slight 3D tilt effect on hover
- [ ] Icon bounce/wiggle on hover
- [ ] Text shimmer on hover

#### Button Interactions:
- [ ] Ripple effect on click
- [ ] Scale + glow on hover
- [ ] Arrow slide animation for CTAs

### Phase 6: Section Transitions

- [ ] Smooth scroll snapping between sections
- [ ] Parallax dividers between sections
- [ ] Color gradient transitions

---

## File Changes Required

### New Files:
- `components/ui/AmbientParticles.tsx` - Global particle system
- `components/ui/AnimatedCard.tsx` - Reusable animated card wrapper
- `hooks/useScrollAnimation.ts` - Custom anime.js scroll trigger hook
- `hooks/useMouseGlow.ts` - Mouse-following glow effect

### Modified Files:
- `app/globals.css` - New keyframe animations
- `app/page.tsx` - Add AmbientParticles
- `components/LoadingScreen.tsx` - Enhanced effects
- `components/sections/*.tsx` - Add entrance animations
- All section components - Apply font fixes

---

## CSS Variables for Theming

```css
:root {
  --dune-orange: #ff6600;
  --dune-amber: #ffaa00;
  --dune-cream: #ffedd5;
  --dune-dark: #030200;
  --glow-primary: rgba(255, 102, 0, 0.6);
  --glow-secondary: rgba(255, 170, 0, 0.4);
}
```

---

## Performance Considerations

1. Use `will-change: transform` sparingly
2. Limit simultaneous animations to 10-15 elements
3. Use `transform` and `opacity` only (GPU-accelerated)
4. Lazy-load heavy animation sections
5. Reduce particle count on mobile (`matchMedia`)
6. Use `IntersectionObserver` for scroll triggers (already doing this)

---

## Testing Checklist

- [ ] Test on Chrome, Firefox, Safari
- [ ] Test on mobile devices (iOS Safari, Android Chrome)
- [ ] Verify 60fps animation performance
- [ ] Check for layout shifts during animations
- [ ] Test with reduced motion preference
- [ ] Verify loading screen completes correctly

---

## Progress Tracking

| Task | Status | Priority |
|------|--------|----------|
| Create implementation plan | COMPLETED | High |
| Fix font spacing issues | COMPLETED | High |
| Enhance loading animation | COMPLETED | High |
| Add scroll animations | COMPLETED | High |
| Add floating particles | COMPLETED | Medium |
| Add hover interactions | COMPLETED | Medium |
| Section transitions | COMPLETED | Medium |
| Testing & polish | COMPLETED | High |

---

## What Was Implemented

### 1. Enhanced Loading Screen (`LoadingScreen.tsx`)
- Multi-layer particle system (dust, sand, embers)
- Typewriter effect for tagline with blinking cursor
- Energy wave pulse animations (3 concentric rings)
- Film grain overlay for cinematic effect
- Enhanced particle variations with different behaviors

### 2. Scroll-Triggered Animations
- **FAQSection**: Accordion items slide in from left with stagger
- **ContactSection**: CTA buttons animate with scale+bounce, info cards slide from alternating sides
- **RegistrationSection**: Cards scale+bounce in, CTA button with elastic animation
- **InfoSection**: Timeline cards with 3D rotateX reveal, selection cards slide from varied positions, criteria cards with elastic scale

### 3. Ambient Particles (`AmbientParticles.tsx`)
- Site-wide floating particles that rise from bottom
- Three layers: back, mid, front with varying sizes and opacities
- Performance optimized (hidden on mobile by default)

### 4. Font Spacing Fixes (`globals.css`)
- Responsive letter-spacing for mobile
- Enhanced `.dune-heading` class with proper line-height
- Flex children overflow protection
- Button text wrapping prevention
- Media query for mobile tracking reduction

### 5. Hover Micro-Interactions
- `AnimatedCard.tsx` component with 3D tilt and mouse-following glow
- `useMouseGlow.ts` hook for custom glow effects
- CSS animations: `cardGlow`, `iconBounce`, `textReveal`, `pulseRing`

### 6. Section Dividers (`SectionDivider.tsx`)
- Four variants: wave, gradient, dust, line
- Scroll-triggered opacity and scale animations
- Animated accent lines

### 7. New CSS Animations Added
- `floatUpDrift` - Sand particles with horizontal drift
- `floatUpEmber` - Glowing ember particles
- `cursorBlink` - Typewriter cursor animation
- `ambientFloat` - Site-wide ambient particles
- `cardGlow`, `iconBounce`, `textReveal`, `pulseRing` - Micro-interactions

---

## New Files Created

| File | Purpose |
|------|---------|
| `hooks/useScrollAnimation.ts` | Reusable anime.js scroll trigger hook |
| `hooks/useMouseGlow.ts` | Mouse-following glow effect hook |
| `components/ui/AmbientParticles.tsx` | Site-wide floating particle system |
| `components/ui/AnimatedCard.tsx` | Card with 3D tilt and glow effects |
| `components/ui/SectionDivider.tsx` | Animated section transitions |

---

## Notes for Continuation

If you need to continue or modify this implementation:

1. **Loading Screen**: Edit `LoadingScreen.tsx` - the timeline is in the `useEffect` hook
2. **Section Animations**: Each section has its own anime.js `useEffect` with `IntersectionObserver`
3. **CSS Animations**: All keyframes are in `globals.css`
4. **Particles**: Modify particle counts in `AmbientParticles.tsx` or `LoadingScreen.tsx`

**Key patterns used:**
- anime.js `animate()` for scroll-triggered reveals
- anime.js `createTimeline()` for sequenced loading animations
- Framer Motion for parallax and scroll transforms
- CSS keyframes for continuous effects (pulse, shimmer, etc.)
- `IntersectionObserver` for scroll detection
