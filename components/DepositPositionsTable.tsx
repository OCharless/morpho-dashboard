import React from 'react';
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from './ui/table';

export const DepositPositionsTable = ({
  data,
}: {
  data: {
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
          <TableHead>Position</TableHead>
          <TableHead>Vault Name</TableHead>
          <TableHead>Net APY</TableHead>
          <TableHead className='text-right'>Collateral</TableHead>
          <TableHead className='text-right'>Curator</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map(invoice => (
          <TableRow key={invoice.APY} className='border-[#fafafa1a]'>
            <TableCell className='font-medium'>
              ${((invoice.totalSupply * invoice.APY) / 10000).toFixed(2)}
            </TableCell>
            <TableCell className='font-medium'>{invoice.vaultName}</TableCell>
            <TableCell>{invoice.APY}</TableCell>
            <TableCell className='text-right'>{invoice.curator}</TableCell>
            <TableCell className='text-right'>{invoice.collateral}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
