import { BigNumberLike } from '@/interface';
import { BigNumber as BN } from '@ethersproject/bignumber';
import BigNumber from 'bignumber.js';

/**
 * @description 将数值转换成 bignumber
 */
export default function toBN(n: BigNumberLike) {
  if (!n) return new BigNumber(0);
  return new BigNumber(n.toString());
}
