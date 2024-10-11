import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Calebs-Portfolio-Frontend/",
  plugins: [react()],
  server: {
    port: 3000,
  },
});
