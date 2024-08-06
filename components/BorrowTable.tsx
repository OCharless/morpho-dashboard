import React from 'react';
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from './ui/table';

export const BorrowTable = ({
  borrows,
}: {
  borrows: {
    collateral: string;
    loan: string;
    liquidationLTV: number;
    AvailableLiquidity: number;
    borrowAPY: string;
    vaultListing: string;
  }[];
}) => {
  return (
    <Table className='w-full overflow-hidden rounded-lg bg-[#202426]'>
      <TableHeader>
        <TableRow className='border-[#fafafa1a]'>
          <TableHead>Collateral</TableHead>
          <TableHead>Loan</TableHead>
          <TableHead className='text-right'>Liquidation LTV</TableHead>
          <TableHead className='text-right'>Available liquidity</TableHead>
          <TableHead>1D borrow APY</TableHead>
          <TableHead>Vault listing</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {borrows.map(borrow => (
          <TableRow key={borrow.collateral} className='border-[#fafafa1a]'>
            <TableCell>{borrow.collateral}</TableCell>
            <TableCell>{borrow.loan}</TableCell>
            <TableCell>{borrow.liquidationLTV}</TableCell>
            <TableCell>{borrow.AvailableLiquidity}</TableCell>
            <TableCell>{borrow.borrowAPY}</TableCell>
            <TableCell>{borrow.vaultListing}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
