import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/mybusiness/mr/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'gshankar',
        short_name: 'MR',
        description: 'Enjoy this app',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'images/talk.webp', 
            sizes: '192x192',
            type: 'image/webp'
          },
          {
            src: 'images/icon-512x512.png', 
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
});
