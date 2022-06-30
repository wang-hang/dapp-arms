import { useState, Fragment } from "react";
import { Card, Input, Button, Space } from "antd";
import parseABI from "@/utils/parse-abi";

const { TextArea } = Input

export default function CallContractCard() {
  const [abi, setAbi] = useState('');
  const [methodsList, setMethodsList] = useState<Array<{name: string, params: string[]}>>([])

  function parse() {
    const result = parseABI(abi);
    setMethodsList(result);
  }

  function callMethod(name: string){
    console.log('call', name);
  }

  const MethodsListDOM = methodsList.map(it => {
    <Space key={it.name}>
      <Button onClick={() => callMethod(it.name)}>{it.name}</Button>
      {
        it.params.map(p => (
          <Input key={p} placeholder={p}></Input>
        ))
      }
    </Space>
  })
  return (
    <Card title="合约调用">
      <TextArea value={abi} onChange={(e) => setAbi(e.target.value)} />
      <Button onClick={parse} >解析</Button>
      <Space>
        {MethodsListDOM}
      </Space>
    </Card>
  );
}
