'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { selectUser } from '@/lib/features/auth/authSlice';
import { useAppSelector } from '@/lib/hooks';

export default function Home() {
  const user = useAppSelector(selectUser);
  const router = useRouter();
  useEffect(() => {
    router.push('/app');
  }, []);
  return (
    <main className='h-screen  flex justify-center items-center font-medium'>
      Loading....
    </main>
  );
}
