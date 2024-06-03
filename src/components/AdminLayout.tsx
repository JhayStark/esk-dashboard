'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from '@/components/ui/dropdown-menu';
import {
  BookUser,
  CandlestickChart,
  ClipboardIcon,
  CloudSun,
  LayoutDashboard,
  SettingsIcon,
  Tractor,
  UsersIcon,
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import { AvatarImage, AvatarFallback, Avatar } from '@/components/ui/avatar';
import BreadCrumb from './ui-components/BreadCrumb';

interface LinkComponentsProps {
  name: string;
  icon?: React.ReactNode;
  link: string;
}

function LinkComponent({ name, icon, link }: LinkComponentsProps) {
  const pathSegments = usePathname().split('/');
  const routeName = pathSegments.slice(1, 3).join('/');
  const linkSegments = link.split('/');
  const linkName = linkSegments.slice(1, 3).join('/');

  const isActive = routeName == linkName;
  return (
    <Link
      className={`flex items-center justify-center py-6  ${
        !isActive
          ? ' transition-all text-white '
          : 'bg-[#EDF3FF] text-[#055189]   transition-all '
      } `}
      href={link}
    >
      <div className='w-48 flex items-center gap-x-3  '>
        {icon}
        <span className='[1.174rem] font-medium'>{name}</span>
      </div>
    </Link>
  );
}

function MobileLinkComponent({ icon, link }: LinkComponentsProps) {
  const pathSegments = usePathname().split('/');
  const routeName = pathSegments.slice(1, 3).join('/');
  const linkSegments = link.split('/');
  const linkName = linkSegments.slice(1, 3).join('/');

  const isActive = routeName == linkName;
  return (
    <Link
      className={`flex flex-col items-center justify-center  ${
        !isActive
          ? 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
          : '  text-blue-900 transition-all hover:text-blue-900 dark:bg-blue-800 dark:text-blue-50 dark:hover:text-blue-50'
      }`}
      href={link}
    >
      {icon}
    </Link>
  );
}

const menuItems = [
  {
    name: 'Dashboard',
    active: true,
    icon: <LayoutDashboard className='h-6 w-6' />,
    link: '/app',
  },
  {
    name: 'Clients',
    active: true,
    icon: <BookUser className='h-6 w-6' />,
    link: '/app/clients',
  },
  // {
  //   name: 'Reports',
  //   icon: <ClipboardIcon className='h-6 w-6' />,
  //   link: '/app/reports',
  // },
  {
    name: 'Farmers',
    icon: <Tractor className='h-6 w-6' />,
    link: '/app/farmers',
  },
  {
    name: 'Agro-Smart',
    icon: <UsersIcon className='h-6 w-6' />,
    link: '/app/agro-smart',
  },
  {
    name: 'Market Prices',
    icon: <CandlestickChart className='h-6 w-6' />,
    link: '/app/market-price',
  },
  // {
  //   name: 'Weather',
  //   icon: <CloudSun className='h-6 w-6' />,
  //   link: '/app/weather',
  // },
  {
    name: 'Settings',
    icon: <SettingsIcon className='h-6 w-6' />,
    link: '/app/settings',
  },
];

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='grid min-h-screen w-full grid-cols-1  xl:grid-cols-[280px_1fr]'>
      <div className='hidden bg-[#073150] xl:block'>
        <div className='flex h-full max-h-screen flex-col gap-2'>
          <div className='flex h-[60px] items-center px-6'>
            <Link className='flex items-center gap-2 font-semibold' href='#'>
              <img src='/images/logo-1.png' className='w-40 3xl:w-60' />
            </Link>
          </div>
          <div className='flex-1 overflow-auto py-2'>
            <nav className='grid items-start  text-sm font-medium'>
              {menuItems?.map(item => (
                <LinkComponent
                  name={item.name}
                  key={item.name}
                  icon={item?.icon}
                  link={item?.link}
                />
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className='flex flex-col'>
        <header className='flex h-12  items-center justify-between bg-[#EDF3FF] xl:justify-end  px-2  md:px-6 dark:bg-gray-800/40'>
          <Link className='xl:hidden' href='/'>
            <img src='/images/logo-1.png' className='w-40 3xl:w-60' />
            <span className='sr-only'>Home</span>
          </Link>
          <div className='hidden xl:block mr-auto'>
            <BreadCrumb />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className='rounded-full border  border-gray-200 w-8 h-8 dark:border-gray-800'
                size='icon'
                variant='ghost'
              >
                <Avatar className=' rounded-full'>
                  <AvatarImage alt='@shadcn' src='' />
                  <AvatarFallback>ES</AvatarFallback>
                </Avatar>
                <span className='sr-only'>Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuLabel>Super Admin</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {/* <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem> */}
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <div className='flex bg-[#EDF3FF]  max-h-[calc(100vh-109px)] xl:max-h-[calc(100vh-48px)] overflow-auto flex-1  flex-col gap-4 p-2 md:p-4 md:gap-8 '>
          {children}
        </div>
        <div className='xl:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-950 border-t dark:border-gray-800 shadow-lg'>
          <div className='flex items-center justify-around h-14'>
            {menuItems?.map(item => (
              <MobileLinkComponent
                name={item.name}
                key={item.name}
                icon={item?.icon}
                link={item?.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
