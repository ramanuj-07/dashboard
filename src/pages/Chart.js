// src/pages/Charts.js
import React from 'react';
import { Typography } from '@mui/material';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import './Charts.css';

const data = [
  { name: 'Jan', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 300, pv: 4567, amt: 2400 },
  { name: 'Mar', uv: 200, pv: 1398, amt: 2400 },
];

const Charts = () => {
  return (
    <div>
      <Typography variant="h4">Charts</Typography>
      <LineChart width={600} height={300} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default Charts;