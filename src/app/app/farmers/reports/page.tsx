import React from 'react';
import { BiMale, BiFemale } from 'react-icons/bi';
import { GiFarmTractor } from 'react-icons/gi';
import { FaGlobeAfrica } from 'react-icons/fa';
import { ageGroupBarGraph, regionBarGraph } from '../../../../../farmerData';
import FarmerOverViewStats from '@/components/card-components/FarmerOverViewStats';

const Page = () => {
  return (
    <div className='space-y-5'>
      <div className='md:grid-cols-2  lg:grid-cols-4 gap-4 font-sans  grid'>
        <FarmerOverViewStats
          title='All Countries'
          icon={<FaGlobeAfrica className='text-primary' />}
          value={20}
          percentage=''
        />
        <FarmerOverViewStats
          title='Female Farmers'
          icon={<BiFemale className='text-[#85B6FF]' />}
          value={'687,484'}
          percentage={'43%'}
        />
        <FarmerOverViewStats
          title='Male Farmers'
          icon={<BiMale className='text-[#FFD233]' />}
          value={'911,317'}
          percentage={'57%'}
        />
        <FarmerOverViewStats
          title='Total Farmers'
          icon={<GiFarmTractor className='text-[#4ECB71]' />}
          value='1,598,801'
          percentage=''
        />
      </div>
      <div className='grid grid-cols-4 gap-4 font-sans  '>
        <div className='col-span-4 px-5 py-2 bg-white rounded-lg lg:col-span-3 text-white '>
          test
        </div>
        <div className='flex-col items-center hidden px-3 3xl:px-8 overflow-y-auto bg-white rounded-lg lg:flex  max-h-[46rem] '>
          <p className='py-3 text-lg font-medium text-center bg-white 3xl:text-lg'>
            Regional Distribution
          </p>
          <div className='flex flex-col w-full gap-5 py-2'>
            {regionBarGraph?.map(region => (
              <div className='grid w-full grid-cols-4 ' key={region.name}>
                <p className={` text-left col-span-3 text-primary `}>
                  {region.name.toUpperCase()}
                </p>
                <p className='font-medium text-right '>
                  {region.male + region.female}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
