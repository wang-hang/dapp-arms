import { useEffect } from 'react';
import { Tag, Row, Col } from 'antd';

import useWallet from '@/hooks/useWallet';
import styles from './index.less';

export default function Header() {
  const { account, chainId, connect, disconnect, isActive } = useWallet();

  const ActiveStatus = (
    <Tag color={'success'} onClick={() => disconnect()}>
      已连接, 点击断开连接
    </Tag>
  );
  const NotActiveStatus = (
    <Tag color={'error'} onClick={() => connect()}>
      未连接, 点击连接
    </Tag>
  );
  const Status = isActive ? ActiveStatus : NotActiveStatus;

  useEffect(() => {
    if (!account) {
      // connect()
    }
  }, [account]);

  return (
    <Row gutter={20} justify="end">
      <Col span={12}>
        <span>账户地址：{account || '--'}</span>
      </Col>
      <Col span={3}>
        <span>链：{chainId || '--'}</span>
      </Col>
      <Col span={6}>{Status}</Col>
    </Row>
  );
}
