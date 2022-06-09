import MyTimer from 'components/utils/Timer';

const GoalsTimer = () => {
  const year = new Date('Jun 10, 2022');
  return <MyTimer expiryTimestamp={year} title="Goals countdown" />;
};

export default GoalsTimer;
