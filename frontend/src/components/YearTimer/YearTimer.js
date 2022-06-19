import MyTimer from 'components/reusableComponents/Timer';
import { getYear } from 'date-fns';
import { useTranslation } from 'react-i18next';

const YearTimer = ({ className }) => {
  const currentYear = getYear(new Date());
  const year = new Date(`Jan 01, ${currentYear + 1}`);
  const { t } = useTranslation();
  return (
    <div className={className}>
      <MyTimer expiryTimestamp={year} title={t('yearsTimer')} />
    </div>
  );
};

export default YearTimer;
