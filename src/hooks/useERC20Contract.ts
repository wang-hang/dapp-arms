import { Web3Provider } from '@ethersproject/providers';
import ERC20ABI from '@/abi/erc20.json';
import { BigNumber } from '@ethersproject/bignumber';
import {
  Contract,
  Overrides,
  ContractTransaction,
} from '@ethersproject/contracts';

import { makeContract } from './useContract';
import useWallet from './useWallet';
import { useMemo } from 'react';
import toBN from '@/utils/to-bn';

export interface ERC20Contract extends Contract {
  totalSupply: () => Promise<BigNumber>;
  balanceOf: (account: string) => Promise<BigNumber>;
  allowance: (
    accountAddress: string, // 用户账户地址
    spenderAddress: string, // 要授权的合约的地址
  ) => Promise<BigNumber>;
  approve: (address: string, amount: string) => Promise<ContractTransaction>; // 授权
  decimals: () => Promise<BigNumber>;
  symbol: () => Promise<string>;
  name: () => Promise<string>;
  transfer: (
    to: string,
    amount: string,
    overrides?: Overrides,
  ) => Promise<ContractTransaction>; // 转账
}

export function makeERC20Contract(
  address: string,
  library: Web3Provider,
  account?: string,
) {
  return makeContract<ERC20Contract>(address, ERC20ABI, library, account);
}

/**
 * 合约 -> vault
 * @param {Function} pendingRewardForHolder 查询待领取收益
 * @param {Function} withdraw 取回本金
 */
export async function queryIsApproved(
  account: string,
  erc20Address: string,
  contract: ERC20Contract,
): Promise<boolean> {
  const approvedRaw = await contract.allowance(account, erc20Address);
  return approvedRaw.gt(0);
}

export async function getBalance(account: string, contract: ERC20Contract) {
  const balance = await contract.balanceOf(account);
  return toBN(balance.toString());
}

export default function useERC20Contract(address: string) {
  const { provider, account } = useWallet();
  if(!provider || !address) return null
  return useMemo(
    () => makeERC20Contract(address, provider, account),
    [provider, address],
  );
}
