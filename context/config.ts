import { http, createConfig } from 'wagmi';
import { mainnet, base } from 'wagmi/chains';
import { injected, metaMask, safe } from 'wagmi/connectors';

export const config = createConfig({
  chains: [mainnet, base],
  connectors: [
    injected(),
    metaMask({ dappMetadata: { name: 'morpho dashboard' } }),
    safe(),
  ],
  transports: {
    [mainnet.id]: http('https://eth.drpc.org'),
    [base.id]: http('https://base-rpc.publicnode.com'),
  },
});
