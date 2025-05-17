import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://urban-secrets-revealed.example.com',
  integrations: [tailwind()],
  output: 'static'
});