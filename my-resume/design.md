# Design Documentation - My Resume

## Color Palette
- **Background**: `#F9F6F2` - Warm off-white background
- **Text**: `#333333` - Dark gray for readable body text
- **Accent**: `#D96C6C` - Coral accent color for highlights
- **Hover**: `#C75A5A` - Darker coral for hover states

## Typography
- **Main Font**: Roboto Slab loaded via `next/font/google`
- **Headings**: font-weight 600–700, responsive sizes
  - Hero title: `text-5xl md:text-6xl`
  - Page titles: `text-3xl`
  - Section headings: `text-2xl`
- **Body**: font-weight 400, `text-base` → `text-lg`

## Layout
- **Max-width container**: ≈800px, centered with `max-w-4xl mx-auto`
- **Generous vertical padding**: `py-16`, `mx-auto`
- **Sections separated**: by whitespace or thin horizontal lines
- **Responsive**: Mobile-first approach with responsive breakpoints

## Components

### Header
- Logo/initials on left side
- Navigation links on right side
- Hamburger menu toggle on mobile devices
- Fixed or sticky positioning
- Clean, minimal design

### Footer
- Simple copyright text
- Centered layout
- Minimal styling

### ProjectCard
- Project title as heading
- 1-line description below title
- Link button ("View on GitHub" or "Demo")
- Card-like appearance with subtle borders or shadows
- Hover effects for interactivity

## Interactions
- **Hamburger menu toggle**: Uses React `useState` for mobile navigation
- **Link hover effects**: 
  - Underline grow animation
  - Color fade transitions
  - Smooth transitions with `transition-all duration-300`
- **Button hover**: Background color changes from accent to hover color
- **Card hover**: Subtle lift effect or border color change

## Responsive Design
- **Mobile-first**: Base styles for mobile, then scale up
- **Breakpoints**: 
  - `sm:` (640px+) for small tablets
  - `md:` (768px+) for tablets and small laptops
  - `lg:` (1024px+) for larger screens
- **Navigation**: Hamburger menu on mobile, full nav on desktop
- **Typography**: Smaller text sizes on mobile, larger on desktop
- **Spacing**: Reduced padding/margins on mobile

## Performance Considerations
- **Next.js Image component** for any images
- **Font optimization** with `next/font/google`
- **Minimal dependencies** for fast loading
- **Optimized bundle size** with tree shaking