import {resolve} from "path"
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'build')


// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [reactRefresh()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input:{
        main:resolve(root,'index.html'),
        Instagram:resolve(root,'Instagram','index.html'),
      },
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          "react-router": 'ReactRouter',
        },
      },
    }
  },
  define: {
    global: {},
  },
  server: {
    port: 8080,
    host: 'localhost',
  },
})
