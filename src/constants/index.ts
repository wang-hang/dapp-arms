import { AddEthereumChainParameter } from '@web3-react/types';
import { constants } from 'ethers';
import BigNumber from 'bignumber.js';

// 空函数
export const noop = () => {};

// TODO 用环境变量替代chainID？
export const HECO_CHAIN_ID = 128;
const HECO_MAINNET_RPC = 'https://http-mainnet.hecochain.com/';
const HECO_MAINNET_BLOCK_EXPLOER = 'https://hecoinfo.com';

export const HECO_TEST_CHAIN_ID = 256;
const HECO_TESTNET_RPC = 'https://http-testnet.hecochain.com';
const HECO_TESTNET_BLOCK_EXPLOER = 'https://testnet.hecoinfo.com/';

// export const SUPPORTED_NETWORK = [HECO_CHAIN_ID, HECO_TEST_CHAIN_ID];
// TODO 开发时使用测试网
export const SUPPORTED_NETWORK = [HECO_TEST_CHAIN_ID];

// 最大的16进制数, 用于授权额度
export const MAX_HEX_NUMBER =
  '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff';

export const ZERO_ADDRESS = constants.AddressZero;
export const SIMPLE_RPC_URL = 'https://http-mainnet.hecochain.com/';

export const CHAIN_PARAMS_MAP: Record<number, AddEthereumChainParameter> = {
  128: {
    chainName: 'Heco Mainnet',
    nativeCurrency: {
      name: 'HT',
      decimals: 18,
      symbol: 'HT',
    },
    chainId: 128,
    rpcUrls: [HECO_MAINNET_RPC],
    blockExplorerUrls: [HECO_MAINNET_BLOCK_EXPLOER],
  },
  256: {
    chainName: 'Heco Testnet',
    nativeCurrency: {
      name: 'HT',
      decimals: 18,
      symbol: 'HT',
    },
    chainId: 256,
    rpcUrls: [HECO_TESTNET_RPC],
    blockExplorerUrls: [HECO_TESTNET_BLOCK_EXPLOER],
  },
};

export const BN_ZERO = new BigNumber(0);
