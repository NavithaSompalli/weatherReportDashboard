// src/components/WeatherChart.js
import React from 'react';
import { BarChart,Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './index.css'

const WeatherChart = ({ data }) => (
  <ResponsiveContainer width="100%" height={400} className="line-chart" width={600}>
    <BarChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="temperature" fill="#8884d8" />
    </BarChart>
  </ResponsiveContainer>
);

export default WeatherChart;
