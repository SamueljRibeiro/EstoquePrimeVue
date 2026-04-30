import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { PrimeVueResolver } from '@primevue/auto-import-resolver'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),

    AutoImport({
      imports: ['vue', 'vue-router'],
      dts: 'src/auto-imports.d.ts' 
    }),

    Components({
      resolvers: [PrimeVueResolver()],
      dts: 'src/components.d.ts' 
    })
  ],
})