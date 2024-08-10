import { getViteConfig } from 'astro/config';
import tsconfigPaths from 'vite-tsconfig-paths'

import path from 'path'

export default getViteConfig({
  plugins: [tsconfigPaths()],
	test: {
     
    environment:"happy-dom",
		expect: {
			requireAssertions: true,
		},
    globals: true,
		typecheck: {
			enabled: true,
			allowJs: true,
			tsconfig: './tsconfig.json',
		},
	},
  resolve: {
    // alias: {
    //    "@ts/*": path.resolve(__dirname, './src/assets/ts/'),
	  //    "@modules/*":path.resolve(__dirname, './src/assets/ts/modules/')
    // },
  },
});