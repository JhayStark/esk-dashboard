import React from 'react';

const FarmerOverViewStats = ({
  title,
  icon,
  value,
  percentage,
}: {
  title: string;
  icon: React.ReactElement;
  value: string | number;
  percentage: string | number;
}) => {
  return (
    <div className='flex flex-col gap-5 p-5 bg-white rounded-lg shadow-3xl'>
      <p className='text-lg font-medium'>
        {title}{' '}
        <span
          className={`${
            percentage === '43%' ? 'text-red-300' : 'text-green-300'
          }`}
        >
          {percentage}
        </span>
      </p>
      <div className='flex flex-row items-center justify-between'>
        <p className='text-lg'>{value}</p>
        <div className='text-4xl 3xl:text-5xl'>{icon}</div>
      </div>
    </div>
  );
};
export default FarmerOverViewStats;
