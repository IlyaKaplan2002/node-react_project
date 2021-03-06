import { useTranslation } from 'react-i18next';
import { addDays } from 'date-fns/esm';
import MyTimer from 'components/reusableComponents/Timer';

const GoalsTimer = ({ date, className, onEnd }) => {
  const year = addDays(new Date(date), 1);
  const { t } = useTranslation();

  return (
    <div className={className}>
      <MyTimer onEnd={onEnd} expiryTimestamp={year} title={t('goalsTimer')} />
    </div>
  );
};

export default GoalsTimer;
