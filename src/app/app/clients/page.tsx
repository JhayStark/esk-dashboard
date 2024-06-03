'use client';

import StatsOverview from '@/components/card-components/StatsOverView';
import { FaUsers, FaUserSlash } from 'react-icons/fa';
import { AiOutlineCheckCircle, AiOutlineEye } from 'react-icons/ai';
import {
  useClientServiceTotalsQuery,
  useGetClientServiceStatsQuery,
  useGetClientsQuery,
} from '@/lib/features/clientApiSlice';
import Link from 'next/link';
import { TableColumn } from 'react-data-table-component';
import ClientSideDataTableBase from '@/components/datatable-base/ClientSideDataTableBase';
import PieChartComponent from '@/components/charts/PieChartComponent';

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
        <AiOutlineEye />
      </div>
    ),
    center: true,
  },
];

const Page = () => {
  const { data: serviceTotals } = useClientServiceTotalsQuery({});
  const { data: clients } = useGetClientsQuery({ pageSize: 100 });
  const { data: serviceStatistics } = useGetClientServiceStatsQuery({});

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
        <div className='p-4 hidden lg:block bg-white rounded-lg shadow-3xl max-h-[25rem] 3xl:px-7'>
          <p className='font-medium xl:text-base 3xl:text-xl'>Services Used</p>
          <PieChartComponent />
          <div className='flex flex-row items-center justify-between'>
            <div className='flex flex-col gap-1'>
              <div className='w-5 h-2 rounded-xl bg-[#214BB8]' />
              <p className='text-lg font-medium'>
                {serviceStatistics
                  ? serviceStatistics?.totalUsers['Insyt']
                  : ''}
              </p>
              <p className='text-sm text-[#7E7E7E]'>Surveys</p>
            </div>
            <div className='flex flex-col gap-1'>
              <div className='w-5 h-2 rounded-xl bg-[#FE634E]' />
              <p className='text-lg font-medium'>
                {serviceStatistics ? serviceStatistics?.totalUsers['Sms'] : ''}
              </p>
              <p className='text-sm text-[#7E7E7E]'>Sms</p>
            </div>
            <div className='flex flex-col gap-1'>
              <div className='w-5 h-2 rounded-xl bg-[#45ADDA]' />
              <p className='text-lg font-medium'>
                {serviceStatistics
                  ? serviceStatistics?.totalUsers['Voice']
                  : ''}
              </p>
              <p className='text-sm text-[#7E7E7E]'>Voice</p>
            </div>
          </div>
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
