/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // Toggle dark mode manually using a class
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        canvas: {
          light: '#f5f5f3', // Off-white gallery
          dark: '#0a0a0a',  // Deep cinematic black
        },
        ink: {
          light: '#111111', // Almost black
          dark: '#ededed',  // Off-white
        },
        muted: {
          light: '#666666',
          dark: '#888888',
        },
        accent: {
          light: '#e63946', // Cinematic red highlight
          dark: '#e63946',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
