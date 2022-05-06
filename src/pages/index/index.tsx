import { Card, Button } from 'antd';
import styles from './index.less';
import { Contract } from 'ethers';
import { useEffect } from 'react';
import ERC20 from '@/abi/erc20.json';
import useWallet from '@/hooks/useWallet';
import { Redirect } from 'umi';

export default function IndexPage() {
  return <Redirect to="/contract"></Redirect>;
}
