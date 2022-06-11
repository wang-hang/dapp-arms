import { useState } from 'react';
import { Card, Input, Descriptions, message } from 'antd';
import ProForm, { ProFormText, ProFormDigit } from '@ant-design/pro-form';
import { ProDescriptions } from '@ant-design/pro-components';

import { deployERC20Contract } from '@/utils/deploy-contract';
import useWallet from '@/hooks/useWallet';

export default function DeployERC20() {
  const [contractAddress, setContractAddress] = useState('');
  const { provider } = useWallet();

  async function submit(values: { name: string }) {
    console.log(values);
    const { name } = values;
    return deployERC20Contract(name, provider.getSigner())
      .then((address) => {
        message.success('部署成功');
        setContractAddress(address);
      })
      .catch((err) => {
        message.error('部署失败');
        console.error(err);
      });
  }

  return (
    <Card title="部署一个ERC20代币">
      <ProForm onFinish={submit}>
        <ProFormText label="代币名称" name={'name'} />
      </ProForm>
      <ProDescriptions title="部署结果">
        <ProDescriptions.Item label="部署后的合约地址：" copyable={true}>
          {contractAddress}
        </ProDescriptions.Item>
      </ProDescriptions>
    </Card>
  );
}
