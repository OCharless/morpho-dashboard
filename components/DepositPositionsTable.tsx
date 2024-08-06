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
  positions,
}: {
  positions: {
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
        {positions.map(position => (
          <TableRow key={position.APY} className='border-[#fafafa1a]'>
            <TableCell className='font-medium'>
              ${((position.totalSupply * position.APY) / 10000).toFixed(2)}
            </TableCell>
            <TableCell className='font-medium'>{position.vaultName}</TableCell>
            <TableCell>{position.APY}</TableCell>
            <TableCell className='text-right'>{position.curator}</TableCell>
            <TableCell className='text-right'>{position.collateral}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
