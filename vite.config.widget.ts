import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	plugins: [
		react(),
		tailwindcss(),
	],
	build: {
		lib: {
			entry: "./src/chatgpt/widget-entry.tsx",
			name: "ChatGPTWidget",
			fileName: "chatgpt-widget",
			formats: ["es"],
		},
		outDir: "widget-dist",
		rollupOptions: {
			external: [],
			output: {
				inlineDynamicImports: true,
			},
		},
	},
});
