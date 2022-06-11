import ApproveCard from '@/components/approve-card';
import DeployERC20Card from '@/components/deploy-erc20-card';
function Contract() {
  return (
    <div>
      <ApproveCard />
      <DeployERC20Card />
    </div>
  );
}

Contract.title = '合约';
export default Contract;
