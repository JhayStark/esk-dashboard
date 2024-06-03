'use client';

import React, { useState } from 'react';
import Calendar from '@/components/Calender';
import Editor from '@/components/agro-smart/Editor';
import WeatherWidget from '@/components/agro-smart/WeatherWidget';
import Container from '@/components/card-components/Container';
import moment from 'moment';
import { useGetWeatherDataQuery } from '@/lib/features/agroSmartApiSlice';

const Page = () => {
  const [selectedDate, setSelectedDate] = useState(moment());
  const [selectedMonth, setSelectedMonth] = useState(moment());
  const [location, setLocation] = useState('East Legon');
  const { data } = useGetWeatherDataQuery({ location });

  return (
    <div className='grid grid-cols-2 grid-rows-2 h-full gap-3'>
      <Container className='row-span-2 col-span-2 xl:col-span-1 bg-white p-1 xl:p-3'>
        <Editor date={selectedDate} setLocation={setLocation} />
      </Container>
      <div className='hidden bg-white rounded-lg xl:block shadow-3xl'>
        <Calendar
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          published={[]}
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
        />
      </div>
      <Container className='hidden xl:block p-0 '>
        <WeatherWidget location={location} weatherData={data} />
      </Container>
    </div>
  );
};

export default Page;
