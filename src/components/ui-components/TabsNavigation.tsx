'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const TabsNavigation = ({ menuItems }: { menuItems: any }) => {
  const pathName = usePathname();
  return (
    <div className={`grid grid-cols-2 gap bg-white rounded-md`}>
      {menuItems.map((item: { title: string; link: string }) => {
        return (
          <Link href={item.link} key={item.link}>
            <p
              className={`${
                pathName == item.link && 'bg-blue-950 text-white'
              } rounded-md px-2 py-1 text-center font-medium `}
            >
              {item.title}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default TabsNavigation;
