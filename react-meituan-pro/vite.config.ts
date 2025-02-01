import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {resolve} from "path";

function getPath(path: string) {
    return resolve(__dirname, path);
}

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': getPath('src')
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                javascriptEnabled: true,
                additionalData: `@import "@/styles/variable.scss";`
            }
        }
    },
    // server: {
    //     open: true,
    //     proxy: {
    //         '/api': {
    //             target: 'http://localhost:8080',
    //             changeOrigin: true,
    //             rewrite: (path) => path.replace(/^\/api/, '')
    //         }
    //     }
    // }
});
