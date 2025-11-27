import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // vendor chunks 분리
          if (id.includes('node_modules')) {
            if (id.includes('svelte')) {
              return 'vendor-svelte';
            }
            return 'vendor';
          }
        },
      },
    },
    // 청크 크기 경고 임계값 증가 (폰트 파일이 크므로)
    chunkSizeWarningLimit: 1000,
  },
  // 정적 자산 최적화
  assetsInclude: ['**/*.woff2'],
});
