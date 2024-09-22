import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/mybusiness/', // Add your GitHub repository name here
  plugins: [react()],
})
