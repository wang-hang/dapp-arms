import { hooks, metamask } from '@/connectors/metamask';

const { useChainId, useAccount, useAccounts, useIsActive, useProvider } = hooks;

export default function useWallet() {
  const chainId = useChainId();
  const account = useAccount();
  const isActive = useIsActive();
  const provider = useProvider();
  return {
    chainId,
    account,
    isActive,
    provider,
    connect: () => metamask.activate(),
    // connect: () => metamask.connectEagerly,
  };
}
