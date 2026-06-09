import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'



export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),  
  ],
    server: {
    proxy: {
      "/favqs": {
        target: "https://favqs.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/favqs/, ""),
      },
    },
  }

})
