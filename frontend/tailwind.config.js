import daisyui from 'daisyui';
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary": "color-mix(in srgb, var(--color-primary) calc(100% * <alpha-value>), transparent)",
        "base-content": "color-mix(in srgb, var(--color-base-content) calc(100% * <alpha-value>), transparent)",
        "base-100": "color-mix(in srgb, var(--color-base-100) calc(100% * <alpha-value>), transparent)"
      }
    },
  },
  plugins: [daisyui],
}