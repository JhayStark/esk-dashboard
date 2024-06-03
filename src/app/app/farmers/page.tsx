import FarmerOverViewStats from '@/components/card-components/FarmerOverViewStats';
import { BiMale, BiFemale } from 'react-icons/bi';
import { GiFarmTractor } from 'react-icons/gi';
import { FaGlobeAfrica } from 'react-icons/fa';
import BarGraph from '@/components/charts/BarGraph';
import { ageGroupBarGraph, regionBarGraph } from '../../../../farmerData';

const Page = () => {
  return (
    <div className='space-y-5'>
      <div className=' md:grid-cols-2 lg:grid-cols-4 gap-4 font-sans  grid'>
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
      <div className='w-full px-5 py-2  bg-white rounded-lg'>
        <p className='py-2 mb-2 text-lg font-medium '>
          Regional Distribution of Farmers
        </p>
        <div className='h-[500px]'>
          <BarGraph data={regionBarGraph} />
        </div>
      </div>
      <div className='w-full px-5 py-2  bg-white rounded-lg '>
        <p className='py-2 mb-2 text-lg font-medium '>
          Age Distribution of Farmers
        </p>
        <div className='h-[500px]'>
          <BarGraph data={ageGroupBarGraph} />
        </div>
      </div>
    </div>
  );
};

export default Page;
