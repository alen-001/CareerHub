import MillionLint from "@million/lint";
import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [MillionLint.vite({
    enabled: false
  }), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
 
    },
  },
  server:{
    proxy:{
      "/api":{
        target:"https://careerhub-z4m6.onrender.com",
        changeOrigin:true,
      }
    }
  },
  images: {
    domains: [
      "api.microlink.io", // Microlink Image Preview
    ],
  },
})
