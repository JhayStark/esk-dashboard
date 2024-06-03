import TabsNavigation from '@/components/ui-components/TabsNavigation';
import React from 'react';

const menuItems = [
  {
    link: '/app/farmers',
    title: 'Dashboard',
  },
  {
    link: '/app/farmers/reports',
    title: 'Farmers',
  },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
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
