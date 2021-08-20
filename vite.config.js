import path from 'path'
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src', 'assets'),
      '@components': path.resolve(__dirname, 'src', 'components'),
      '@contexts': path.resolve(__dirname, 'src', 'contexts'),
      '@helpers': path.resolve(__dirname, 'src', 'helpers'),
      '@services': path.resolve(__dirname, 'src', 'services'),
      '@pages': path.resolve(__dirname, 'src', 'pages'),
      '@lib': path.resolve(__dirname, 'src', 'lib'),
      '@utils': path.resolve(__dirname, 'src', 'utils'),
      '@routes': path.resolve(__dirname, 'src', 'routes'),
      '@layouts': path.resolve(__dirname, 'src', 'layouts'),
      '@events': path.resolve(__dirname, 'src', 'events'),
    },
  },
  esbuild: {
    jsxInject: 'import React from "react"',
  },
})
