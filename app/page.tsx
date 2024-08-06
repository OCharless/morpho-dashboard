'use client';

import { Header } from '@/components/Header';
import { LandBTables } from '@/components/LandBTables';
import { Navbar } from '@/components/Navbar';
import { PositionTables } from '@/components/PositionsTable';
import { Download, Upload } from 'lucide-react';
import React from 'react';

export default function Home() {
  const [toggledNavBar, setToggledNavBar] = React.useState(true);
  return (
    <>
      <main className='h-screen w-screen bg-[#15181a]'>
        <Header />
        <div className='flex size-full flex-col'>
          <Navbar
            setToggledNavBar={setToggledNavBar}
            toggledNavBar={toggledNavBar}
          />
          <div
            className={`${toggledNavBar ? 'pl-[280px]' : 'pl-[80px]'} h-full w-full overflow-x-hidden pr-12 pt-32`}
          >
            <div className='mb-3 flex items-center justify-between'>
              <p className='text-4xl font-light text-white'>Dashboard</p>
              <div className='flex space-x-2 text-white'>
                <div className='f flex flex-col justify-between space-y-4 rounded-lg bg-[#202426] p-4 pr-16'>
                  <div className='flex items-center space-x-2'>
                    <Download className='w-4 text-blue-600' />
                    <h4 className='text-xs'>Total deposits</h4>
                  </div>
                  <p>$1 428 690 650</p>
                </div>
                <div className='flex flex-col justify-between space-y-4 rounded-lg bg-[#202426] p-4 pr-16'>
                  <div className='flex items-center space-x-2'>
                    <Upload className='w-4 text-blue-600' />
                    <h4 className='text-xs'>Total Borrow</h4>
                  </div>
                  <p>$535 919 214</p>
                </div>
              </div>
            </div>
            <PositionTables />
            <LandBTables />
          </div>
        </div>
      </main>
    </>
  );
}
