# DevPortfolio - Hisyam Eka Pramudita

A modern, responsive personal portfolio website built with React, Vite, and Tailwind CSS. This portfolio showcases the profile, projects, and skills of Hisyam Eka Pramudita, an Information Systems student and Junior Data Analyst.

![DevPortfolio](./public/og-image.png)

## 🚀 Features

- **Modern Dark Theme**: Sleek, professional dark theme with gradient accents
- **Responsive Design**: Fully responsive layout for all devices
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Interactive Components**: Filterable portfolio, skill progress bars, and more
- **SEO Optimized**: Complete meta tags for better search engine visibility
- **Contact Form**: Integrated contact form (ready for EmailJS/Formspree)
- **Single Page Application**: Smooth scrolling navigation between sections

## 📋 Sections

1. **Hero** - Introduction with call-to-action buttons
2. **About** - Personal information and statistics
3. **Skills** - Technical skills with progress bars and soft skills
4. **Resume** - Education and work experience timeline
5. **Services** - Professional services offered
6. **Portfolio** - Project showcase with category filtering
7. **Contact** - Contact form and social media links

## 🛠️ Technologies Used

| Component | Technology |
|-----------|-----------|
| Framework | React 18 |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Icons | React Icons |
| Language | TypeScript |
| Deployment | Vercel (recommended) |

## 📦 Installation

### Prerequisites

- Node.js (v20.19.0 or higher recommended)
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/shineistu86/hisyam-portfolio.git
   cd hisyam-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## 🌐 Deployment

### Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts to complete deployment

### Alternative: Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Upload the `dist` folder to your preferred hosting service

## ⚙️ Configuration

### Contact Form

To enable the contact form, you can integrate with:

- **EmailJS**: Follow [EmailJS React integration guide](https://www.emailjs.com/docs/examples/reactjs/)
- **Formspree**: Update the form action in `Contact.tsx`

### Personal Information

Update your information in `src/data/portfolio.ts`:
- Profile details
- Skills
- Education & Experience
- Projects
- Social links

## 📁 Project Structure

```
hisyam-portfolio/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Resume.tsx
│   │   ├── Services.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── index.ts
│   ├── data/
│   │   └── portfolio.ts   # All portfolio data
│   ├── types/
│   │   └── index.ts       # TypeScript interfaces
│   ├── App.tsx            # Main App component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── index.html             # HTML template with SEO
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
├── tsconfig.json          # TypeScript configuration
├── package.json           # Dependencies
└── README.md              # This file
```

## 🎨 Customization

### Colors

Edit the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Customize primary colors
  },
  dark: {
    // Customize dark theme colors
  }
}
```

### Animations

Modify animation settings in components using Framer Motion's `transition` prop.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Hisyam Eka Pramudita**

- Portfolio: [hisyam-portfolio.vercel.app](https://hisyam-portfolio.vercel.app)
- GitHub: [@shineistu86](https://github.com/shineistu86)
- LinkedIn: [Hisyam Eka Pramudita](https://www.linkedin.com/in/hisyam-eka-pramudita-0a1667248/)
- Email: syamjoj@gmail.com

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/shineistu86/hisyam-portfolio/issues).

## 📝 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

---

Made with ❤️ and React
