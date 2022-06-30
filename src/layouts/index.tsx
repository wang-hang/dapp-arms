import  { useEffect } from 'react';

import ProLayout, {
  PageContainer,
} from '@ant-design/pro-layout';
import { IRouteComponentProps } from 'umi';
import Header from '@/components/header';
import useWallet from '@/hooks/useWallet';
import { Link } from 'umi';
import logo from '@/assets/img/logo.png'
import { Route } from '@ant-design/pro-layout/lib/typings';

export default function Layout(props: IRouteComponentProps) {
  const { connect } = useWallet();
  useEffect(() => {
    connect();
  }, []);
  const routes: Route[] = [
    {
      name: '合约',
      path: '/contract',
      routes: [
        {
          name: '代币授权',
          path: '/contract/approve'
        },
        {
          name: '发行ERC20代币',
          path: '/contract/deploy-erc20'
        },
        {
          name: '合约调用',
          path: '/contract/call'
        },
      ]
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
  return (
    <div
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        logo={logo}
        title="Dapp Arms"
        navTheme="light"
        location={{
          pathname: props.location.pathname,
        }}
        route={{ routes }}
        menuItemRender={(item, dom) => (
          <Link to={item.path}>{dom}</Link>
        )}
        headerContentRender={() => <Header></Header>}
      >
        <PageContainer>{props.children}</PageContainer>
      </ProLayout>
    </div>
  );
}
