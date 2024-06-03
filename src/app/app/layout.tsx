import ClientLayout from '@/components/AdminLayout';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <ClientLayout>{children}</ClientLayout>;
};

export default Layout;
