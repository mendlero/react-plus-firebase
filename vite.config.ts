import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    name: "react-plus-vue",
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.ts',
  },
});
