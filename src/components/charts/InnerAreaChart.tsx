import React from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

const InnerAreaChart = ({ data, avg = 1 }: any) => {
  const strokeColor = avg < 0 ? '#F62929' : '#89C59E';
  const fillColor = avg < 0 ? '#FEF7F7' : '#F6FAF8';
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{ bottom: 0, left: 0, right: 0, top: 0 }}
      >
        <Area
          type='monotone'
          dataKey='uv'
          stroke={strokeColor}
          fill={fillColor}
          strokeWidth={3}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default InnerAreaChart;
