'use client';

import { useEffect, useState } from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export function Combobox({
  data = [],
  label = 'Select option',
  filter,
  searchParams = false,
}: {
  data: any[];
  label: string;
  filter?: string;
  searchParams?: boolean;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const queryParams = useSearchParams();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const handleSelect = (selectedValue: string) => {
    const params = new URLSearchParams(queryParams.toString());
    // Update the filter parameter with the selected value
    if (filter) {
      params.set(filter, selectedValue);
      // Construct the new URL
      const newUrl = `${pathname}?${params.toString()}`;
      // Push the new URL to the router
      router.push(newUrl);
    }
  };

  const handleCommandSelect = (currentValue: string) => {
    const selectedFramework = data.find(
      framework => framework.value.toLowerCase() === currentValue.toLowerCase()
    );
    const originalValue = selectedFramework?.value ?? '';

    setValue(originalValue);
    {
      searchParams && handleSelect(originalValue);
    }
    setOpen(false);
  };

  useEffect(() => {
    if (filter) {
      const filterValue = queryParams.get(filter);
      if (filterValue) {
        setValue(filterValue);
      }
    }
  }, []);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className='w-[200px] justify-between'
        >
          {value
            ? data.find(framework => framework.value === value)?.label
            : label}
          <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[200px]   p-0'>
        <Command>
          <CommandInput placeholder='Search framework...' />
          <CommandEmpty>No options found</CommandEmpty>
          <CommandGroup className='max-h-[400px] overflow-y-auto'>
            {data.map(framework => (
              <CommandItem
                key={framework.value}
                value={framework.value}
                onSelect={handleCommandSelect}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    value === framework.value ? 'opacity-100' : 'opacity-0'
                  )}
                />
                {framework.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
