import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'bg-white shadow-sm w-full rounded-lg p-4 overflow-auto ',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
