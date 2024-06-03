'use client';

import React from 'react';
import StatsOverview from '@/components/card-components/StatsOverView';
import { AudioLines, ClipboardType, MessageSquareMore } from 'lucide-react';
import { TableColumn } from 'react-data-table-component';
import ClientSideDataTableBase from '@/components/datatable-base/ClientSideDataTableBase';
import { useTransactionsQuery } from '@/lib/features/clientApiSlice';

const recentPaymentsColumns: TableColumn<any>[] = [
  {
    name: 'Transaction ID',
    selector: row => row['transactionId'],
  },
  {
    name: 'Client Name',
    selector: row => row['clientName'],
    sortable: true,
  },
  {
    name: 'Date',
    selector: row => row['transactionDate'],
    sortable: true,
  },
  {
    name: 'Amount',
    selector: row => row['amount'],
    sortable: true,
  },
  {
    name: 'Status',
    selector: row => row['status'],
    cell: row => (
      <p
        className={`${
          row.status
            ? 'text-green-500 bg-green-200 '
            : 'text-red-500 bg-red-200'
        } rounded-md px-2 text-sm`}
      >
        {row.status ? 'Approved' : 'Failed'}
      </p>
    ),
    sortable: true,
  },
  {
    name: 'Service',
    selector: row => row.service,
    sortable: true,
  },
];

const Page = () => {
  const { data, isLoading } = useTransactionsQuery({ pageSize: 50 });
  return (
    <div className='space-y-5'>
      <div className='grid md:grid-cols-3 gap-3 lg:gap-[1.4rem]'>
        <StatsOverview title='Voice' icon={<AudioLines />} value='20' />
        <StatsOverview title='Sms' icon={<MessageSquareMore />} value='20' />
        <StatsOverview title='Surveys' icon={<ClipboardType />} value='20' />
      </div>
      <ClientSideDataTableBase
        columns={recentPaymentsColumns}
        data={data?.paginatedData || []}
        title='Recent payments'
      />
    </div>
  );
};

export default Page;
