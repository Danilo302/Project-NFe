import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Quando você fizer fetch('/api/usuario'), o Vite redireciona para o Java
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true, // Essencial: muda o host da requisição para o destino
        secure: false,      // Use false se o seu backend não tiver SSL (https)
        rewrite: (path) => path.replace(/^\/api/, ''), // Remove o prefixo '/api' antes de enviar ao Java
        
        // Esta parte tenta "enganar" o Spring Security
        configure: (proxy, _options) => {
          proxy.on('proxyReq', (proxyReq, _req, _res) => {
            // Define o Origin e Referer para o endereço do próprio Backend
            // Isso faz o Spring pensar que a requisição é interna (Same-Origin)
            proxyReq.setHeader('Origin', 'http://localhost:8080');
            proxyReq.setHeader('Referer', 'http://localhost:8080');
          });
        },
      },
    },
  },
});