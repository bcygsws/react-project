import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {resolve} from 'path';

function srcPath(str: string) {
    return resolve(__dirname, str);
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
                additionalData: `@import "@/assets/styles/global.scss";`,
                javascriptEnabled: true
            },
        },
    },
    server: {
        open: true,// 主动在浏览器中打开
        proxy: {
            // '/api': {
            //   target: 'https://api.juejin.cn',
            //   changeOrigin: true,
            //   rewrite: (path) => path.replace(/^\/api/, ''),
            // },
        },
    },
})
