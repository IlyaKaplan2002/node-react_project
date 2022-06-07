import { Audio, TailSpin } from 'react-loader-spinner';
import { MainTailSpinStyled, BtnAudioSpinStyled } from './Loader.styled';

export const BtnSpinnerAudio = (
  className,
  color = '#ff6b08',
  width = 20,
  height = 20
) => {
  return (
    <BtnAudioSpinStyled className={'audioSpin ' + className}>
      <Audio color={color} width={width} height={height} />
    </BtnAudioSpinStyled>
  );
};

export const MainSpinnerTailSpin = ({
  className,
  color = '#ff6b08',
  width = 100,
  height = 100,
}) => {
  return (
    <MainTailSpinStyled className={'tailSpin ' + className}>
      <TailSpin color={color} width={width} height={height} />
    </MainTailSpinStyled>
  );
};

// export const MainSpinnerTailSpin = () => {
//   return (
//     <MainTailSpinStyled>
//       <TailSpin color="#ff6b08" width={100} height={100} />
//     </MainTailSpinStyled>
//   );
// };
