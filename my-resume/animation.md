# Animation Plan – Utkarsh Resume Website

> Goal: introduce **subtle, delightful animations** that enhance user experience without distracting from content or harming performance.

---

## 1. Animation Principles

| Principle | Rationale |
|-----------|-----------|
| **Subtlety** | Animations should be short (≤300 ms) and small in distance or scale. |
| **Consistency** | Use the same easing, duration, and style across the site. |
| **Performance** | Prefer CSS `transform` / `opacity`; avoid layout-thrashing properties. |
| **Accessibility** | Respect `prefers-reduced-motion`; disable non-essential motion when set. |

---

## 2. Interaction Points & Effects

| Component / Element | Trigger | Effect | Technique |
|---------------------|---------|--------|-----------|
| **Nav Links** (`Header`) | `hover` | Accent-colored underline grows L→R | Tailwind `bg-gradient-to-r scale-x` + `transition-width` |
| **Hamburger Icon** | `click` | 3 bars morph to ✕ and back | CSS transform rotate / opacity transition |
| **CTA Buttons** (Home hero) | `hover` | Slight scale-up (`scale(1.05)`) & color shade | Tailwind `scale-105`, `transition-transform colors` |
| **ProjectCard** | `hover` | Card lifts 6 px & shadow intensifies | `translateY(-6px)` + `shadow-lg` |
| **Section Entrance** | `scroll` into viewport | Fade-in & slide-up 20 px | Framer-Motion `<motion.div>` or AOS |
| **Social Icons** (Profile page) | `hover` | Icon rotates ±10° with spring | CSS keyframes or Framer-Motion |
| **Footer** | `load` | Copyright fades-in | simple `opacity` transition |

---

## 3. Technical Stack

1. **Tailwind CSS native transitions** for hover / focus states (no extra deps).
2. **Framer Motion** (`npm i framer-motion`) for scroll-based reveals and more complex transforms.
3. Fallback: pure CSS `@keyframes` if preferring zero JS.

---

## 4. Step-by-Step Implementation

### 4.1 Install & Configure
```bash
# inside my-resume/
npm install framer-motion
```
*No Tailwind change needed for basic `transition` utilities.*

### 4.2 Update `tailwind.config.js`
```js
extend: {
  keyframes: {
    wiggle: {
      '0%,100%': { transform: 'rotate(-3deg)' },
      '50%': { transform: 'rotate(3deg)' },
    },
  },
  animation: {
    wiggle: 'wiggle 300ms ease-in-out',
  },
}
```

### 4.3 Nav Link Underline
```tsx
<a className="relative group px-1">
  Home
  <span className="absolute left-0 -bottom-0.5 h-0.5 w-full scale-x-0 bg-[#D96C6C] transition-transform duration-300 origin-left group-hover:scale-x-100"/>
</a>
```

### 4.4 CTA Button Hover
```tsx
<button className="btn-primary transform transition-transform duration-200 hover:scale-105" />
```

### 4.5 Card Lift
```tsx
<div className="card transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-xl" />
```

### 4.6 Scroll Reveal (Framer Motion)
```tsx
import { motion } from 'framer-motion';

<motion.section
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.4 }}
>
  ...
</motion.section>
```

### 4.7 Prefers-Reduced-Motion
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

---

## 5. Testing Checklist
- [ ] Hover all nav links — underline animates.
- [ ] Click hamburger — smooth morph animation.
- [ ] Hover CTA / cards — scale / lift effect.
- [ ] Scroll each section — fade/slide reveal once.
- [ ] `prefers-reduced-motion` set to **reduce** — animations disabled.
- [ ] Lighthouse performance ≥95 after animations.

---

## 6. Roll-Out Strategy
1. **Branch**: `feature/animations` → implement step by step.
2. **Code Review**: ensure motion subtlety & a11y.
3. **QA** on multiple devices / reduced-motion.
4. **Merge & Deploy** → monitor Core Web Vitals.

---

Happy animating! 🎉