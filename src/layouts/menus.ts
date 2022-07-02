import { Route } from '@ant-design/pro-layout/lib/typings';

const routes: Route[] = [
  {
    name: '合约',
    path: '/contract',
    routes: [
      {
        name: '代币授权',
        path: '/contract/approve',
      },
      {
        name: '发行ERC20代币',
        path: '/contract/deploy-erc20',
      },
      {
        name: '合约调用',
        path: '/contract/call',
      },
    ],
  },
  {
    name: 'Hex',
    path: '/hex',
  },
  {
    name: 'ERC20',
    path: '/erc20',
  },
];
export default routes;
