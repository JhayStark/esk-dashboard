import TabsNavigation from '@/components/ui-components/TabsNavigation';
import React from 'react';

const menuItems = [
  {
    link: '/app/agro-smart',
    title: 'Climate Smart',
  },
  {
    link: '/app/agro-smart/agro-advice',
    title: 'Agro-Advice',
  },
];

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div className='flex items-center justify-center'>
        <TabsNavigation menuItems={menuItems} />
      </div>
      {children}
    </>
  );
};

export default Layout;
