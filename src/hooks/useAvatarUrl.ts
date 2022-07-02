import { useEffect, useState } from 'react';

import { ZERO_ADDRESS } from '@/constants';
import makeAvatar from '@/utils/make-avatar';
import useWallet from './useWallet';

export default function useAvatarUrl() {
  const { account = ZERO_ADDRESS } = useWallet();
  const [avatarUrl, setAvatarUrl] = useState('');

  useEffect(() => {
    setAvatarUrl(makeAvatar(account));
  }, [account]);

  return avatarUrl;
}
