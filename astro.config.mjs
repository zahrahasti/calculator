import { defineConfig } from 'astro/config';
import {Features, browserslistToTargets} from 'lightningcss';
import browserslist from 'browserslist';
// https://astro.build/config
export default defineConfig({
    build: { format: 'file', assets: 'assets' , },
	server: { open: false, host: '127.0.0.1', port: 3000 },
	 vite:{
        css: {
            transformer: 'lightningcss',
            
            lightningcss: {
               include:Features.Nesting,
                drafts: {
                     
                    customMedia: true
                  },
              targets: browserslistToTargets(browserslist('>= 0.25%'))
            }
          },
          build: {
          
            cssMinify: 'lightningcss'
          }
     }
   
});
 