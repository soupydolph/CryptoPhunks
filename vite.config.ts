import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import postcssNesting from 'postcss-nesting';
import tailwindcss from 'tailwindcss';
import nesting from 'tailwindcss/nesting'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        nesting,
        tailwindcss,
        postcssNesting
      ],
    },
  },
})
