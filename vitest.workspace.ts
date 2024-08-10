import { defineWorkspace } from 'vitest/config'

// defineWorkspace provides a nice type hinting DX
export default defineWorkspace([
  'packages/*',
  {
    // add "extends" to merge two configs together
    extends: './vitest.config.ts',
    test: {
        alias:{
            "@ts/*":new URL('./src/assets/ts/', import.meta.url).pathname, 
	       "@modules/*":new URL('./src/assets/ts/modules/', import.meta.url).pathname, 
            
        },
      include: ['**/*.test.ts'],
      // it is recommended to define a name when using inline configs
      name: 'happy-dom',
      environment: 'happy-dom',
    }
  },
  
])