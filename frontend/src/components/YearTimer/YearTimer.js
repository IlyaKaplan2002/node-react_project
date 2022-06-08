import MyTimer from 'components/utils/Timer';

const YearTimer = () => {
  const year = new Date('Jan 01, 2023');
  return <MyTimer expiryTimestamp={year} title="Year countdown" />;
};

export default YearTimer;
