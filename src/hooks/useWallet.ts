import { hooks, metamask } from '@/connectors/metamask';
import { ZERO_ADDRESS } from '@/constants';
import { Web3Provider } from '@ethersproject/providers';
import { AddTokenParams } from '@/interface';


export default function useWallet() {
  const { useChainId, useAccount, useAccounts, useIsActive, useProvider } =
    hooks;
  const chainId = useChainId();
  const account = useAccount();
  const isActive = useIsActive();
  const provider = useProvider();

  const addTokenToWallet = (params: AddTokenParams) => {
    const { address, symbol, decimals, image } = params;
    if (window.ethereum) {
      window.ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address,
            symbol,
            decimals,
            image,
          },
        },
      });
    }
  };
  return {
    chainId,
    account: account || '',
    isActive,
    provider: provider as Web3Provider,
    connect: () => metamask.activate(),
    disconnect: () => metamask.deactivate(),
    addTokenToWallet,
  };
}
