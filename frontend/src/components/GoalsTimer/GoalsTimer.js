import MyTimer from 'components/reusableComponents/Timer';

const GoalsTimer = ({ date, className, onEnd }) => {
  const year = new Date(date);
  return (
    <div className={className}>
      <MyTimer onEnd={onEnd} expiryTimestamp={year} title="Goals countdown" />
    </div>
  );
};

export default GoalsTimer;
