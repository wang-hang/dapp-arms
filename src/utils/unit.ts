import { BigNumberish, utils, BigNumber as BN } from 'ethers';
import toBN from './to-bn';
import { BigNumber } from 'bignumber.js';

export type BigNumberLike = string | number | BigNumber | BN;

export function weiToEther(weiAmount: BigNumberLike, demicals = 18) {
  const amount = toBN(weiAmount);
  return amount.dividedBy(Math.pow(10, demicals));
}

export function etherToWei(etherAmount: string | BigNumber, demicals = 18) {
  const amount =
    etherAmount instanceof BigNumber ? etherAmount.toString() : etherAmount;
  return toBN(utils.parseUnits(amount, demicals));
}
