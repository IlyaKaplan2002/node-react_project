import React from 'react';
import ChartStyled from './Chart.styled';
import Days from './Days';
import options from './chartOptions';
import data from './chartDate';

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

const Chart = () => {
  return (
    <>
      <ChartStyled>
        <Days />
        <Line data={data} options={options} />
      </ChartStyled>
    </>
  );
};

export default Chart;
