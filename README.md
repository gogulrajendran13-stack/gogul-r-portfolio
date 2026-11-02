# GOGUL R — Portfolio

A high-performance, single-page developer portfolio showcasing full-stack Java web applications, IoT systems, and interactive digital experiences.

Built during the placement training program at [TAP Academy](https://thetapacademy.com/) (full-stack development, AI and augmented reality training).

## 🌐 Live Site
Visit the live portfolio: [https://gogul-r-portfolio.vercel.app/#projects](https://gogul-r-portfolio.vercel.app/#projects)

## 🛠️ Tech Stack
- **Core:** React 19, Vite
- **Styling:** Tailwind CSS 4
- **Animations & Effects:** Framer Motion, AOS (Animate On Scroll)
- **Fluid Simulation:** WebGL (React Bits SplashCursor)
- **Forms & Integration:** @emailjs/browser, react-qr-code

## 🚀 Run Locally

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/gogulrajendran13-stack/portfolio.git
cd portfolio
npm install
```

### 2. Configure Environment Variables
Create a `.env.local` file in the project root with your EmailJS credentials:
```env
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```
*(If left empty, the contact form will automatically fall back to opening the visitor's default email client).*

### 3. Start Development Server
```bash
npm run dev
```

### 4. Build for Production
```bash
npm run build
```

## 📜 License
This project is open-source and available under the MIT License.
