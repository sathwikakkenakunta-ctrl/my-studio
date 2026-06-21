import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const siteUrl = env.VITE_SITE_URL || (env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${env.VERCEL_PROJECT_PRODUCTION_URL}` : 'https://my-studio-sathwik.vercel.app')
  return {
    plugins: [react(), tailwindcss()],
    define: { 'import.meta.env.VITE_SITE_URL': JSON.stringify(siteUrl) },
  }
})
