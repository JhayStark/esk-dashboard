import React from 'react';
import { useRouter } from 'next/navigation';
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io';
import InnerAreaChart from '../charts/InnerAreaChart';

const data = [
  {
    name: 'Page A',
    uv: 4000,
  },
  {
    name: 'Page B',
    uv: 3000,
  },
  {
    name: 'Page C',
    uv: 2000,
  },
  {
    name: 'Page D',
    uv: 2780,
  },
  {
    name: 'Page E',
    uv: 1890,
  },
  {
    name: 'Page F',
    uv: 2390,
  },
  {
    name: 'Page G',
    uv: 3490,
  },
];

const CardWithChart = ({ commodity = 'Corn', avg, route }: any) => {
  const router = useRouter();
  let detailsRoute = route
    ? `/${route}/${commodity}`
    : `/market-price/${commodity}`;
  return (
    <div className='flex flex-col justify-between w-full border-[1px] border-neutral-200 h-full shadow-lg rounded-2xl'>
      <div className='p-5'>
        <div className=' font-medium'>{commodity}</div>
        <div>
          <p className='text-lg'>GHS 13.67</p>
          <p
            className={`${
              avg < 0 ? 'text-[#F62929]' : 'text-[#4a8f62]'
            } flex items-center`}
          >
            {avg < 0 ? '-' : '+'}1.236%
            {avg < 0 ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}
          </p>
        </div>
      </div>
      <div className='h-16 overflow-hidden rounded-b-2xl'>
        <InnerAreaChart data={data} avg={avg} />
      </div>
    </div>
  );
};

export default CardWithChart;
