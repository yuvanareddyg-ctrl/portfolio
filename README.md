# Modern Developer & Designer Portfolio

A premium, modern, and fully responsive developer & designer portfolio website. Built with clean, semantic HTML5, CSS3 Custom Properties (variables), and vanilla JavaScript. Features a glassmorphism aesthetic with floating glow-spots, scrolling interactions, a typewriter role loop, active page scrollspy, and mobile-first responsiveness.

## 🚀 Live Demo & Preview
To deploy this portfolio in under 3 minutes, follow the [Deployment Guide](#-deployment-instructions) below.

---

## ✨ Features
*   **Hero / Home**: Welcoming call-to-action buttons, tagline badges, and custom avatar.
*   **Typewriter Effect**: Dynamic animated loop cycling through developer/designer titles and roles.
*   **About Section**: Description blocks, professional stats counters, and creative process timelines.
*   **Interactive Skills Grid**: Four core categorized blocks containing hover-reactive badges with icons.
*   **Projects Grid**: Beautiful card previews with hover blur overlays, repository links, and active demo indicators.
*   **Contact Area**: Integrated social profiles and a mock interactive form with sending loader state and notification alerts.
*   **Sticky Navbar & Mobile Drawer**: Header blurs dynamically on scroll. Collapses into a clean, smooth-sliding hamburger menu for mobile devices.
*   **Scroll Animations**: Smooth slide-up fade effects on grid panels powered by browser `IntersectionObserver` APIs.

---

## 🛠️ Local Setup

Since this is a client-side vanilla website, there are **no complex dependencies or npm build steps required**. You can view it instantly!

### Option A: Direct Open
Simply double-click or drag-and-drop the [index.html](index.html) file into any modern web browser.

### Option B: Local Web Server (Recommended)
Running a local web server resolves potential browser CORS constraints and replicates production environments.

1.  **Using Python (Pre-installed on most machines)**:
    Open your terminal/command prompt in this folder and run:
    ```bash
    python -m http.server 8000
    ```
    Access the site at `http://localhost:8000`.

2.  **Using Node.js**:
    Install and run `serve` globally or via `npx`:
    ```bash
    npx serve .
    ```
    Access the site at `http://localhost:3000` (or the port shown in terminal).

3.  **VS Code extension**:
    Install the **Live Server** extension, open the repository, and click **Go Live** in the status bar.

---

## 🎨 Customization Guide

### 1. Update Content & Text
Open [index.html](index.html) and update:
*   `<title>` and `<meta name="description">` tags in the `<head>` section.
*   The logo text (`Yuvana.Dev`).
*   Hero header names and descriptions.
*   The About sections, stat values, and process descriptions.
*   Project titles, paragraphs, tech tags, and links.
*   Social channel URLs and location info.

### 2. Replace Images
Save your customized image files into the `assets/images/` folder and match the existing file names, or update the paths in `index.html`:
*   `assets/images/avatar.png` - Profile picture / Avatar.
*   `assets/images/project1.png` - Project 1 preview card image.
*   `assets/images/project2.png` - Project 2 preview card image.
*   `assets/images/project3.png` - Project 3 preview card image.

### 3. Change Theme Colors & Styles
Open [style.css](style.css) and edit the root CSS variables at the top of the file to completely alter the color theme:
```css
:root {
  /* Change backgrounds */
  --bg-primary: #08090d;
  --bg-secondary: #0f111a;
  
  /* Change accents & gradients */
  --accent-primary: #8b5cf6; /* Indigo/Purple */
  --accent-secondary: #06b6d4; /* Cyan/Teal */
}
```

### 4. Customizing Typewriter Roles
Open [script.js](script.js) and locate the `words` array to change the roles typed out in the hero area:
```javascript
const words = [
  "Modern Web Applications",
  "Beautiful User Interfaces",
  "Interactive Experiences",
  "Clean & Scalable Code"
];
```

---

## ☁️ Deployment Instructions

### ⚡ Deploy to Netlify (Fastest)

#### Method 1: Netlify Drop (No GitHub Account Needed)
1.  Zip your project directory (make sure `index.html`, `style.css`, `script.js` and `assets/` are at the root level of the ZIP).
2.  Go to [Netlify Drop](https://app.netlify.com/drop).
3.  Drag and drop your ZIP file into the box.
4.  Your site is live! You can customize the domain name in the site dashboard.

#### Method 2: Git Integration (Auto-deploys on every code push)
1.  Push this folder to a repository on **GitHub**, **GitLab**, or **Bitbucket**.
2.  Log in to [Netlify App Console](https://app.netlify.com/).
3.  Click **Add new site** > **Import an existing project**.
4.  Authorize your git provider and select your repository.
5.  Leave build commands and publish directories **empty** (since there are no build steps).
6.  Click **Deploy site**.

---

### 🔺 Deploy to Vercel

#### Method 1: Vercel Dashboard (Visual Portal)
1.  Push your code to a remote GitHub repository.
2.  Log in to [Vercel Dashboard](https://vercel.com).
3.  Click **Add New** > **Project**.
4.  Import your GitHub repository.
5.  Vercel will auto-detect the project configuration. Leave the Build Command and Output Directory fields blank.
6.  Click **Deploy**.

#### Method 2: Vercel CLI (Terminal)
1.  Open your command prompt in this folder.
2.  Install Vercel CLI globally:
    ```bash
    npm install -g vercel
    ```
3.  Log in to your account:
    ```bash
    vercel login
    ```
4.  Initiate deployment:
    ```bash
    vercel
    ```
    Follow the terminal prompts (defaults are correct). After deployment, copy the provided staging link. To deploy to production, run:
    ```bash
    vercel --prod
    ```
