import React, { useEffect, useState, useCallback } from 'react';
import { getStatistic } from 'api/statistics';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import DaysStyled from './Days.styled';
import { statisticsActions } from 'redux/statistics';
import { getDays } from './helpers';

const Days = () => {
  const [days, setDays] = useState();

  const token = useSelector(authSelectors.getToken);
  const dispatch = useDispatch();

  const fetchAllBooks = useCallback(async () => {
    try {
      const { statistic } = await getStatistic(token);
      dispatch(statisticsActions.init(statistic));
      const dates = getDays(statistic).length;
      setDays(dates);
    } catch (error) {
      console.log(error);
    }
  }, [token, dispatch]);

  useEffect(() => {
    fetchAllBooks();
  }, [fetchAllBooks]);

  return (
    <DaysStyled>
      <p>{days}</p>
    </DaysStyled>
  );
};

export default Days;
