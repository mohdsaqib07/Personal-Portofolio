import vercel from "@sveltejs/adapter-vercel";
import netlify from "@sveltejs/adapter-netlify";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: process.env.ADAPTER === "netlify" ? netlify() : vercel(),
  },
  preprocess: vitePreprocess(),
};

export default config;
