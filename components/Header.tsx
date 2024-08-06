/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { ChevronDownIcon } from 'lucide-react';

export const Header = () => {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  return (
    <div className='fixed z-10 flex h-[48.8px] w-screen items-center justify-end border-b-[1px] border-[#fafafa1a] bg-[#15181a]'>
      <div className='mr-9 flex h-fit w-fit space-x-2'>
        <div className='flex h-fit space-x-1 rounded-sm bg-[#303436] px-1'>
          <img src='base-icon.svg' alt='' className='w-4' />
          <ChevronDownIcon className='w-4 text-white' />
        </div>
        {address && (
          <button
            className='h-fit w-fit rounded-sm bg-blue-700 p-1 text-xs text-white'
            onClick={() => disconnect()}
          >
            Disconnect
          </button>
        )}
        {address === undefined && (
          <button className='h-fit w-fit rounded-sm bg-blue-700 p-1 text-xs text-white'>
            Connect wallet
          </button>
        )}
      </div>
    </div>
  );
};
