import { getViteConfig } from 'astro/config';
import tsconfigPaths from 'vite-tsconfig-paths'

 
export default getViteConfig({
  plugins: [tsconfigPaths()],
  test: {
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