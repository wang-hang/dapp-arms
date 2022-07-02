import { defineConfig } from 'umi';
import * as path from 'path';

const repoName = 'dapp-arms';
const srcPath = path.resolve(__dirname, '../src');

const isProd = process.env.NODE_ENV === 'production';
export default defineConfig({
  dynamicImport: {},
  cssModulesTypescriptLoader: {},
  nodeModulesTransform: {
    type: 'none',
  },
  cssLoader: {
    localsConvention: 'camelCase',
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
  alias: {
    '@components': path.resolve(srcPath, 'components'),
    '@hooks': path.resolve(srcPath, 'hooks'),
    '@models': path.resolve(srcPath, 'model'),
    '@constants': path.resolve(srcPath, 'constants'),
    '@assets': path.resolve(srcPath, 'assets'),
    '@types': path.resolve(srcPath, 'types'),
    '@utils': path.resolve(srcPath, 'utils'),
    '@api': path.resolve(srcPath, 'api'),
    '@abi': path.resolve(srcPath, 'abi'),
    '@style': path.resolve(srcPath, 'style'),
  },
});



