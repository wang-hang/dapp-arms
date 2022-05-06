import { Web3Provider, JsonRpcSigner } from '@ethersproject/providers';
import { Contract } from '@ethersproject/contracts';

export function getSigner(
  library: Web3Provider,
  account: string,
): JsonRpcSigner {
  return library.getSigner(account).connectUnchecked();
}

export function getProviderOrSigner(
  library: Web3Provider,
  account?: string,
): Web3Provider | JsonRpcSigner {
  return account ? getSigner(library, account) : library;
}

export function makeContract<T extends Contract>(
  address: string,
  ABI: any,
  library: Web3Provider,
  account?: string,
): T {
  const provider = getProviderOrSigner(library, account) as any;
  return new Contract(address, ABI, provider) as T;
}
