'use client';

import React, { useState } from 'react';

const RadioButton = ({
  name,
  state,
  toggle,
}: {
  name: string;
  state: any;
  toggle: () => void;
}) => {
  return (
    <button
      type='button'
      role='radio'
      aria-checked={state === name ? 'true' : 'false'}
      data-state={state === name ? 'checked' : 'unchecked'}
      value={name}
      className='min-w-[50px] font-medium rounded-full px-3 py-2 text-sm text-neutral-900 data-[state=checked]:bg-neutral-200 max-lg:border max-lg:border-neutral-200 md:min-w-[60px] lg:data-[state=checked]:bg-white lg:px-8 lg:py-2'
      data-radix-collection-item=''
      onClick={toggle}
    >
      {name}
    </button>
  );
};

const TabsFilter = () => {
  const [durationToggle, setDurationToggle] = useState('Week');
  console.log(durationToggle);
  return (
    <div className='inline-block lg:rounded-full lg:bg-neutral-200 lg:p-1'>
      <div
        role='radiogroup'
        aria-required='false'
        dir='ltr'
        className='flex items-center rtl:flex-row-reverse max-lg:gap-x-1.5'
      >
        <RadioButton
          name='Week'
          state={durationToggle}
          toggle={() => setDurationToggle('Week')}
        />
        <RadioButton
          name='Month'
          state={durationToggle}
          toggle={() => setDurationToggle('Month')}
        />
      </div>
    </div>
  );
};

export default TabsFilter;
