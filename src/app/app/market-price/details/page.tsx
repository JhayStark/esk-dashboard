'use client';

import React, { useMemo } from 'react';
import { Combobox } from '@/components/ui-components/ComboBox';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  useGetCountriesQuery,
  useGetMarketPricesQuery,
} from '@/lib/features/marketApiSlice';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import TabsFilter from '@/components/ui-components/TabsFilter';
import { Filter } from 'lucide-react';
import { TableColumn } from 'react-data-table-component';
import ServerSideDataTableBase from '@/components/datatable-base/ServerSideDataTableBase';
import AreaChart from '@/components/charts/AreaChart';

const pricesColumns: TableColumn<any>[] = [
  {
    name: 'Commodity',
    selector: row => row['commodity'],
    sortable: true,
  },
  {
    name: 'Market',
    selector: row => row['market'],
    sortable: true,
  },
  {
    name: 'Average Price',
    selector: row => row['averagePrice'],
    sortable: true,
  },
  {
    name: 'Price type',
    selector: row => row['priceType'],
    sortable: true,
  },
  {
    name: 'Date Recorded',
    selector: row => new Date(row['dateCollected']).toLocaleDateString(),
  },
];

const Page = () => {
  const router = useRouter();
  const pathname = usePathname();
  const queryParams = useSearchParams();
  const selectedCountry = queryParams.get('country') || '';
  const selectedRegion = queryParams.get('region');
  const selectedMarket = queryParams.get('market') || '';
  const pageNumber = queryParams.get('pageNumber');
  const pageSize = queryParams.get('pageSize');
  const params = new URLSearchParams(queryParams.toString());
  const { data } = useGetMarketPricesQuery({
    pageNumber,
    pageSize,
    country: selectedCountry,
  });
  const { data: countries } = useGetCountriesQuery({});

  const countryObjects = useMemo(() => countries?.data || [], [countries]);

  const countryOptions = useMemo(() => {
    if (countryObjects) {
      return Object.keys(countryObjects).map(country => ({
        label: country,
        value: country,
      }));
    } else {
      return [];
    }
  }, [countryObjects]);

  const regionOptions = useMemo(() => {
    if (countryOptions.length && selectedCountry) {
      return Object.keys(countryObjects[selectedCountry]).map(region => ({
        label: region,
        value: region,
      }));
    } else {
      return [];
    }
  }, [countryOptions, countryObjects, selectedCountry]);

  const marketOptions = useMemo(() => {
    if (countryOptions.length && selectedCountry && selectedRegion) {
      const markerts: string[] =
        countryObjects[selectedCountry][selectedRegion];
      return markerts.map(market => ({
        label: market,
        value: market,
      }));
    } else {
      return [];
    }
  }, [selectedRegion, selectedCountry, countryObjects]);

  const handlePerRowsChange = (pageSize: number, page: number) => {
    params.set('pageSize', pageSize.toString());
    params.set('pageNumber', page.toString());
    const newUrl = `${pathname}?${params.toString()}`;
    router.push(newUrl);
  };

  const handlePageChange = (page: number) => {
    params.set('pageNumber', page.toString());
    const newUrl = `${pathname}?${params.toString()}`;
    router.push(newUrl);
  };

  return (
    <>
      <section>
        <AreaChart />
      </section>
      <div className='flex justify-between items-center'>
        <Popover>
          <PopoverTrigger className='lg:hidden flex items-center gap-x-2 text-primary font-medium bg-white rounded-md p-2 shadow-md'>
            <Filter />
          </PopoverTrigger>
          <PopoverContent className='flex flex-col w-fit gap-y-2 p-1'>
            <Combobox
              data={countryOptions}
              label='Select country'
              filter='country'
              searchParams
            />
            <Combobox
              data={regionOptions}
              label='Select region'
              filter='region'
              searchParams
            />
            <Combobox
              data={marketOptions}
              label='Select market'
              filter='market'
              searchParams
            />
          </PopoverContent>
        </Popover>
        <div className='hidden lg:flex gap-1 flex-wrap'>
          <Combobox
            data={countryOptions}
            label='Select country'
            filter='country'
            searchParams
          />
          <Combobox
            data={regionOptions}
            label='Select region'
            filter='region'
            searchParams
          />
          <Combobox
            data={marketOptions}
            label='Select market'
            filter='market'
            searchParams
          />
        </div>
        <TabsFilter />
      </div>
      <ServerSideDataTableBase
        columns={pricesColumns}
        data={data?.data}
        paginationTotalRows={data?.totalRowCount}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handlePerRowsChange}
      />
    </>
  );
};

export default Page;
