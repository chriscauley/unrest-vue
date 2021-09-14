import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";


export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: '@unrest/vue'
    },
    rollupOptions: {
      external: ['vue', '@popperjs/core', '@unrest/vue-storage'],
      output: {
        globals: {
          vue: 'Vue',
          '@unrest/vue-storage': '@unrest/vue-storage',
          '@popperjs/core': '@popperjs/core',
        }
      }
    }
  },
  plugins: [vue()]
})