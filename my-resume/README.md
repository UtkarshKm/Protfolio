# My Resume - Next.js Portfolio Website

A modern, responsive resume website built with Next.js 15, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Modern Design**: Clean, professional layout with warm color palette
- **Responsive**: Mobile-first design that works on all devices
- **Fast Performance**: Built with Next.js App Router for optimal performance
- **TypeScript**: Fully typed for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Google Fonts**: Roboto Slab font integration
- **SEO Optimized**: Proper meta tags and structured data

## 🚀 Live Demo

Deploy this project to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/my-resume)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/my-resume.git
   cd my-resume
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
my-resume/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with header/footer
│   ├── page.tsx           # Home page (Hero section)
│   ├── about/
│   │   └── page.tsx       # About page
│   ├── projects/
│   │   └── page.tsx       # Projects page
│   └── profile/
│       └── page.tsx       # Profile & Contact page
├── components/            # Reusable React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   └── ProjectCard.tsx    # Project display card
├── public/                # Static assets
│   └── images/           # Image files
├── styles/               # CSS styles
│   └── globals.css       # Global Tailwind styles
├── design.md             # Design documentation
├── tailwind.config.js    # Tailwind configuration
└── next.config.ts        # Next.js configuration
```

## 🎨 Design System

### Color Palette
- **Background**: `#F9F6F2` (Warm off-white)
- **Text**: `#333333` (Dark gray)
- **Accent**: `#D96C6C` (Coral)
- **Hover**: `#C75A5A` (Darker coral)

### Typography
- **Font**: Roboto Slab (Google Fonts)
- **Headings**: 600-700 weight
- **Body**: 400 weight

## 🛠️ Customization

### Update Personal Information

1. **Edit content in pages:**
   - `app/page.tsx` - Hero section
   - `app/about/page.tsx` - About information
   - `app/projects/page.tsx` - Project listings
   - `app/profile/page.tsx` - Contact details

2. **Update site metadata:**
   - `app/layout.tsx` - Global site metadata
   - Individual page metadata in each page file

3. **Customize colors:**
   - `tailwind.config.js` - Color definitions
   - `styles/globals.css` - CSS custom properties

### Add Your Projects

Edit `app/projects/page.tsx` and update the `projects` array:

```javascript
const projects = [
  {
    title: "Your Project Name",
    description: "Brief description of your project",
    link: "https://github.com/username/repo",
    linkText: "View on GitHub"
  },
  // Add more projects...
];
```

### Update Social Links

Edit `app/profile/page.tsx` and modify the `socialLinks` array with your actual profiles.

## 📱 Pages

- **Home** (`/`) - Hero section with introduction
- **About** (`/about`) - Personal background and skills
- **Projects** (`/projects`) - Featured project showcase
- **Profile** (`/profile`) - Contact information and social links

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy with default settings

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `out` folder** to Netlify

### Deploy to Other Platforms

This project can be deployed to any platform that supports Node.js applications.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Utkarsh Kumawat**
- GitHub: [@UtkarshKm](https://github.com/UtkarshKm)
- LinkedIn: [Utkarsh Kumawat](https://www.linkedin.com/in/utkarshkm/)
- Email: utkarshkumawat2003@gmail.com

---

⭐ Star this repository if you found it helpful!
