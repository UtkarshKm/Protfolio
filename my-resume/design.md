# Utkarsh Resume Website – Next.js + Tailwind (No Photo Section)

## 🎨 Color Palette
- **Background:** `#F9F6F2` (Off‑white)  
- **Text:** `#333333` (Dark Gray)  
- **Accent:** `#D96C6C` (Muted Pink/Red)  
- **Hover:** `#C75A5A` (Darker Accent)

## 🖋️ Typography
- **Font Family:** Roboto Slab (or Poppins) via `next/font/google`  
- **Headings:**  
  - Weight: 600–700  
  - Responsive sizes:  
    - `<h1>`: `text-5xl` → `md:text-6xl`  
    - `<h2>`: `text-4xl` → `md:text-5xl`  
    - `<h3>`: `text-3xl` → `md:text-4xl`  
- **Body Text:**  
  - Weight: 400  
  - Sizes: `text-base` → `text-lg`  
  - Line-height: `leading-relaxed`

## 📐 Layout & Spacing
- **Container:**  
  - Max width: `max-w-3xl` (~800px)  
  - Centered: `mx-auto`  
  - Padding: `px-4 sm:px-6 lg:px-8`  
- **Section Gaps:**  
  - Vertical padding: `py-16`  
  - Divider (optional): `<hr class="border-t border-gray-200 my-16" />`

## 🧩 Components
- **Header (`components/Header.tsx`):**  
  - Left: Logo or initials ("UD")  
  - Right (desktop): Nav links ("Home", "About", "Projects", "Profile")  
  - Mobile: Hamburger button toggles `<MobileMenu />`  
- **Footer (`components/Footer.tsx`):**  
  - Centered text: "© 2025 Utkarsh Devi"  
- **ProjectCard (`components/ProjectCard.tsx`):**  
  - Props: `title`, `description`, `href`  
  - Layout: Card with border, padding, hover lift (`hover:shadow-lg`)

## 📄 Pages Structure
- **Home (`/app/page.tsx`):**  
  - Hero section:  
    - `<h1>` "Utkarsh Devi" (bold, large)  
    - Tagline in accent color: "Logical Minded // Creative at Heart"  
    - Short intro paragraph
- **About (`/app/about/page.tsx`):**  
  - Title: "About Me"  
  - 2–3 sentences: background, passions, goals  
- **Projects (`/app/projects/page.tsx`):**  
  - Title: "Featured Projects"  
  - Render a vertical list of 3+ `<ProjectCard />`
- **Profile (`/app/profile/page.tsx`):**  
  - Title: "Connect With Me"  
  - Icon links (GitHub, LinkedIn, Resume, Email)

## ⚙️ Next.js Features
- **App Router** (`/app` directory)  
- **Font Loading:** via `next/font/google` in `layout.tsx`  
- **Image Optimization:** `<Image />` for logo (if used)  
- **Metadata:**  
  ```ts
  export const metadata = {
    title: 'Utkarsh Devi – Resume',
    description: 'Personal resume website built with Next.js & Tailwind CSS'
  }
  ```