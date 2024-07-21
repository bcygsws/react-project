import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    css: {// 配置sass支持
        preprocessorOptions: {
            scss: {
                additionalData: '@import "@/styles/variables.scss";',
                javascriptEnabled: true
            }
        }

    }
})
