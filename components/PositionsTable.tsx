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
import { DepositPositionsTable } from './DepositPositionsTable';
import { BorrowPositionTable } from './BorrowPositionsTable';

const mockDeposits: {
  APY: number;
  vaultName: string;
  totalSupply: number;
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
];

const mockBorrows: {
  collateral: string;
  loan: string;
  borrowAPY: string;
  liquidationLTV: number;
  LTV: number;
}[] = [
  {
    collateral: 'DAI',
    loan: 'USDC',
    borrowAPY: '3.5%',
    liquidationLTV: 65,
    LTV: 50,
  },
  {
    collateral: 'USDC',
    loan: 'USDT',
    borrowAPY: '2.5%',
    liquidationLTV: 70,
    LTV: 65,
  },
  {
    collateral: 'USDT',
    loan: 'DAI',
    borrowAPY: '4.5%',
    liquidationLTV: 60,
    LTV: 45,
  },
];

export const PositionTables = () => {
  return (
    <div className='text-white'>
      <h2 className='mb-3 text-2xl text-[#2470FF]'>Your positions</h2>
      <div className='mb-3 flex items-center justify-between'>
        <div className='flex w-full flex-row space-x-4'>
          <div className='flex h-fit w-1/2 flex-grow flex-col space-y-4 overflow-hidden pb-12'>
            <h2 className='w-full text-center text-lg'>Deposits</h2>
            <div className='flex flex-col'>
              <div className='mb-2 flex justify-end'>
                <button className='rounded-md bg-[#2470FF]/80 px-2 text-sm'>
                  Claim rewards
                </button>
              </div>
              <DepositPositionsTable data={mockDeposits} />
            </div>
          </div>
          <div className='flex h-fit w-1/2 flex-grow flex-col space-y-4 overflow-hidden pb-12'>
            <h2 className='w-full text-center text-lg'>Borrowings</h2>
            <div className='flex flex-col'>
              <div className='mb-2 flex justify-end'>
                <button className='rounded-md bg-[#2470FF]/80 px-2 text-sm'>
                  Fill all positions
                </button>
              </div>
              <BorrowPositionTable data={mockBorrows} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
