# How Muslim-Life Was Built

This document provides a brief overview and step-by-step guide on how the Muslim-Life application was developed.

## Stack & Technologies
- **Frontend Framework:** React.js + Vite
- **Styling:** Tailwind CSS
- **APIs:** EQuran API (for Quran data), MyQuran API (for prayer schedules), API Ninjas (Qibla direction)

## Step-by-Step Development Process

### 1. Project Initialization
The project was initialized using Vite with React template:
```bash
npm create vite@latest muslim-life -- --template react
cd muslim-life
npm install

```

### 2. Tailoring UI with Tailwind CSS

Installed and configured Tailwind CSS for rapid responsive design:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

```

### 3. Integrating APIs & Geolocation

* Implemented Browser Geolocation API to fetch user coordinates automatically.
* Connected Axios to fetch daily prayer schedules from MyQuran API and Quran surah lists from EQuran API.

### 4. Deployment

Deployed seamlessly via Vercel for continuous deployment on push.

## Key Takeaways

Building this project helped master asynchronous API handling in React, state management with hooks, and responsive mobile-first UI design using Tailwind CSS.

