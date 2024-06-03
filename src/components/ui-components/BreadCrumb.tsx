'use client';

import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from '@/components/ui/breadcrumb';
import { usePathname } from 'next/navigation';
import { AiFillHome } from 'react-icons/ai';

const BreadCrumb = () => {
  const pathName = usePathname();
  const pathSegements = pathName.split('/').filter(Boolean).slice(1);
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href='/app' className='flex items-center gap-x-1'>
            <AiFillHome />
            Dashboard
          </BreadcrumbLink>
        </BreadcrumbItem>
        {pathSegements.length !== 0 && <BreadcrumbSeparator />}
        {pathSegements.map((path, index) => {
          const isLast = index === pathSegements.length - 1;
          if (!isLast) {
            return (
              <>
                <BreadcrumbItem key={path}>
                  <BreadcrumbLink
                    href={`/${pathSegements.slice(0, index + 1).join('/')}`}
                  >
                    {path}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {!isLast && <BreadcrumbSeparator />}
              </>
            );
          } else {
            return (
              <BreadcrumbItem key={path}>
                <BreadcrumbPage>{path}</BreadcrumbPage>
              </BreadcrumbItem>
            );
          }
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadCrumb;
