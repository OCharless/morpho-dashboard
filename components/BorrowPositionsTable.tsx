import React from 'react';
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from './ui/table';

export const BorrowPositionTable = ({
  positions,
}: {
  positions: {
    collateral: string;
    loan: string;
    borrowAPY: string;
    liquidationLTV: number;
    LTV: number;
  }[];
}) => {
  return (
    <Table className='w-full overflow-hidden rounded-lg bg-[#202426]'>
      <TableHeader>
        <TableRow className='border-[#fafafa1a]'>
          <TableHead>Collateral</TableHead>
          <TableHead>Loan</TableHead>
          <TableHead>1D borrow APY</TableHead>
          <TableHead className='text-right'>LTV</TableHead>
          <TableHead className='text-right'>Liquidation LTV</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {positions.map(position => (
          <TableRow key={position.collateral} className='border-[#fafafa1a]'>
            <TableCell>{position.collateral}</TableCell>
            <TableCell>{position.loan}</TableCell>
            <TableCell>{position.borrowAPY}</TableCell>
            <TableCell
              className={`text-right ${position.LTV / position.liquidationLTV > 0.9 ? 'text-red-500' : 'text-green-500'}`}
            >
              {position.LTV}
            </TableCell>
            <TableCell className='text-right'>
              {position.liquidationLTV}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
