import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // Base URL for GitHub Pages
  // For username.github.io repos, use '/'
  // For project repos, use '/repo-name/'
  base: '/',

  server: {
    host: "::",
    port: 8080,
  },

  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    // Output directory for GitHub Pages
    outDir: 'dist',
    // Generate source maps for debugging
    sourcemap: false,
    // Optimize build
    minify: 'terser',
    rollupOptions: {
      output: {
        // Manual chunks for better caching
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['@radix-ui/react-dialog', '@radix-ui/react-slot'],
        },
      },
    },
  },
});
