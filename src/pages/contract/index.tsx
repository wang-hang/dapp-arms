import { Redirect } from 'umi';

function Contract() {
  return <Redirect to={'/contract/deploy-erc20'}></Redirect>;
}

Contract.title = '合约';
export default Contract;
