import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                course: 'course.html',
                header: 'src/html/header.html',
                footer: 'src/html/footer.html',
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
