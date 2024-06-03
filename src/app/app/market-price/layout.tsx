import TabsNavigation from '@/components/ui-components/TabsNavigation';
import React from 'react';

const menuItems = [
  {
    link: '/app/market-price',
    title: 'Dashboard',
  },
  {
    link: '/app/market-price/details',
    title: 'Details',
  },
];

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className='space-y-3'>
      <div className='flex items-center justify-center'>
        <TabsNavigation menuItems={menuItems} />
      </div>
      {children}
    </div>
  );
};

export default Layout;
