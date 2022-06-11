import React, { useEffect, useCallback, useState } from 'react';
import ChartStyled from './Chart.styled';
import Days from './Days';
import options from './chartOptions';
//import data from './chartDate';
import { getStatistic } from 'api/statistics';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { getDays } from './helpers';
import { statisticsActions } from 'redux/statistics';

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
  const [amountDays, setAmountDays] = useState();
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: 'PLAN',
        fill: false,
        data: [0, 2, 3, 4, 5, 6, 5, 4], //from back
        borderColor: 'rgba(9, 30, 63, 1,)',
        backgroundColor: 'rgba(9, 30, 63, 1)',
        borderWidth: 2,
        tension: 0.5,
      },
      {
        label: 'ACT',
        fill: false,
        data: [1, 2, 6, 8, 5, 6, 3, 2], //from back
        borderColor: 'rgba(255, 107, 8, 1)',
        backgroundColor: 'rgba(255, 107, 8, 1)',
        borderWidth: 2,
        tension: 0.5,
      },
    ],
  });

  const token = useSelector(authSelectors.getToken);
  const dispatch = useDispatch();

  const fetchAllDays = useCallback(async () => {
    try {
      const { statistic } = await getStatistic(token);
      dispatch(statisticsActions.init(statistic));
      console.log(statistic);
      const labels = getDays(statistic);
      setAmountDays(labels.length);
      setData({
        labels: labels,
      });
    } catch (error) {
      console.log(error);
    }
  }, [token, dispatch]);

  useEffect(() => {
    fetchAllDays();
  }, [fetchAllDays]);

  return (
    <>
      <ChartStyled>
        <Days>{amountDays}</Days>
        <Line data={data} options={options} />
      </ChartStyled>
    </>
  );
};

export default Chart;
