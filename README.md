# 🚀 Kovon | Global Talent Marketplace

Kovon is a modern global talent marketplace built with Next.js 16, connecting blue and grey collar professionals with verified international employers through a seamless digital hiring platform.

---

# 📌 Submission Requirements

## 🔗 1. GitHub Repository Link

Repository:  
https://github.com/Jyoti-Prakash-Patra/kovon-landing-page.git

---

## 🌐 2. Deployed Live URL

Live Project:  
https://kovon-landing-pages.vercel.app/

---


# 🧰 Tech Stack

- **Framework:** Next.js 16.1.6 (App Router)
- **React:** 19.2.3
- **TypeScript:** Yes
- **Styling:** Tailwind CSS v4
- **UI Library:** Material UI (MUI v7)
- **Animations:** Framer Motion
- **State Management:** React Hooks + Context API
- **Theme Handling:** Custom ThemeRegistry (MUI + Tailwind dark mode)
- **Deployment:** Vercel

---

# 📦 Next.js Version Used

```bash
Next.js 16.1.6
```

To verify locally:

```bash
npm list next
```

---

# ⚙️ Setup Instructions

Follow these steps to run the project locally:

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/Jyoti-Prakash-Patra/kovon-landing-page.git
```

## 2️⃣ Navigate into the Project Folder

```bash
cd kovon-frontend
```

## 3️⃣ Install Dependencies

```bash
npm install
```

## 4️⃣ Run Development Server

```bash
npm run dev
```

## 5️⃣ Open in Browser

```
http://localhost:3000
```

---

# 📁 Project Folder Structure

```
kovon-frontend/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│
├── components/
│   ├── header/Header.tsx
│   ├── hero/HeroSection.tsx
│   ├── about/AboutUs.tsx
│   ├── features/
│   │     ├── FeatureCard.tsx
│   │     └── FeaturesSection.tsx
│   ├── how-it-works/HowItWorks.tsx
│   ├── contact/ContactSection.tsx
│   ├── footer/Footer.tsx
│   ├── button/PrimaryButton.tsx
│   └── theme-registry/ThemeRegistry.tsx
│
├── constants/
│   └── content.ts
│
├── types/
│   └── index.ts
│
├── public/
│   └── logos/
│
├── tailwind.config.ts
├── theme.ts
├── package.json
└── README.md
```

---

# 📂 Folder Explanation

## 🟢 app/

- Uses **Next.js App Router**
- `layout.tsx` → Root layout with Metadata + ThemeRegistry
- `page.tsx` → Homepage rendering all sections
- `globals.css` → Global Tailwind styles

---

## 🟢 components/

Reusable UI components organized by feature:

### Header
Responsive navigation with:
- Scroll detection
- Desktop & Mobile view
- Dark/Light toggle
- Dynamic background on scroll

### HeroSection
- Framer Motion animations
- Animated counters
- Responsive circular image layout
- CTA buttons

### AboutUs
- Feature highlights with MUI icons
- Theme-aware styling

### FeaturesSection
- Grid layout (1 / 2 / 4 responsive columns)
- Uses reusable `FeatureCard`
- Data driven from constants

### HowItWorks
- Horizontal timeline (Desktop)
- Vertical timeline (Mobile/Tablet)
- Fully responsive

### ContactSection
- Form validation (Name, Email, Message)
- Inline email validation
- Success state button animation
- Theme-aware styling

### Footer
- Company details
- Quick links
- Social icons
- Theme adaptive UI

### PrimaryButton
Reusable styled MUI button with:
- Gradient background
- Dark mode support
- Hover effects

### ThemeRegistry
- Context API based theme management
- LocalStorage persistence
- System preference detection
- MUI ThemeProvider integration
- Tailwind class-based dark mode

---

## 🟢 constants/content.ts

Stores:
- Navigation items
- Hero content
- Features list
- Process steps
- Footer links

This keeps UI content separate from logic.

---

## 🟢 types/index.ts

Defines TypeScript interfaces:
- NavItem
- Feature
- ProcessStep

Ensures type safety across components.

---

## 🟢 theme.ts

Defines:
- lightTheme
- darkTheme

Used with MUI theme configuration.

---

## 🟢 tailwind.config.ts

- Enables class-based dark mode
- Scans app & components folders
- Tailwind v4 configuration

---

# 🎨 Design Decisions Explanation

## 1️⃣ App Router Architecture

Used Next.js App Router for:
- Better layout management
- Metadata support
- Server/Client component separation

---

## 2️⃣ Component-Based Structure

Each section (Hero, About, Features, etc.) is modular.
Benefits:
- Reusability
- Maintainability
- Clean separation of concerns

---

## 3️⃣ Centralized Content Management

All static content is stored inside `constants/content.ts`.
This avoids hardcoding text inside components.

---

## 4️⃣ Theme System Architecture

Implemented a custom `ThemeRegistry` using:
- React Context API
- MUI ThemeProvider
- Tailwind dark mode classes
- LocalStorage persistence
- System preference detection

This ensures:
- Consistent dark/light mode
- Smooth transitions
- No hydration issues

---

## 5️⃣ Responsive Design Strategy

- Tailwind utility classes
- Mobile-first layout
- Grid system (1 → 2 → 4 columns)
- Separate mobile/desktop rendering for timelines and navigation

---

## 6️⃣ Animation & UX Enhancements

- Framer Motion for smooth transitions
- Animated statistics counters
- Hover elevation effects
- Gradient borders and shadows

---

## 7️⃣ Form Validation Approach

- Controlled inputs
- Real-time email validation
- Full validation on submit
- Temporary success state

---

# 🚀 Deployment

The project is deployed on **Vercel** for optimal Next.js compatibility.

To deploy manually:

```bash
npm run build
npm run start
```

Or connect GitHub repository directly to Vercel.

---

# 📜 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

# ✅ Project Status

✔ Fully Responsive  
✔ Dark/Light Mode  
✔ Animated UI  
✔ Form Validation  
✔ Deployed  
✔ TypeScript Enabled  
✔ Clean Folder Structure  

---

# 👩‍💻 Author

Your Name  
GitHub: https://github.com/Jyoti-Prakash-Patra

---