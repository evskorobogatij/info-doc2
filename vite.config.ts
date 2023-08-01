import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    proxy: {
      '/api': 'http://localhost:8000'
    }
  },
  base: '/',
  build: {
    target: 'chrome50',
    rollupOptions: {
      output: {
        manualChunks: {
          react_pdf_viewer: ['@react-pdf-viewer/core']
        }
      }
    }
  },
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    legacy({
      targets: ['Chrome >= 49'],
      polyfills: ['es.promise.finally', 'es/map', 'es/set'],
      modernPolyfills: ['es.promise.finally']
    })
  ],
  resolve: {
    alias: {
      '@app/': `${path.resolve(__dirname, 'src/app')}/`,
      '@pages/': `${path.resolve(__dirname, 'src/pages')}/`,
      '@components/': `${path.resolve(__dirname, 'src/components')}/`,
      '@icons': `${path.resolve(__dirname, 'src/icons')}/`,
      '@models': `${path.resolve(__dirname, 'src/models')}/`,
      '@services': `${path.resolve(__dirname, 'src/services')}/`,
      '@api': `${path.resolve(__dirname, 'src/api')}/`
    }
  }
})
