'use client';

import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const RequireAuth = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const router = useRouter();
  const pathName = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const persistedData = localStorage.getItem('persistedData');
    const userSession = persistedData ? JSON.parse(persistedData) : false;

    const isProtectedRoute = !(pathName.includes('auth') || pathName === '/');

    if (!userSession && isProtectedRoute) {
      router.replace('/auth');
    } else if (userSession && !isProtectedRoute) {
      router.replace('/app');
    } else {
      setLoading(false);
    }
  }, [pathName, router]);

  if (loading) {
    return null;
  }

  return <>{children}</>;
};

export default RequireAuth;
