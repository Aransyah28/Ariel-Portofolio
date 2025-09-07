import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { fileURLToPath, URL } from "url";

export default defineConfig({
  build: { emptyOutDir: true },
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
    ],
  },
  plugins: [react()],
});