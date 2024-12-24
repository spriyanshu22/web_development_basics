import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy: {
      '/api' : 'http://localhost:3003',
      // In '/api' 'http://localhost:3003' will be appended and also server will think that the request is coming from the same server
      // hence CORS error will not be there
    },
  },
  plugins: [react()],
})
