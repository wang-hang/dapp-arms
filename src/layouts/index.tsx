import { useEffect } from 'react';

import ProLayout, { PageContainer } from '@ant-design/pro-layout';
import { IRouteComponentProps, Link } from 'umi';
import Header from '@/components/header';
import useWallet from '@/hooks/useWallet';
import logo from '@/assets/img/logo.png';
import makeAvatar from '@/utils/make-avatar';
import menus from './menus';

export default function Layout(props: IRouteComponentProps) {
  const { connect } = useWallet();
  useEffect(() => {
    connect();
    makeAvatar('0xbf731f7e7B3F9ff3164Ba2113A143E7A8b481aDb');
  }, []);

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
        fixSiderbar={true}
        route={{ menus }}
        menuItemRender={(item, dom) => <Link to={item.path}>{dom}</Link>}
        headerContentRender={() => <Header></Header>}
      >
        <PageContainer>{props.children}</PageContainer>
      </ProLayout>
    </div>
  );
}
