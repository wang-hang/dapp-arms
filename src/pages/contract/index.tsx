import ApproveCard from '@/components/approve-card';
import DeployERC20Card from '@/components/deploy-erc20-card';
import ERC20InfoCard from '@/components/erc20-info-card';
function Contract() {
  return (
    <div>
      <ApproveCard />
      <DeployERC20Card />
      <ERC20InfoCard />
    </div>
  );
}

Contract.title = '合约';
export default Contract;
