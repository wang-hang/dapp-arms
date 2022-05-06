import React, { useState } from 'react';
import { Button, Descriptions, Result, Avatar, Space, Statistic } from 'antd';
import { LikeOutlined, UserOutlined } from '@ant-design/icons';

import type { ProSettings } from '@ant-design/pro-layout';
import ProLayout, {
  PageContainer,
  SettingDrawer,
} from '@ant-design/pro-layout';
import { IRouteComponentProps } from 'umi';
import Header from '@/components/header';

export default function Layout(props: IRouteComponentProps) {
  const [pathname, setPathname] = useState('/welcome');
  const routes = [
    {
      name: '合约',
      path: '/contract',
    },
    {
      name: 'Hex',
      path: '/hex',
    },
  ];
  return (
    <div
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        location={{
          pathname,
        }}
        route={{ routes }}
        menuItemRender={(item, dom) => (
          <a
            onClick={() => {
              setPathname(item.path || '/welcome');
            }}
          >
            {dom}
          </a>
        )}
        headerContentRender={() => <Header></Header>}
      >
        <PageContainer>{props.children}</PageContainer>
      </ProLayout>
    </div>
  );
}
