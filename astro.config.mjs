// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ameen278.github.io/obsidian_site/',
  base: '/obsidian_site/',
  output: 'static',
  integrations: [],
  build: {
    format: 'directory',
  },
});
