import { useEffect, useState } from "react";
import { Input, Card, Descriptions, Spin, Space } from "antd";
import { utils, Contract } from 'ethers'
import ERC20ABI from '@/abi/erc20.json';
import useWallet from "@/hooks/useWallet";
import useERC20Contract from "@/hooks/useERC20Contract";
import { add, debounce } from 'lodash'
import toBN from "@/utils/to-bn";
import { weiToEther } from "@/utils/unit";

export default function ERC20InfoCard() {
  const [address, setAddress] = useState('')
  const { provider, account } = useWallet();
  const [balance, setBalance] = useState('--');
  const [totalSupply, setTotalSupply] = useState('--')
  const [name, setName] = useState('--')
  const [decimals, setDecimals] = useState('--')
  const [symbol, setSymbol] = useState('--')
  // const contract = useERC20Contract(address);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)


  async function getInfo(address: string){
    if(!utils.isAddress(address)){
      return
    }
    const contract = new Contract(address, ERC20ABI, provider);
    setLoading(true)
    await Promise.all(
      [
        contract.totalSupply(),
        contract.symbol(),
        contract.name(),
        contract.decimals(),
        contract.balanceOf(account),
      ]
    )
    .then(res => {
      const [totalSupplyRaw, symbol, name, decimals, blanceRaw] = res;
      setTotalSupply(weiToEther(totalSupplyRaw).toString())
      setBalance(weiToEther(blanceRaw).toString())
      setDecimals(decimals.toString())
      setName(name)
      setSymbol(symbol)
    })
    .finally(() => {
      setLoading(false)
    })
  }

  function handleChange(v: string){
    setError(utils.isAddress(v))
    getInfo(v)
  }


  return (
    <Card title="查询ERC20代币信息">
      <Space>
        <span>币种地址:</span>
        <Input status={error ? 'error' : ''} onChange={(e) => debounce(handleChange, 500)(e.target.value)} style={{width: '300px'}} />
      </Space>
      <Spin spinning={loading}>
        <Descriptions bordered column={1} title="代币信息">
          <Descriptions.Item label="name:">{name}</Descriptions.Item>
          <Descriptions.Item label="symbol:">{symbol}</Descriptions.Item>
          <Descriptions.Item label="totalSupply:">{totalSupply} Ether</Descriptions.Item>
          <Descriptions.Item label="decimals:">{decimals}</Descriptions.Item>
          <Descriptions.Item label="balanceOf:">{balance}{symbol}</Descriptions.Item>
        </Descriptions>
      </Spin>
    </Card>
  );
}
