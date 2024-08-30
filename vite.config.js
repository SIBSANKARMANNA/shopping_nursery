import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/<repository>/',  // replace <repository> with your actual repository name
  plugins: [react()],
});
