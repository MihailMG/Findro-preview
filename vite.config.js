import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        support: './support.html',
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use '@/styles/helpers' as *;
        `
      },
      sass: {
        additionalData: `
          @use '@/styles/helpers' as *;
        `
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})