import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path';
 
export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
	alias:{
		"@styles/*": "src/assets/styles/*",
		"@components/*": "src/components/*",
		"@ts/*": "src/assets/ts/*",
		"@modules/*": "src/assets/ts/modules/*"
	},
	environment:"happy-dom",
	expect: {
		requireAssertions: true,
	},
	typecheck: {
		enabled: true,
		allowJs: true,
		tsconfig: './tsconfig.json',
	},
},
});