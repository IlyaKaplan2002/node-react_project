import MyTimer from 'components/reusableComponents/Timer';
import { getYear } from 'date-fns';

const YearTimer = ({ className }) => {
  const currentYear = getYear(new Date());
  const year = new Date(`Jan 01, ${currentYear + 1}`);
  return (
    <div className={className}>
      <MyTimer expiryTimestamp={year} title="Year countdown" />
    </div>
  );
};

export default YearTimer;
