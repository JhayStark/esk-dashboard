'use client';

import Calendar from '@/components/Calender';
import Editor from '@/components/agro-smart/Editor';
import WeatherWidget from '@/components/agro-smart/WeatherWidget';
import Container from '@/components/card-components/Container';
import moment from 'moment';
import React, { useState } from 'react';

const Page = () => {
  const [selectedDate, setSelectedDate] = useState(moment());
  const [selectedMonth, setSelectedMonth] = useState(moment());

  return (
    <div className='grid grid-cols-2 grid-rows-2 h-full gap-3'>
      <Container className='row-span-2 col-span-2 xl:col-span-1 bg-white p-1 xl:p-3'>
        <Editor />
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
        <WeatherWidget />
      </Container>
    </div>
  );
};

export default Page;
