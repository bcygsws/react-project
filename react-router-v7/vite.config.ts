import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {resolve} from "path";

// https://vite.dev/config/
function srcPath(path: string) {
    return resolve(__dirname, path);
}

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': srcPath('src'),
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "@/styles/variable.scss";`,
                javascriptEnabled: true
            }
        }
    },

})
