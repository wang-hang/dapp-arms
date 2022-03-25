import useWallet from '@/hooks/useWallet';
import styles from './index.less';

export default function Header() {
  const { account, chainId } = useWallet();
  return (
    <div>
      <h2>账户地址：{account}</h2>
      <h2>链：{chainId}</h2>
    </div>
  );
}
