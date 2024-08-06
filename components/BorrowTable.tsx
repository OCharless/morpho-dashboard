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
  data,
}: {
  data: {
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
        {data.map(invoice => (
          <TableRow key={invoice.collateral} className='border-[#fafafa1a]'>
            <TableCell>{invoice.collateral}</TableCell>
            <TableCell>{invoice.loan}</TableCell>
            <TableCell>{invoice.liquidationLTV}</TableCell>
            <TableCell>{invoice.AvailableLiquidity}</TableCell>
            <TableCell>{invoice.borrowAPY}</TableCell>
            <TableCell>{invoice.vaultListing}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
