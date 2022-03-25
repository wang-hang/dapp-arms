import { useEffect } from 'react';
import { IRouteComponentProps } from 'umi';
import Header from '@/components/header';
import useWallet from '@/hooks/useWallet';
import { hooks, metamask } from '@/connectors/metamask';

export default function Layout(props: IRouteComponentProps) {
  const { children } = props;
  const { connect } = useWallet();

  useEffect(() => {
    connect();
  }, []);

  return (
    <div className="layout">
      <Header />
      {children}
    </div>
  );
}
