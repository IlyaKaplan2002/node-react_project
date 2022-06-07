import { Audio, TailSpin } from 'react-loader-spinner';
import { MainTailSpinStyled, BtnAudioSpinStyled } from './Loader.styled';

const Loader = ({
  className,
  color = '#ff6b08',
  width = 100,
  height = 100,
  button,
}) => {
  return (
    <>
      {button ? (
        <BtnAudioSpinStyled className={'audioSpin ' + className}>
          <Audio color={color} width={width} height={height} />
        </BtnAudioSpinStyled>
      ) : (
        <MainTailSpinStyled className={'tailSpin ' + className}>
          <TailSpin color={color} width={width} height={height} />
        </MainTailSpinStyled>
      )}
    </>
  );
};

export default Loader;
