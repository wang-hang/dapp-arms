import { hooks, metamask } from '@/connectors/metamask';
import { ZERO_ADDRESS } from '@/constants';
import { Web3Provider } from '@ethersproject/providers';

const { useChainId, useAccount, useAccounts, useIsActive, useProvider } = hooks;

export default function useWallet() {
  const chainId = useChainId();
  const account = useAccount();
  const isActive = useIsActive();
  const provider = useProvider();
  return {
    chainId,
    account: account || ZERO_ADDRESS,
    isActive,
    provider: provider as Web3Provider,
    connect: () => metamask.activate(),
    // connect: () => metamask.connectEagerly,
  };
}
