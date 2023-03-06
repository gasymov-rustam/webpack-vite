import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import eslintPlugin from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(() => ({
  base: './',
  plugins: [
    react(),
    tsconfigPaths(),
    eslintPlugin({ cache: false }),
    checker({
      typescript: true,
    }),
    svgr({ exportAsDefault: true }),
  ],
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
    },
  },
  server: {
    open: true,
  },
  define: {
    __IS_DEV__: JSON.stringify(true),
  },
}));
