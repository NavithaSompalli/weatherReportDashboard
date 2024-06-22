// src/components/WeatherChart.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const WeatherLineChart = ({ data }) => (
    
  <ResponsiveContainer  height={400} width={600}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
    </LineChart>
  </ResponsiveContainer>
 
);

export default WeatherLineChart;
