import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
// 安装了包@types/node之后
import {resolve} from 'path';

function srcPath(path: string) {
    return resolve(__dirname, path);
}

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {// 起路径别名
            '@': srcPath('src')
        }
    },
    css: {// 配置scss预处理器
        preprocessorOptions: {
            scss: {
                javascriptEnabled: true,
                additionalData: '@import "@/assets/styles/global.scss";',
            }
        }
    },
    server: {
        open: true,// 项目启动，自动打开浏览器
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                // rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    }
})
