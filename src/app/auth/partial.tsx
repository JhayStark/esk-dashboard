'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
import { InputFormField } from '@/components/form/fields';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { useLoginMutation } from '@/lib/features/auth/authApiSlice';
import { useToast } from '@/components/ui/use-toast';

const defaultValues = {
  email: 'admin@esoko.com',
  password: 'password123',
};

const formSchema = z.object({
  email: z.string().email({ message: 'Enter a valid email address' }),
  password: z
    .string()
    .min(1, { message: 'Password must be at least 8 characters' }),
});

const AuthPartial = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [login] = useLoginMutation();
  const form = useForm({ defaultValues, resolver: zodResolver(formSchema) });
  const { toast } = useToast();

  const onSubmit = async (data: any) => {
    try {
      setIsLoading(true);
      console.log(data);
      await login(data).unwrap();
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast({
        title: 'Authentication error',
        description: 'Email or password is not valid',
        variant: 'destructive',
      });
      console.log(error);
    }
  };
  return (
    <div className='grid h-screen grid-cols-8 font-sans max-w-[2000px]  px-8 md:px-5 lg:px-0 '>
      <div className=' hidden col-span-2 bg-[#055189] xl:flex flex-col items-center justify-between py-10 px-5 3xl:px-10'>
        <Image
          src='/images/white_logo.png'
          alt='logo'
          width={150}
          height={300}
          className='self-start'
        />
        <Image src='/images/x00cagdh.png' alt='logo' width={400} height={400} />
        <div className='flex flex-row items-center justify-between w-full text-white 3xl:px-6'>
          <p className='cursor-pointer'>About</p>
          <p className='cursor-pointer'>Privacy</p>
          <p className='cursor-pointer'>Terms of Use</p>
          <p className='cursor-pointer'>FAQ</p>
        </div>
      </div>
      <div className='flex flex-row items-center col-span-8 xl:col-span-6'>
        <div className='flex w-full  min-h-[40vh] md:min-h-fit justify-evenly '>
          <Form {...form}>
            <form
              className='flex flex-col justify-center w-full max-w-[438px]  lg:w-[432px] 3xl:w[30%]'
              action=''
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <div className='bg-[#055189] px-2 py-10 fixed top-0 right-0 left-0 w-[100vw] xl:hidden'>
                <Image
                  src='/images/white_logo.png'
                  alt='logo'
                  width={150}
                  height={300}
                  className='self-start'
                />
              </div>
              <div className='md:w-[80%] lg:w-full space-y-6'>
                <div className='text-[#055189] text-xl xl:text-2xl  '>
                  <p>Login to your</p>
                  <p>management dashboard</p>
                </div>
                <InputFormField
                  form={form}
                  name='email'
                  placeholder='john@gmail.com'
                />
                <InputFormField
                  form={form}
                  name='password'
                  placeholder='********'
                  type='password'
                />
                <div className='flex flex-col md:flex-row md:gap-y-0 gap-y-2 md:items-center md:justify-between w-full'>
                  <Button disabled={isLoading} type='submit'>
                    {isLoading ? (
                      <>
                        <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                        Please wait
                      </>
                    ) : (
                      'Login to account'
                    )}
                  </Button>
                  <p className='text-xs underline cursor-pointer 3xl:text-base decoration-dashed underline-offset-4 text-[#055189]'>
                    Forgot Password?
                  </p>
                </div>
              </div>
            </form>
          </Form>

          <Image
            alt='test'
            src='/images/Meeting.svg'
            width={500}
            height={500}
            className='hidden object-cover xl:block '
          />
          <Image
            alt='test'
            src='/images/Meeting.svg'
            width={300}
            height={500}
            className='hidden object-cover md:block xl:hidden'
          />
        </div>
      </div>
    </div>
  );
};

export default AuthPartial;
