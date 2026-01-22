# CrimsonDev Portfolio

A cinematic, high-performance portfolio website designed for Senior Full Stack Engineers. This project features a **3D interactive hero section** and a highly optimized **HTML5 Canvas background system**.

The design philosophy focuses on "Sleek, Dark, and Edgy" aesthetics using Tailwind CSS, glassmorphism, and hardware-accelerated CSS animations.

---

## 2. Tech Stack

### Frontend
- **Framework**: React 18 (TypeScript)
- **Styling**: Tailwind CSS (Utility-first)
- **Icons**: Lucide React
- **Animation**: 
  - Native CSS3 (Keyframes, 3D Transforms, Transitions)
  - HTML5 Canvas (Background Particle System)

### Build & Tooling
- **Module System**: ES Modules via `importmap` (ESM.sh)
- **Transpiler**: Babel (In-browser for dev) / Vite (Recommended for production)

---

## 3. Project Architecture Diagram

```ascii
User Browser
│
├── [index.html] (Entry Point & Import Maps)
│
├── [index.tsx] (React Mount)
│    │
│    └── [App.tsx] (Main Layout & State)
│         │
│         ├── [BackgroundAnimation] (Canvas Layer)
│         │
│         ├── [Hero] (3D Reactor Core & Cinematic Intro)
│         │
│         └── [Projects/Skills/About/Contact] (Static Content)
```

---

## 4. Features

1.  **Cinematic 3D Hero Section**: A CSS-only **Cybernetic Reactor Core** animation. It features a pulsating plasma core and gyroscopic rings that spin up on load, projecting holographic data cards representing the developer's tech stack.
2.  **High-Performance Background**: A custom HTML5 Canvas implementation rendering fog particles and a retro-futuristic grid without heavy external libraries.
3.  **Responsive Glassmorphism**: UI components utilize `backdrop-filter` and semi-transparent gradients to create depth.
4.  **No-Build Capable**: Utilizing modern `importmap`, this project can theoretically run directly in a browser without a heavy Node.js build step during development.

---

## 5. Project Folder Structure

```text
/
├── index.html              # Entry point, import maps, global CSS/Keyframes
├── index.tsx               # React root mounting
├── App.tsx                 # Main application shell
├── types.ts                # TypeScript interfaces (Project, Skill)
├── constants.ts            # Static data (Projects, Bio)
├── metadata.json           # App configuration
├── README.md               # Documentation
│
├── components/             # UI Components
│   ├── Hero.tsx            # Complex 3D Reactor Animation logic
│   ├── BackgroundAnimation.tsx # HTML5 Canvas logic
│   ├── Navbar.tsx          # Responsive navigation
│   ├── About.tsx           # Profile section
│   ├── Projects.tsx        # Project grid
│   ├── Skills.tsx          # Animated progress bars
│   └── Contact.tsx         # Contact form with UI states
```

---

## 6. Entry Points

1.  **`index.html`**: The browser loads this first. It defines the `importmap` and global styles. It loads `index.tsx` as a module.
2.  **`index.tsx`**: Initializes the React Root and renders `<App />`.
3.  **`App.tsx`**: Orchestrates the layout. It immediately loads `BackgroundAnimation` and `Hero`.
4.  **`Hero.tsx`**: Triggers the `useEffect` timeline, starting the opening sequence animations.

---

## 7. Installation & Setup

### Prerequisites
- **Node.js** (v18+) & **npm** (If building for production)
- A modern web browser (Chrome/Firefox/Edge)

### Standard Vite Setup
1. Initialize a Vite project: `npm create vite@latest portfolio -- --template react-ts`
2. Install dependencies: `npm install lucide-react`
3. Copy the provided files into the `src/` folder.
4. Update `tailwind.config.js` with settings from `index.html`.

---

## 8. Code Walkthrough

### The Hero Animation (`Hero.tsx`)
Instead of heavy libraries like Three.js, we use **CSS 3D Transforms**.
- **State**: A `stage` number (0-4) controls the timeline.
- **Reactor3D**: A `div` with `preserve-3d`. It contains:
    - **Core**: A central sphere using `radial-gradient` that pulses.
    - **Rings**: Three concentric circles that use custom Tailwind animations (`spin-x`, `spin-y`, `spin-slow`) to rotate on different axes.

### Background (`BackgroundAnimation.tsx`)
- Uses a `<canvas>` element.
- **Render Loop**: `requestAnimationFrame` draws particles and grid lines every frame for maximum performance.

---

## 9. License

MIT License. Free to use and modify for personal or commercial portfolios.