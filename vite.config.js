import { defineConfig } from 'vite'

export default defineConfig({
  base: '/repo-name/', // <-- назва твого репозиторію на GitHub
  build: {
    outDir: 'docs', // куди збирати
  },
})
