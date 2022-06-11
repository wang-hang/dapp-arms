import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  mfsu: {},
  hash: true,
  esbuild: {},
  outputPath: 'docs',
  publicPath: 'https://wang-hang.github.io/dapp-arms/',
});
