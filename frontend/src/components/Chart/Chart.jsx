import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { trainingsSelectors } from 'redux/trainings';
import { statisticsSelectors } from 'redux/statistics';
import Days from './Days';
import getOptions from './chartOptions';
import {
  getActData,
  getLabels,
  getPagesTodayRead,
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
import ChartStyled from './Chart.styled';

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
  const { t } = useTranslation('translation', { keyPrefix: 'chart' });
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: t('fact').toUpperCase(),
        fill: false,
        data: [],
        borderColor: 'rgba(255, 107, 8, 1)',
        backgroundColor: 'rgba(255, 107, 8, 1)',
        borderWidth: 2,
        tension: 0.5,
      },
      {
        label: t('plan').toUpperCase(),
        fill: false,
        data: [],
        borderColor: 'rgba(9, 30, 63, 1,)',
        backgroundColor: 'rgba(9, 30, 63, 1)',
        borderWidth: 2,
        tension: 0.5,
      },
    ],
  });

  useEffect(() => {
    const labels = getLabels(training, isCurrent);
    const act = getActData(training, isCurrent, statistics);
    const plan = getPlannedData(statistics, training, isCurrent);
    const data = {
      labels,
      datasets: [
        {
          label: t('fact').toUpperCase(),
          fill: false,
          data: act,
          borderColor: 'rgba(255, 107, 8, 1)',
          backgroundColor: 'rgba(255, 107, 8, 1)',
          borderWidth: 2,
          tension: 0.5,
        },
        {
          label: t('plan').toUpperCase(),
          fill: false,
          data: plan,
          borderColor: 'rgba(9, 30, 63, 1,)',
          backgroundColor: 'rgba(9, 30, 63, 1)',
          borderWidth: 2,
          tension: 0.5,
        },
      ],
    };

    setData(data);
  }, [training, isCurrent, statistics, t]);

  return (
    <>
      <ChartStyled>
        <Days>{getPagesTodayRead(training, isCurrent, statistics)}</Days>
        <Line data={data} options={getOptions(t('yLabel'), t('xLabel'))} />
      </ChartStyled>
    </>
  );
};

export default Chart;
