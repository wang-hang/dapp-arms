import  { useEffect } from 'react';

import ProLayout, {
  PageContainer,
} from '@ant-design/pro-layout';
import { IRouteComponentProps } from 'umi';
import Header from '@/components/header';
import useWallet from '@/hooks/useWallet';
import { Link } from 'umi';
import logo from '@/assets/img/logo.png'

export default function Layout(props: IRouteComponentProps) {
  const { connect } = useWallet();
  useEffect(() => {
    connect();
  }, []);
  const routes = [
    {
      name: '合约',
      path: '/contract',
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
