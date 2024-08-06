/* eslint-disable @next/next/no-img-element */
'use client';
import {
  ChartAreaIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  LayoutDashboardIcon,
  SunIcon,
  TableIcon,
} from 'lucide-react';
import React from 'react';

export interface NavbarProps {
  toggledNavBar: boolean;
  setToggledNavBar: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navbar = ({ setToggledNavBar, toggledNavBar }: NavbarProps) => {
  if (toggledNavBar)
    return (
      <div
        className={`fixed z-10 flex h-screen w-[250px] flex-col justify-between bg-[#202426] px-[10px]`}
      >
        <div className='flex-nowrap space-y-1 text-[#ffffff80]'>
          <img src='butterfly-dark.svg' alt='' className='px-3 py-4' />
          <button className='flex w-full items-center space-x-2 rounded-md px-3 py-2 text-sm hover:bg-[#fafafa1a]'>
            <img src='earn-icon.svg' alt='' className='w-4' />
            <p className='text-[#fffffff2]'>Earn</p>
          </button>
          <button className='flex w-full items-center space-x-2 rounded-md px-3 py-2 text-sm hover:bg-[#fafafa1a]'>
            <img src='borrow-icon.svg' alt='' className='w-4' />
            <p className='text-[#fffffff2]'>Borrow</p>
          </button>
          <button className='flex w-full items-center space-x-2 rounded-md px-3 py-2 text-sm hover:bg-[#fafafa1a]'>
            <img src='migrate-icon.svg' alt='' className='w-4' />
            <p className='text-[#fffffff2]'>Migrate</p>
          </button>
          <button className='flex w-full items-center space-x-2 rounded-md px-3 py-2 text-sm hover:bg-[#fafafa1a]'>
            <img src='ecosystem-icon.svg' alt='' className='w-4' />
            <p className='text-[#fffffff2]'>Ecosystem</p>
          </button>
          <button className='flex w-full items-center space-x-2 rounded-md bg-[#fafafa1a] px-3 py-2 text-sm text-[#fffffff2] hover:bg-[#fafafa1a]'>
            <LayoutDashboardIcon className='w-4 text-blue-600' />
            <p className='text-[#fffffff2]'>Dashboard</p>
          </button>
        </div>
        <div className='m-2 flex h-full flex-col justify-end space-y-1 text-[#ffffff80]'>
          <a
            href=''
            className='flex items-center space-x-2 rounded-md p-1 hover:bg-[#fafafa1a]'
          >
            <img src='analytics-icon.svg' alt='' className='w-4' />
            <p className='text-xs'>Analytics</p>
          </a>
          <a
            href=''
            className='flex items-center space-x-2 rounded-md p-1 hover:bg-[#fafafa1a]'
          >
            <img src='docs-icon.svg' alt='' className='w-4' />
            <p className='text-xs'>Morpho docs</p>
          </a>
          <a
            href=''
            className='flex items-center space-x-2 rounded-md p-1 hover:bg-[#fafafa1a]'
          >
            <img src='morpho-optimizers-icon.svg' alt='' className='w-4' />
            <p className='text-xs'>Morpho Optimizers</p>
          </a>
          <a
            href=''
            className='flex items-center space-x-2 rounded-md p-1 hover:bg-[#fafafa1a]'
          >
            <img src='feedback-icon.svg' alt='' className='w-4' />
            <p className='text-xs'>Feedback</p>
          </a>
          <a
            href=''
            className='flex items-center space-x-2 rounded-md p-1 hover:bg-[#fafafa1a]'
          >
            <img src='TOS-icon.svg' alt='' className='w-4' />
            <p className='text-xs'>Terms of Use</p>
          </a>
          <div className='mt-2 flex items-center space-x-2'>
            <button
              onClick={() => setToggledNavBar(!toggledNavBar)}
              className='rounded-md p-1 text-white hover:bg-[#fafafa1a]'
            >
              <img src='chevron_out.png' alt='' className='w-4' />
            </button>
            <button className='size-fit rounded-md p-1 hover:bg-[#fafafa1a]'>
              <SunIcon className='w-4' />
            </button>
          </div>
        </div>
      </div>
    );
  if (!toggledNavBar)
    return (
      <div
        className={`fixed z-10 flex h-screen w-[52px] flex-col justify-between bg-[#202426] px-[5px]`}
      >
        <div className='flex flex-col flex-nowrap items-center space-y-2'>
          <img src='butterfly-dark.svg' alt='' className='px-1 py-5' />
          <button className='flex w-full items-center space-x-2 rounded-md px-3 py-1 text-sm hover:bg-[#fafafa1a]'>
            <img src='earn-icon.svg' alt='' className='w-4' />
          </button>
          <button className='flex w-full items-center space-x-2 rounded-md px-3 py-1 text-sm hover:bg-[#fafafa1a]'>
            <img src='borrow-icon.svg' alt='' className='w-4' />
          </button>
          <button className='flex w-full items-center space-x-2 rounded-md px-3 py-1 text-sm hover:bg-[#fafafa1a]'>
            <img src='migrate-icon.svg' alt='' className='w-4' />
          </button>
          <button className='flex w-full items-center space-x-2 rounded-md px-3 py-1 text-sm hover:bg-[#fafafa1a]'>
            <img src='ecosystem-icon.svg' alt='' className='w-4' />
          </button>
          <button className='flex w-full items-center space-x-2 rounded-md bg-[#fafafa1a] px-3 py-1 text-sm'>
            <LayoutDashboardIcon className='w-4 text-blue-600' />
          </button>
        </div>
        <div className='mb-2 flex flex-col items-center space-y-2 text-[#ffffff80]'>
          <button className='size-fit rounded-md p-1 hover:bg-[#fafafa1a]'>
            <SunIcon className='w-4' />
          </button>

          <button
            onClick={() => setToggledNavBar(!toggledNavBar)}
            className='flex size-fit items-center justify-center rounded-md p-1 hover:bg-[#fafafa1a]'
          >
            <img src='chevron_in.png' alt='' className='w-4' />
          </button>
        </div>
      </div>
    );
};
