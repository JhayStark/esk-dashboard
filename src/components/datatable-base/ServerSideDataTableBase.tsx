'use client';

import React from 'react';
import DataTable, { TableProps } from 'react-data-table-component';
import Container from '@/components/card-components/Container';

const customStyles = {
  rows: {
    style: {
      paddingTop: '1rem',
      paddingBottom: '1rem',
      fontSize: '0.8rem',
    },
  },
  headCells: {
    style: {
      paddingTop: '1rem',
      paddingBottom: '1rem',
      fontSize: '0.9rem',
    },
  },
  table: { style: { overflow: 'auto', maxHeight: 700, minHeight: 300 } },
};

const ServerSideDataTableBase = ({
  columns,
  data,
  title,
  paginationTotalRows,
  onChangeRowsPerPage,
  onChangePage,
}: TableProps<any>) => {
  return (
    <Container>
      <div className='px-4 font-medium text-lg mb-2'>
        <h3>{title}</h3>
      </div>
      <DataTable
        columns={columns}
        data={data}
        customStyles={customStyles}
        responsive={true}
        pagination
        paginationServer
        paginationTotalRows={paginationTotalRows}
        onChangeRowsPerPage={onChangeRowsPerPage}
        onChangePage={onChangePage}
      />
    </Container>
  );
};

export default ServerSideDataTableBase;
