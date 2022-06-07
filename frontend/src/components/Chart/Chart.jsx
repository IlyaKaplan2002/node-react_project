import React from 'react';
import ChartStyled from './Chart.styled';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Title,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const day = 4; // from back

const options = {
  plugins: {
    title: {
      display: true,
      text: ` ${'Amont of pages / DA'.toUpperCase()} ${day}`,
      align: 'start',
      font: {
        size: 12,
        weight: 500,
      },
    },
    legend: {
      beginAtZero: true,
      display: false,
    },
    tooltip: {
      beginAtZero: true,
      backgroundColor: 'rgba(245, 247, 250, 1)',
      displayColors: false,
      bodyColor: ' rgba(9, 30, 63, 1)',
      bodyFont: {
        size: 12,
        weight: 600,
      },
      bodyAlign: 'center',
      borderColor: ' rgba(9, 30, 63, 0.1)',
      titleFont: { size: 0 },
    },
  },

  responsive: true,
  maintainAspectRatio: false,

  scales: {
    x: {
      beginAtZero: true,
      ticks: {
        display: false,
      },

      title: {
        display: true,
        text: `${'time'.toUpperCase()}`,
        align: 'end',
        font: {
          size: 12,
          weight: 500,
        },
      },

      grid: { display: false },
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
      fill: false,
      data: [0, 2, 3, 4, 5, 6, 5, 4], //from back
      borderColor: 'rgba(9, 30, 63, 1,)',
      backgroundColor: 'rgba(9, 30, 63, 1)',
      borderWidth: 2,
    },
    {
      label: 'ACT',
      fill: false,
      data: [1, 2, 6, 8, 5, 6, 3, 2], //from back
      borderColor: 'rgba(255, 107, 8, 1)',
      backgroundColor: 'rgba(255, 107, 8, 1)',
      borderWidth: 2,
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
