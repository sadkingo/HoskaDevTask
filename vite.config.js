import { defineConfig } from 'vite';

export default defineConfig({
    resolve: {
        alias: {
            '@assets': '/src/assets',
            '@components': '/src/components',
            '@util': '/src/util'
        }
    },
});
