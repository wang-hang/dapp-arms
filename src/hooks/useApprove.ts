import { useModel } from 'umi';
import { useState, useEffect, useMemo } from 'react';

// import { useERC20Contract } from './useContract';
import useWallet from './useWallet';
import { makeERC20Contract } from './useERC20Contract';
import { MAX_HEX_NUMBER } from '@/constants';
import BigNumber from 'bignumber.js';
import toBN from '@/utils/to-bn';
import { isAddress } from 'ethers/lib/utils';

export default function useApprove() {
  const { account, provider } = useWallet();
  const [loading, setLoading] = useState(false);

  async function approve(
    tokenAddress: string,
    approveAddress: string,
    amount = MAX_HEX_NUMBER, // 默认授权最大额度
  ) {
    const contract = makeERC20Contract(tokenAddress, provider, account);
    setLoading(true);
    try {
      const tx = await contract.approve(approveAddress, amount);
      const res = await tx.wait();
      console.log('授权成功: ', res);
    } catch (error: any) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return {
    approve,
    loading,
  };
}

// 查询授权状态
export const useApproveStatus = (
  tokenAddress: string,
  approveAddress: string,
) => {
  const [allowance, setAllowance] = useState(new BigNumber(0));
  const { provider, account } = useWallet();
  const [loading, setLoading] = useState(false);

  const getStatus = () => {
    if (tokenAddress && approveAddress && isAddress(approveAddress) && isAddress(tokenAddress)) {
      setLoading(true);
      const contract = makeERC20Contract(tokenAddress, provider, account);
      contract
        .allowance(account, approveAddress)
        .then((res) => {
          setAllowance(toBN(res));
        })
        .catch((err) => {
          console.log(`获取授权额度出错`, err.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };
  useEffect(() => {
    getStatus();
  }, [tokenAddress, approveAddress, provider, account]);

  const isApproved = useMemo(() => allowance.gt(0), [allowance]);

  return {
    loading,
    isApproved,
    allowance,
    refresh: getStatus,
  };
};
