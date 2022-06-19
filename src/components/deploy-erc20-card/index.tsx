import { Fragment, useRef, useState } from 'react';
import { Alert, Card, Input, Descriptions, message, Button, FormInstance } from 'antd';
import ProForm, { ProFormText, ProFormDigit } from '@ant-design/pro-form';
import { ProDescriptions } from '@ant-design/pro-components';

import { deployERC20Contract } from '@/utils/deploy-contract';
import useWallet from '@/hooks/useWallet';

export default function DeployERC20() {
  const [contractAddress, setContractAddress] = useState('');
  const { provider, addTokenToWallet } = useWallet();
  const formRef = useRef<FormInstance>()

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

  function addToken(){
    const name = formRef.current?.getFieldValue('name')
    console.log({contractAddress, name})
    if(!contractAddress || !name) {
      alert('请先部署代币')
    }
    addTokenToWallet({
      address: contractAddress,
      symbol: name,
      decimals: 18,
    })
  }

  return (
    <Card title="部署一个ERC20代币">
      <Alert message="部署成功后会账户会有 1000000 个代币" />
      <ProForm onFinish={submit} formRef={formRef}>
        <ProFormText label="代币名称" name={'name'} />
      </ProForm>
      <ProDescriptions title="部署结果">
        <ProDescriptions.Item label="部署后的合约地址：" copyable={true}>
          {contractAddress}
        </ProDescriptions.Item>
      </ProDescriptions>
      {
        contractAddress &&
        <Fragment>
          <Button key="1" onClick={addToken} type="primary"> 添加代币到钱包</Button>
          <Button key="2" type='link' href={`https://testnet.cubescan.network/en-us/token/${contractAddress}`} target="_blank">点击跳转到区块浏览器</Button>
        </Fragment>
      }
    </Card>
  );
}
