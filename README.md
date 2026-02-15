# DJS Portfolio Piece – Podcast App (React)

# Overview

This project represents the final, production-ready version of the React Podcast App built throughout the DJS course. The application includes a fully interactive landing page with searchable, sortable, and filterable podcast previews, as well as a dynamic show detail page with season navigation.

In this final phase, the app has been enhanced with global audio playback, episode favouriting, UI improvements, deployment optimisation, and theme support. The result is a polished, responsive, and seamless user experience designed to reflect real-world production standards.

# Live Deployment:

https://podnestify.vercel.app/

# Technologies Used

The project includes:

- React (Functional Components, Hooks, Context API, React Router)
- JavaScript (ES6+)
- CSS
- localStorage for persistent state
- Vercel (Deployment)
- Github

# Features Created

# Setup & Deployment

- Deployed to Vercel with proper SPA routing configuration
- Custom favicon for browser tab identification
- Rich social media preview metadata configured
- Dynamic route fallback support (e.g. /show/1)

# Global Audio Player

- Fixed global audio player anchored at the bottom of the screen
- Continuous playback across page navigation
- Play, pause, seek, and progress tracking functionality
- Confirmation prompt when reloading during active playback
- Integrated with placeholder podcast API

# Favourites System

- Favourite/unfavourite episodes via interactive icon
- Persistent storage using localStorage
- Dedicated Favourites page

Displays:

- Episode title
- Associated show and season
- Date and time added
- Groups favourites by show title

Sorting options:

- Title A–Z / Z–A
- Newest / Oldest by date added

# Recommended Shows Carousel

- Horizontally scrollable carousel on landing page
- Displays show image, title, and genre tags
- Supports arrow navigation and swipe interaction
- Carousel items navigate to respective show detail pages

# Theme Toggle (Light / Dark Mode)

- Toggle between light and dark themes
- Theme preference stored in localStorage
- Smooth UI transitions across all components
- Sun/Moon icons indicate active theme
- Consistent styling across all pages and views

# How to Run This Project Locally

- Clone the repository: git clone <repository-url>
- Navigate to the project folder: cd <project-folder>
- Install dependencies: npm install
- Start the development server: npm run dev
- Open your browser at http://localhost:5173 (or configured port)
