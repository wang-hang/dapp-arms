import { useState } from 'react';
import useApprove, { useApproveStatus } from '@/hooks/useApprove';
import { Card, Input, Space, Button, Row } from 'antd';

export default function ApproveCard() {
  const [tokenAddress, setTokenAddress] = useState('');
  const [approveValue, setApproveValue] = useState('');
  const [beApprovedAddress, setBeApprovedAddress] = useState('');
  const { isApproved } = useApproveStatus(tokenAddress, beApprovedAddress);
  const { approve, loading } = useApprove();
  function toApprove() {}

  function cancelApprove() {
    approve(tokenAddress, beApprovedAddress, '0');
  }
  return (
    <Card title="合约授权">
      <Row>
        <Input placeholder="请输入授权额度"></Input>
        <Input placeholder="请输入被授权的地址"></Input>
        <Input placeholder="请输入授权的代币的地址"></Input>
      </Row>
      <Row>
        <Button loading={loading}>授权</Button>
        <Button loading={loading} onClick={cancelApprove}>
          取消授权
        </Button>
      </Row>
    </Card>
  );
}
