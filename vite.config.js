import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                course: 'course.html',
                header: 'src/components/header/header.html',
                footer: 'src/components/footer/footer.html',
            },
        },
    },
    resolve: {
        alias: {
            '@assets': '/src/assets',
            '@components': '/src/components',
            '@util': '/src/util'
        }
    },
});
