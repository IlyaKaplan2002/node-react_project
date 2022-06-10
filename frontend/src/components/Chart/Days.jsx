import React, { useEffect, useState, useCallback } from 'react';
import { getStatistic } from 'api/statistics';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import DaysStyled from './Days.styled';
import { statisticsActions } from 'redux/statistics';
import data from './chartDate';

const Days = () => {
  const [days, setDays] = useState();

  const token = useSelector(authSelectors.getToken);
  const dispatch = useDispatch();

  /// PROBLEM

  const fetchAllBooks = useCallback(async () => {
    try {
      const date = await getStatistic(token);
      dispatch(statisticsActions.init(date));
      console.log(date);
      console.log(date[1]);

      return data;
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
