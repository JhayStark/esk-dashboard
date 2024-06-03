'use client';

import StatsOverview from '@/components/card-components/StatsOverView';
import { FaUsers, FaUserSlash } from 'react-icons/fa';
import { AiOutlineCheckCircle, AiOutlineEye } from 'react-icons/ai';
import {
  useClientServiceTotalsQuery,
  useGetClientsQuery,
} from '@/lib/features/clientApiSlice';
import Link from 'next/link';
import { TableColumn } from 'react-data-table-component';
import ClientSideDataTableBase from '@/components/datatable-base/ClientSideDataTableBase';

const columns: TableColumn<any>[] = [
  {
    name: 'Joined',
    selector: row => row.dateJoined,
    sortable: true,
  },
  {
    name: 'Name',
    selector: row => row.clientName,
    sortable: true,
  },
  {
    name: 'Balance',
    selector: row => row.smsBalance,
    center: true,
  },
  {
    name: 'Forms',
    selector: row => row.totalForms,
    sortable: true,
    center: true,
  },
  {
    name: 'Action',
    cell: row => (
      <div className=' text-2xl text-[#699BF7] cursor-pointer'>
        <Link href={`/clients/${row.client_id}`}>
          <AiOutlineEye />
        </Link>
      </div>
    ),
    center: true,
  },
];

const Page = () => {
  const { data: serviceTotals } = useClientServiceTotalsQuery({});
  const { data: clients } = useGetClientsQuery({ pageSize: 100 });

  console.log(serviceTotals);

  return (
    <>
      <div className='grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 gap-3 md:gap-[1.4rem] '>
        <StatsOverview
          title='Total Clients'
          icon={<FaUsers />}
          value={serviceTotals?.data?.totalUsers}
        />
        <StatsOverview
          title='Active Clients'
          icon={<AiOutlineCheckCircle />}
          value={serviceTotals?.data?.activeUsers}
        />
        <StatsOverview
          title='Disabled Clients'
          icon={<FaUserSlash />}
          value={serviceTotals?.data?.deletedUsers}
        />
      </div>
      <div className='grid grid-cols-3 gap-[1.4rem] mb-14 '>
        <div className='p-4 hidden lg:block bg-white rounded-lg  max-h-[25rem] 3xl:px-7'>
          test
        </div>
        <div className='h-full col-span-3  lg:col-span-2'>
          <ClientSideDataTableBase
            columns={columns}
            data={clients?.paginatedData}
            title='Clients'
          />
        </div>
      </div>
    </>
  );
};

export default Page;
