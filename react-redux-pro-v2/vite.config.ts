import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react';
import {resolve} from 'path';

function srcPath(path: string) {
    return resolve(__dirname, path);
}

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': srcPath('src'),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "@/styles/global.scss";`,
            },
        },
    },
    server: {
        open: true,
        proxy: {
            // '/api': {
            //     target: 'https://api.github.com',
            //     changeOrigin: true,
            //     rewrite: (path) => path.replace(/^\/api/, ''),
            // },
        },
    },
})
