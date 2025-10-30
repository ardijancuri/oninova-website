# Oninova Website

A modern web application built with React, Vite, and Tailwind CSS.

## Features

- ⚡️ **Vite** - Lightning fast build tool and dev server
- ⚛️ **React 18** - Latest React with hooks and modern features
- 🎨 **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- 🔥 **Hot Module Replacement (HMR)** - Instant updates during development
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (version 20.19.0 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

Build the application for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── App.jsx          # Main application component
├── main.jsx         # Application entry point
├── index.css        # Global styles with Tailwind CSS
└── assets/          # Static assets
```

## Technologies Used

- [React](https://react.dev/) - UI library
- [Vite](https://vitejs.dev/) - Build tool and dev server
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [PostCSS](https://postcss.org/) - CSS processing
- [Autoprefixer](https://autoprefixer.github.io/) - CSS vendor prefixing

## Customization

- Modify `tailwind.config.js` to customize Tailwind CSS theme
- Update `src/App.jsx` to build your application
- Add new components in the `src/` directory
