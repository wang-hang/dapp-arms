import { defineConfig } from 'umi';

const repoName = 'dapp-arms';

const isProd = process.env.NODE_ENV === 'production';
console.log('isPROD: ', isProd, process.env.NODE_ENV);
export default defineConfig({
  // base: repoName,
  nodeModulesTransform: {
    type: 'none',
  },
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
