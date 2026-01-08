import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import webfontDownload from 'vite-plugin-webfont-dl'

export default defineConfig({
  plugins: [
    react(),
    webfontDownload(), 
  ],
})