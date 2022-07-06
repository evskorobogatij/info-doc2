import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  
  plugins: [react()],
  resolve: {
    alias:{
      '@app/': `${path.resolve(__dirname,'src/app')}/`,
      '@pages/': `${path.resolve(__dirname,'src/pages')}/`,
      '@components/':`${path.resolve(__dirname,'src/components')}/`,
      '@icons':`${path.resolve(__dirname,'src/icons')}/`,
      '@models':`${path.resolve(__dirname,'src/models')}/`,
      '@api':`${path.resolve(__dirname,'src/api')}/`
    }
  }
})
