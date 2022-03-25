import { Card, Button } from 'antd';
import styles from './index.less';
import { Contract } from 'ethers';
import { useEffect } from 'react';
import ERC20 from '@/abi/erc20.json';
import useWallet from '@/hooks/useWallet';

export default function IndexPage() {
  const { account, provider } = useWallet();
  useEffect(() => {}, [account]);

  function getBalance() {
    const contract = new Contract(
      '0xa71edc38d189767582c38a3145b5873052c3e47a',
      ERC20,
      provider,
    );
    contract.balanceOf(account).then((res: any) => {
      console.log('余额：', res.toString());
    });
  }
  return (
    <div>
      <Card title="字符串转hex">
        <Button onClick={getBalance}>查询</Button>
      </Card>
    </div>
  );
}
