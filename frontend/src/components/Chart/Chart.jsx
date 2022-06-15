import React, { useEffect, useState } from 'react';
import ChartStyled from './Chart.styled';
import Days from './Days';
import getOptions from './chartOptions';
import { useSelector } from 'react-redux';
import {
  getActData,
  getDaysAmount,
  getLabels,
  getPlannedData,
} from './helpers';

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
import { trainingsSelectors } from 'redux/trainings';
import { statisticsSelectors } from 'redux/statistics';

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
  const training = useSelector(trainingsSelectors.getTraining);
  const isCurrent = useSelector(trainingsSelectors.getIsCurrent);
  const statistics = useSelector(statisticsSelectors.getItems);
  const [labels, setLabels] = useState([]);
  const [actualData, setActualData] = useState([]);
  const [plannedData, setPlannedData] = useState([]);

  useEffect(() => {
    setLabels(getLabels(training, isCurrent));
    setActualData(getActData(training, isCurrent, statistics));
    setPlannedData(getPlannedData(statistics, training, isCurrent));
  }, [training, isCurrent, statistics]);

  const data = {
    labels,
    datasets: [
      {
        label: 'PLAN',
        fill: false,
        data: plannedData,
        borderColor: 'rgba(9, 30, 63, 1,)',
        backgroundColor: 'rgba(9, 30, 63, 1)',
        borderWidth: 2,
        tension: 0.5,
      },
      {
        label: 'ACT',
        fill: false,
        data: actualData,
        borderColor: 'rgba(255, 107, 8, 1)',
        backgroundColor: 'rgba(255, 107, 8, 1)',
        borderWidth: 2,
        tension: 0.5,
      },
    ],
  };

  return (
    <>
      <ChartStyled>
        <Days>{getDaysAmount(training, isCurrent)}</Days>
        <Line redraw={true} data={data} options={getOptions()} />
      </ChartStyled>
    </>
  );
};

export default Chart;
