import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import mkcert from 'vite-plugin-mkcert' // https://vitejs.dev/config/

// https://vitejs.dev/config/
export default defineConfig({
    define: {
        __VUE_I18N_FULL_INSTALL__: true,
        __VUE_I18N_LEGACY_API__: false,
        __INTLIFY_PROD_DEVTOOLS__: false,
    },
    server: {
        host: 'core-space.dev',
        open: true,
        port: 8765,
        https: true,
    },
    base: '/core-space/',
    plugins: [vue(), mkcert()],
    resolve: {
        alias: [
            {
                find: '@',
                replacement: resolve(__dirname, 'src'),
            },
        ],
    },
})
