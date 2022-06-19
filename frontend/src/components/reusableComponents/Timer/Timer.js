import { useTranslation } from 'react-i18next';
import { useTimer } from 'react-timer-hook';
import { TimerWrapper } from './Timer.styled';

function pad(value) {
  return String(value).padStart(2, '0');
}

function MyTimer({ expiryTimestamp, title, onEnd = () => {} }) {
  const { t } = useTranslation('translation', { keyPrefix: 'timer' });

  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => {
      onEnd();
    },
  });

  return (
    <TimerWrapper>
      <h2 className="title">{title}</h2>
      <div className="container">
        <div className="field">
          <span className="value">{pad(days)}</span>
          <span className="label">{t('days').toUpperCase()}</span>
        </div>
        <span className="puncMark">:</span>

        <div className="field">
          <span className="value">{pad(hours)}</span>
          <span className="label">{t('hours').toUpperCase()}</span>
        </div>
        <span className="puncMark">:</span>

        <div className="field">
          <span className="value">{pad(minutes)}</span>
          <span className="label">{t('minutes').toUpperCase()}</span>
        </div>
        <span className="puncMark">:</span>

        <div className="field">
          <span className="value">{pad(seconds)}</span>
          <span className="label">{t('seconds').toUpperCase()}</span>
        </div>
      </div>
    </TimerWrapper>
  );
}

export default MyTimer;
