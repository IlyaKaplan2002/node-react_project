import React from 'react';
import ChartStyled from './Chart.styled';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const options = {
  plugins: {
    title: {
      display: true,
      text: 'Custom Chart Title',
    },
    legend: {
      display: false,
    },
  },

  responsive: true,

  scales: {
    x: {
      ticks: {
        display: false,
      },
      display: true,
      title: {
        display: true,
        text: 'TIME',
        align: 'end',
        font: {
          size: 12,
        },
      },
    },

    y: {
      display: true,
      ticks: {
        display: false,
      },

      grid: {
        display: false,
      },
    },
  },
};

const labels = [1, 2, 3, 4, 5, 6, 7, 8]; // from back - fetch

const data = {
  labels,
  datasets: [
    {
      label: 'PLAN',
      data: [1, 2, 3, 4, 5, 6], //from back
      borderColor: 'rgba(9, 30, 63, 1,)',
      backgroundColor: 'rgba(9, 30, 63, 1)',
    },
    {
      label: 'ACT',
      data: [1, 2, 6, 8], //from back
      borderColor: 'rgba(255, 107, 8, 1)',
      backgroundColor: 'rgba(255, 107, 8, 1)',
    },
  ],
};

const Chart = () => {
  return (
    <ChartStyled>
      <Line data={data} options={options} />
    </ChartStyled>
  );
};

export default Chart;
