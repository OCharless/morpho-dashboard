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
  data,
}: {
  data: {
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
        {data.map(invoice => (
          <TableRow key={invoice.collateral} className='border-[#fafafa1a]'>
            <TableCell>{invoice.collateral}</TableCell>
            <TableCell>{invoice.loan}</TableCell>
            <TableCell>{invoice.borrowAPY}</TableCell>
            <TableCell
              className={`text-right ${invoice.LTV / invoice.liquidationLTV > 0.9 ? 'text-red-500' : 'text-green-500'}`}
            >
              {invoice.LTV}
            </TableCell>
            <TableCell className='text-right'>
              {invoice.liquidationLTV}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
