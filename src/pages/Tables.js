// src/pages/Tables.js
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Typography } from '@mui/material';
import './Tables.css';

const columns = [
  { field: 'id', headerName: 'ID', width: 150 },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'age', headerName: 'Age', width: 150 },
];

const rows = [
  { id: 1, name: 'John Doe', age: 25 },
  { id: 2, name: 'Jane Doe', age: 30 },
  { id: 3, name: 'Mary Johnson', age: 35 },
];

const Tables = () => {
  return (
    <div>
      <Typography variant="h4">Tables</Typography>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} pageSize={5} />
      </div>
    </div>
  );
};

export default Tables;