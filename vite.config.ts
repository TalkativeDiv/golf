import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import eslintPlugin from '@nabla/vite-plugin-eslint';
import progress from 'vite-plugin-progress';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(), eslintPlugin(), progress()],
});
