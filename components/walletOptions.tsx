import * as React from 'react';
import { Connector, useAccount, useConnect } from 'wagmi';

export function WalletOptions() {
  const { connectors, connect } = useConnect();
  const { address } = useAccount();

  return connectors.map(connector => (
    <WalletOption
      key={connector.uid}
      connector={connector}
      onClick={() => connect({ connector })}
    />
  ));
}

function WalletOption({
  connector,
  onClick,
}: {
  connector: Connector;
  onClick: () => void;
}) {
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      const provider = await connector.getProvider();
      setReady(!!provider);
    })();
  }, [connector]);

  return (
    <button
      disabled={!ready}
      onClick={onClick}
      className='rounded-sm bg-blue-600 p-2'
    >
      {connector.name}
    </button>
  );
}
