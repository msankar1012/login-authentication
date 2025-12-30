import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "localhost",
      ".csb.app",
      "xz6t6s-5173.csb.app", // YOUR NEW SANDBOX DOMAIN
    ],
  },
});
