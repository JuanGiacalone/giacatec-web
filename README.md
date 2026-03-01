# Giacatec IT Agency Website

Welcome to the official repository for the **Giacatec IT Agency** website. 

Giacatec is a modern, premium IT agency specializing in bespoke software development, AI automation, Google Workspace migrations, and high-performance cloud solutions. This website serves as the primary digital storefront and contact portal for the agency, providing a sleek, responsive, and multilingual experience for potential clients.

## 🚀 Tech Stack

This project is built using bleeding-edge web technologies to ensure a fast, accessible, and stunning user experience:

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **UI Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Motion](https://motion.dev/) (Framer Motion)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Theming:** `next-themes` for native Light/Dark Mode switching using dynamic CSS variables
- **Forms:** Integration with [FormSubmit.co](https://formsubmit.co/) for seamless contact inquiries
- **Internationalization:** Custom Context-based i18n supporting English (EN) and Spanish (ES)

## ✨ Key Features

- **Modern Aesthetics:** Vibrant, glassmorphic UI components with smooth micro-animations.
- **Dynamic Theming:** Instant switching between Light and Dark modes matching the user's system preferences or manual choice.
- **Bilingual Support:** Full English and Spanish language toggle.
- **Smart Contact Form:** Controlled React form with live validation, animated loading states, and automated JSON payload delivery.
- **Performance Optimized:** Uses Next.js Turbopack for lightning-fast development builds.

## 📦 Getting Started

### Prerequisites

Ensure you have [Bun](https://bun.sh/) or [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd giacatec-web
   ```

2. Install dependencies:
   ```bash
   bun install
   # or
   npm install
   ```

3. Run the development server (configured to use Turbopack):
   ```bash
   bun dev
   # or
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📂 Project Structure

- **`app/`**: Next.js App Router core files (`page.tsx`, `layout.tsx`, global styles, and dynamic routes).
- **`components/`**: Reusable React components (Navbar, Footer, ThemeToggle, Language Context, Cards, etc.).
- **`dictionaries/`**: Translation files (`en.ts`, `es.ts`) powering the bilingual experience.
- **`public/`**: Static assets.

## 🎨 Theming & Styling

The application utilizes native CSS custom properties defined in `app/globals.css` combined with Tailwind v4 `@custom-variant` directives. This allows components to dynamically inherit color palettes contextually without needing hardcoded `dark:` classes repeatedly scattered in the HTML.

- **Primary Brand Colors:**
  - Pantone Blue (`#0F4C81`)
  - Pantone Coral (`#FF8A82`)

## 📬 Contact Form Configuration

The contact page uses `formsubmit.co` as the backend processor. To change the recipient email address, update the endpoint URL located in `app/contact/page.tsx`'s `fetch` request.

## 📄 License

All rights reserved by Giacatec.