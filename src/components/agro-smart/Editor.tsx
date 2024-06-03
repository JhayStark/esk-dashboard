'use client';

import React, { useMemo } from 'react';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useGetFarmerTypesQuery } from '@/lib/features/agroSmartApiSlice';
import { Form } from '../ui/form';
import {
  InputFormField,
  SelectFormField,
  TextAreaFormField,
} from '../ui-components/formFields';
import { Button } from '../ui/button';

const formSchema = z.object({
  farmer_type: z.string().min(1, { message: 'Please select a farmer type' }),
  commodity: z.string().min(1, { message: 'Please select a commodity' }),
  location: z.string().min(1, { message: 'Please enter a location' }),
  title: z.string().min(1, { message: 'Please enter a title' }),
  body: z.string().min(1, { message: 'Please enter a body' }),
});

const Editor = () => {
  const { data: farmerTypes } = useGetFarmerTypesQuery({});
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const farmerTypeOptions = useMemo(() => {
    return farmerTypes?.map((farmerType: any) => ({
      value: farmerType.type,
      label: farmerType.type,
    }));
  }, [farmerTypes]);

  const commodityOptions = useMemo(() => {
    const selectedFarmerType = form.watch('farmer_type');
    const farmerType = farmerTypes?.find(
      (farmerType: any) => farmerType.type === selectedFarmerType
    );
    return farmerType?.commodities.map((commodity: any) => ({
      value: commodity,
      label: commodity,
    }));
  }, [form.watch('farmer_type'), farmerTypeOptions]);
  console.log(form.watch());
  return (
    <>
      <Form {...form}>
        <form action='' className=' flex flex-col h-full py-1 '>
          <div className='flex items-center justify-between'>
            <SelectFormField
              form={form}
              name='farmer_type'
              placeholder='Select a farmer type'
              options={farmerTypeOptions || []}
            />
            <SelectFormField
              form={form}
              name='commodity'
              placeholder='Select a commodity'
              options={commodityOptions || []}
            />
          </div>
          <InputFormField form={form} name='title' placeholder='Title' />
          <InputFormField form={form} name='location' placeholder='Location' />
          <div className=' grow'>
            <TextAreaFormField
              form={form}
              name='body'
              placeholder='Enter article'
              className=' w-full h-[95%] '
            />
          </div>
          <div className='flex justify-between items-center'>
            <p>Add voice messages</p>
            <div className='flex gap-x-2'>
              <Button variant='destructive'>Cancel</Button>
              <Button>Submit</Button>
            </div>
          </div>
        </form>
      </Form>
    </>
  );
};

export default Editor;
