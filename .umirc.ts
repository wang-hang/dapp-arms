import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  mfsu: {},
  esbuild: {},
  outputPath: 'docs',
});
