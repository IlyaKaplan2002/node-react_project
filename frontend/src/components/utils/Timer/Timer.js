import { useTimer } from 'react-timer-hook';
import { TimerWrapper } from './Timer.styled';

function pad(value) {
  return String(value).padStart(2, '0');
}

function MyTimer({ expiryTimestamp, title }) {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => console.log('onExpire called'),
  });

  return (
    <TimerWrapper>
      <h2 className="title">{title}</h2>
      <div className="container">
        <div className="field">
          <span className="value">{pad(days)}</span>
          <span className="label">DAYS</span>
        </div>
        <span className="puncMark">:</span>

        <div className="field">
          <span className="value">{pad(hours)}</span>
          <span className="label">HRS</span>
        </div>
        <span className="puncMark">:</span>

        <div className="field">
          <span className="value">{pad(minutes)}</span>
          <span className="label">MINS</span>
        </div>
        <span className="puncMark">:</span>

        <div className="field">
          <span className="value">{pad(seconds)}</span>
          <span className="label">SECS</span>
        </div>
      </div>
    </TimerWrapper>
  );
}

export default MyTimer;
