import { defineConfig } from 'vite';
import  vitePluginString  from 'vite-plugin-string'

export default defineConfig({
  base: '/clear_scene/',
  plugins: [vitePluginString()],
})
