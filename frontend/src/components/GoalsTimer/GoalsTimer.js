import MyTimer from 'components/reusableComponents/Timer';
import { addDays } from 'date-fns/esm';

const GoalsTimer = ({ date, className, onEnd }) => {
  const year = addDays(new Date(date), 1);
  return (
    <div className={className}>
      <MyTimer onEnd={onEnd} expiryTimestamp={year} title="Goals countdown" />
    </div>
  );
};

export default GoalsTimer;
