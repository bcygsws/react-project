import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
// 需要安装@types/node，处理path,__dirname
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    css: {// 配置sass支持
        preprocessorOptions: {
            scss: {
                additionalData: '@import "@/styles/variables.scss";',// 定义一个公共样式，其他地方都可以使用文件中的变量
                javascriptEnabled: true
            }
        }
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, 'src')
        }
    }
})
