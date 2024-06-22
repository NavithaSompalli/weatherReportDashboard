// src/components/WeatherTable.js
import React from 'react';
import './index.css'

const WeatherTable = ({ data }) => (
    <>
    <h1 className='table-report'>Weather report Table</h1>
  <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Temperature</th>
        <th>Condition</th>
      </tr>
    </thead>
    <tbody>
      {data.map((entry) => (
        <tr key={entry.date}>
          <td>{entry.date}</td>
          <td>{entry.temperature}°C</td>
          <td>{entry.condition}</td>
        </tr>
      ))}
    </tbody>
  </table>
  </>
);

export default WeatherTable;
