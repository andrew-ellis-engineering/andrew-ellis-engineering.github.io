// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build
export default defineConfig({
  site: "https://www.andrewellisengineering.com",
  server: {
    host: "0.0.0.0", // bind IPv4 wildcard — Tailscale hands out IPv4 (100.x), and host:true bound IPv6-only
    port: 4321
  }
});
