import { defineConfig } from "vitest/config"
import viteTsConfigPaths from "vite-tsconfig-paths"

export default defineConfig({
	plugins: [
		viteTsConfigPaths({
			projects: ["./tsconfig.json"],
		}),
	],
	test: {
		environment: "jsdom",
		include: ["tests/**/*.test.{ts,tsx}"],
		exclude: ["node_modules", "dist"],
	},
})
