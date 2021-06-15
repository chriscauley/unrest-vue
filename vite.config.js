import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";


export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: '@unrest/vue'
    },
    rollupOptions: {
      external: ['vue', '@popperjs/core', '@unrest/vue-reactive-storage'],
      output: {
        globals: {
          vue: 'Vue',
          '@unrest/vue-reactive-storage': 'UnrestVueReactiveStorage',
          '@popperjs/core': '@popperjs/core',
        }
      }
    }
  },
  plugins: [vue()]
})