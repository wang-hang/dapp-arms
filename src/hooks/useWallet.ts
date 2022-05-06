import { hooks, metamask } from '@/connectors/metamask';
import { ZERO_ADDRESS } from '@/constants';
import { Web3Provider } from '@ethersproject/providers';

export default function useWallet() {
  const { useChainId, useAccount, useAccounts, useIsActive, useProvider } =
    hooks;
  const chainId = useChainId();
  const account = useAccount();
  const isActive = useIsActive();
  const provider = useProvider();
  return {
    chainId,
    account: account || '',
    isActive,
    provider: provider as Web3Provider,
    connect: () => metamask.activate(),
    disconnect: () => metamask.deactivate(),
  };
}
