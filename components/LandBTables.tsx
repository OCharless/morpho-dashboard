import React from 'react';
import {
  TableCaption,
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from './ui/table';
import { BorrowTable } from './BorrowTable';
import { DepositTable } from './DepositTable';

const mockDeposits: {
  vaultName: string;
  totalSupply: number;
  APY: number;
  curator: string;
  collateral: string;
}[] = [
  {
    vaultName: 'Spark DAI Vault',
    totalSupply: 450098214.23,
    APY: 7.32,
    curator: 'SparkDAO',
    collateral: '$450.52M',
  },
  {
    vaultName: 'Steakhouse USDC',
    totalSupply: 38023246.21,
    APY: 2.66,
    curator: 'Steakhouse Financial',
    collateral: '$38.06M',
  },
  {
    vaultName: 'Gauntlet USDC Core',
    totalSupply: 32942584.08,
    APY: 22.33,
    curator: 'Gauntlet',
    collateral: '$32.98M',
  },
  {
    vaultName: 'Flagship ETH',
    totalSupply: 11176.61,
    APY: 2.05,
    curator: 'Block Analitica',
    collateral: '$27.14M',
  },
  {
    vaultName: 'Gauntlet USDC Prime',
    totalSupply: 20179651.02,
    APY: 2.65,
    curator: 'Gauntlet',
    collateral: '$20.2M',
  },
  {
    vaultName: 'Re7 WETH',
    totalSupply: 7562.33,
    APY: 5.22,
    curator: 'RE7 Labs',
    collateral: '$18.37M',
  },
  {
    vaultName: 'Usual Boosted USDC',
    totalSupply: 18321291.15,
    APY: 41.56,
    curator: 'MEV Capital',
    collateral: '$18.34M',
  },
  {
    vaultName: 'Gauntlet WETH Prime',
    totalSupply: 6952.39,
    APY: 2.15,
    curator: 'Gauntlet',
    collateral: '$16.88M',
  },
  {
    vaultName: 'Steakhouse PYUSD',
    totalSupply: 12195704.17,
    APY: 3.67,
    curator: 'Steakhouse Financial',
    collateral: '$12.19M',
  },
  {
    vaultName: 'Gauntlet WETH Core',
    totalSupply: 4084.04,
    APY: 5.7,
    curator: 'Gauntlet',
    collateral: '$9.92M',
  },
];

const mockBorrows: {
  collateral: string;
  loan: string;
  liquidationLTV: number;
  AvailableLiquidity: number;
  borrowAPY: string;
  vaultListing: string;
}[] = [
  {
    collateral: 'WETH',
    loan: 'USDC',
    liquidationLTV: 86,
    AvailableLiquidity: 7_466_225.6,
    borrowAPY: '2.99%',
    vaultListing: 'Morpho',
  },
  {
    collateral: 'cbETH',
    loan: 'USDC',
    liquidationLTV: 86,
    AvailableLiquidity: 7_093_513.82,
    borrowAPY: '2.11%',
    vaultListing: 'Morpho',
  },
  {
    collateral: 'wUSD+',
    loan: 'USDC',
    liquidationLTV: 77,
    AvailableLiquidity: 742_801.68,
    borrowAPY: '-7.52%',
    vaultListing: 'Morpho',
  },
  {
    collateral: 'cbETH',
    loan: 'USDC',
    liquidationLTV: 86,
    AvailableLiquidity: 7_079_924.83,
    borrowAPY: '1.49%',
    vaultListing: 'Morpho',
  },
  {
    collateral: 'wstETH',
    loan: 'USDC',
    liquidationLTV: 86,
    AvailableLiquidity: 178_107.99,
    borrowAPY: '6.76%',
    vaultListing: 'Morpho',
  },
  {
    collateral: 'bsdETH',
    loan: 'WETH',
    liquidationLTV: 91.5,
    AvailableLiquidity: 67.17,
    borrowAPY: '-1.49%',
    vaultListing: 'Morpho',
  },
  {
    collateral: 'weETH',
    loan: 'WETH',
    liquidationLTV: 91.5,
    AvailableLiquidity: 9.43,
    borrowAPY: '-4.87%',
    vaultListing: 'Morpho',
  },
  {
    collateral: 'ezETH',
    loan: 'USDC',
    liquidationLTV: 77,
    AvailableLiquidity: 0,
    borrowAPY: '-45.09%',
    vaultListing: 'Morpho',
  },
  {
    collateral: 'cbETH',
    loan: 'WETH',
    liquidationLTV: 96.5,
    AvailableLiquidity: 54.63,
    borrowAPY: '2.41%',
    vaultListing: 'Morpho',
  },
];

export const LandBTables = () => {
  return (
    <div className='mb-3 flex flex-col justify-between text-white'>
      <h2 className='text-2xl text-[#2470FF]'>Markets</h2>
      <div className='flex w-full flex-row space-x-4'>
        <div className='flex h-fit w-1/2 flex-grow flex-col space-y-4 overflow-hidden pb-12'>
          <DepositTable data={mockDeposits} />
        </div>
        <div className='flex h-fit w-1/2 flex-grow flex-col space-y-4 overflow-hidden pb-12'>
          <BorrowTable data={mockBorrows} />
        </div>
      </div>
    </div>
  );
};
