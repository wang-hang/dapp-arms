import { ContractFactory, Signer } from 'ethers';
import ERC20ABI from '@/abi/erc20.json';
import ERC20Bytecode from '@/bytecode/erc20.json';

export async function deployERC20Contract(name: string, signer: Signer) {
  console.log('deplyo', { name, signer });
  const factory = new ContractFactory(ERC20ABI, ERC20Bytecode.object, signer);
  console.log('factory', factory);
  const contract = await factory.deploy(name);
  console.log('contract: ', contract);
  const receipt = await contract.deployTransaction.wait();
  console.log('receipt: ', receipt);
  return contract.address;
}
