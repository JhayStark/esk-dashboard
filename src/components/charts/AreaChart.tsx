'use client';

import { generateRandomHexCode } from '@/lib/utils';
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  YAxis,
} from 'recharts';
import Container from '../card-components/Container';

const AreaChart = ({
  selectedMarkets,
  data,
  dataKey = 'name',
}: {
  selectedMarkets?: any[];
  data?: any[];
  dataKey?: string;
}) => {
  <div className='py-2 pr-2 bg-white rounded-2xl h-[500px] '>
    <ResponsiveContainer width='100%' height='100%'>
      <LineChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey={dataKey} />
        <YAxis />
        <Tooltip />
        <Legend />
        {selectedMarkets?.map(market => {
          return (
            <Line
              key={market}
              type='monotone'
              dataKey={market}
              stroke={generateRandomHexCode()}
              activeDot={{ r: 8 }}
            />
          );
        })}
      </LineChart>
    </ResponsiveContainer>
  </div>;
};

export default AreaChart;
