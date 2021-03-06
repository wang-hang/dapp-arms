import { useState } from 'react';
import useApprove, { useApproveStatus } from '@/hooks/useApprove';
import { Card, Input, Space, Button, Row, message } from 'antd';
import { weiToEther, etherToWei } from '@/utils/unit';
import { isAddress } from 'ethers/lib/utils';

export default function ApproveCard() {
  const [tokenAddress, setTokenAddress] = useState('');
  const [approveValue, setApproveValue] = useState('');
  const [beApprovedAddress, setBeApprovedAddress] = useState('');
  const {
    isApproved,
    allowanceEther,
    loading: getAllowanceLoading,
  } = useApproveStatus(tokenAddress, beApprovedAddress);
  const [approveLoading, setApproveLoading] = useState(false);
  const [cancelApproveLoading, setCancelApproveLoading] = useState(false);
  const { approve } = useApprove();

  function toApprove() {
    if (!validate()) return;
    setApproveLoading(true);
    approve(tokenAddress, beApprovedAddress)
      .then(() => {
        message.success('授权成功');
      })
      .finally(() => setApproveLoading(false));
  }

  function cancelApprove() {
    if (!validate()) return;
    setCancelApproveLoading(true);
    approve(tokenAddress, beApprovedAddress, '0')
      .then(() => {
        message.success('取消授权成功');
      })
      .finally(() => setCancelApproveLoading(false));
  }

  function validate() {
    if (!tokenAddress) {
      message.error('请输入取消授权的代币地址');
      return false;
    }
    if (!beApprovedAddress) {
      message.error('请输入被取消授权的合约地址');
      return false;
    }
    return true;
  }
  return (
    <Card title="合约授权">
      <Row>
        <Input
          placeholder="请输入授权额度"
          value={approveValue}
          onChange={(v) => setApproveValue(v.target.value)}
        ></Input>
        <Input
          placeholder="请输入被授权的地址"
          value={beApprovedAddress}
          onChange={(v) => setBeApprovedAddress(v.target.value)}
          status={
            beApprovedAddress && isAddress(beApprovedAddress)
              ? undefined
              : 'error'
          }
        ></Input>
        <Input
          placeholder="请输入授权的代币的地址"
          value={tokenAddress}
          onChange={(e) => setTokenAddress(e.target.value)}
          status={tokenAddress && isAddress(tokenAddress) ? undefined : 'error'}
        ></Input>
      </Row>
      <Row>
        <p>
          {getAllowanceLoading
            ? '查询中...'
            : `授权额度：${allowanceEther} Ether`}
        </p>
      </Row>
      <Row>
        <Button type="primary" loading={approveLoading} onClick={toApprove}>
          授权
        </Button>
        <Button loading={cancelApproveLoading} onClick={cancelApprove}>
          取消授权
        </Button>
      </Row>
    </Card>
  );
}
