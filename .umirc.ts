import { defineConfig } from 'umi';

const repoName = 'dapp-arms';

const isProd = process.env.NODE_ENV === 'production';
export default defineConfig({
  // base: repoName,
  nodeModulesTransform: {
    type: 'none',
  },
  favicon: isProd ? `https://wang-hang.github.io/${repoName}/favicon.png` : '/favicon.png',
  fastRefresh: {},
  mfsu: {},
  hash: true,
  esbuild: {},
  history: {
    type: 'hash',
  },
  outputPath: 'docs',
  publicPath: isProd ? `https://wang-hang.github.io/${repoName}/` : undefined,
});
