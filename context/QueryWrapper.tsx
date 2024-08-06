'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { config } from './config';
import { WagmiProvider } from 'wagmi';

interface Props {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

const QueryWrapper = ({ children }: Props) => (
  <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  </WagmiProvider>
);
export default QueryWrapper;
