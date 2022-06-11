import MyTimer from 'components/reusableComponents/Timer';
import { getYear } from 'date-fns';

const YearTimer = () => {
  const currentYear = getYear(new Date());
  const year = new Date(`Jan 01, ${currentYear + 1}`);
  return <MyTimer expiryTimestamp={year} title="Year countdown" />;
};

export default YearTimer;
