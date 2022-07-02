import { useState, Fragment, useRef } from 'react';
import { Card, Input, Button, Space, message, Form } from 'antd';
import parseABI from '@/utils/parse-abi';
import styles from './index.less';
import c from 'classnames';
import MethodItem from './method-item';
import { Contract } from 'ethers';
import useWallet from '@/hooks/useWallet';
import { isAddress } from 'ethers/lib/utils';

const { TextArea } = Input;

export default function CallContractCard() {
  const [abi, setAbi] = useState('');
  const [methodsList, setMethodsList] = useState<
    Array<{ name: string; params: string[] }>
  >([]);
  const [locked, setLocked] = useState(false);
  const [address, setAddress] = useState('');
  const [contract, setContract] = useState<Contract>();
  const { provider } = useWallet();

  function parse() {
    try {
      const result = parseABI(abi);
      setMethodsList(result);
    } catch {
      message.error('解析ABI出错了~');
    }
  }

  // TODO 优化读合约和写合约调用
  async function callMethod(name: string, values: object) {
    // console.log('call', name, values);
    if (!contract) {
      return;
    }
    const contractParams = [...Object.values(values)];
    // console.log('values: ', values);
    // console.log('params: ', contractParams);
    return contract[name](...contractParams)
      .then((res: any) => {
        if (res.wait) {
          return res.wait().then(() => '执行成功');
        } else {
          return res;
        }
      })
      .catch((err: any) => {
        console.error('合约执行出错：', err);
        message.error('合约执行出错~');
      });
  }

  function createContractInstance() {
    if (!address) {
      message.error('请输入合约地址');
      return;
    }
    if (!abi) {
      message.error('请输入合约的ABI');
      return;
    }
    if (!provider) {
      message.error('请先连接钱包');
      return;
    }
    if (!isAddress(address)) {
      message.error('请输入合法合约地址');
      return;
    }
    const c = new Contract(address, abi, provider.getSigner() || provider);
    parse();
    setContract(c);
    setLocked(true);
  }

  const MethodsListDOM = methodsList.map((it) => {
    return (
      <MethodItem
        key={it.name}
        onSubmit={callMethod}
        name={it.name}
        params={it.params}
      ></MethodItem>
    );
  });
  const UnlockButton = (
    <Button
      onClick={() => {
        setLocked(false);
        setMethodsList([]);
        setContract(undefined);
      }}
    >
      修改
    </Button>
  );
  const CreateButton = (
    <Button
      type="primary"
      onClick={createContractInstance}
      disabled={!(abi && address)}
    >
      创建合约实例
    </Button>
  );
  return (
    <Card title="合约调用">
      <span>合约ABI:</span>
      <TextArea
        disabled={locked}
        placeholder="请输入合约的ABI"
        value={abi}
        style={{ height: '200px' }}
        onChange={(e) => setAbi(e.target.value)}
      />
      {/* <Space style={{ display: 'block' }}>{ParseButton}</Space> */}
      <Space style={{ marginTop: '20px' }} align="center">
        <span>合约地址：</span>
        <Input
          disabled={locked}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        {locked ? UnlockButton : CreateButton}
      </Space>
      {contract && (
        <div style={{ marginTop: '10px' }}>
          <h2>合约方法:</h2>
          {MethodsListDOM}
        </div>
      )}
    </Card>
  );
}
