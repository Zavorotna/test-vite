import { defineConfig } from 'vite'

export default defineConfig({
  base: '/test-vite/', // <-- назва твого репозиторію на GitHub
  build: {
    outDir: 'docs', // куди збирати
  },
})
