import React from 'react';
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from './ui/table';

export const DepositTable = ({
  deposits,
}: {
  deposits: {
    APY: number;
    vaultName: string;
    totalSupply: number;
    curator: string;
    collateral: string;
  }[];
}) => {
  return (
    <Table className='w-full overflow-hidden rounded-lg bg-[#202426]'>
      <TableHeader>
        <TableRow className='border-[#fafafa1a]'>
          <TableHead>Vault Name</TableHead>
          <TableHead>Total Supply</TableHead>
          <TableHead>Net APY</TableHead>
          <TableHead className='text-right'>Curator</TableHead>
          <TableHead className='text-right'>Collateral</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {deposits.map(deposit => (
          <TableRow key={deposit.APY} className='border-[#fafafa1a]'>
            <TableCell className='font-medium'>{deposit.vaultName}</TableCell>
            <TableCell className='font-medium'>{deposit.totalSupply}</TableCell>
            <TableCell>{deposit.APY}</TableCell>
            <TableCell className='text-right'>{deposit.curator}</TableCell>
            <TableCell className='text-right'>{deposit.collateral}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
