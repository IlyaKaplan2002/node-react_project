import { Container } from 'styles';
import { Wrapper } from '../InstructionModal/InstructionModal.styled';
import CardNotActive from '../CardNotActive';
import CardFrame from '../utils/cardFrame';
import MyGoalsSection from '../MyGoalsSection';
import Chart from '../Chart';

const StartTrainingEmptyMobile = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <CardFrame>
            <MyGoalsSection></MyGoalsSection>
          </CardFrame>
          <CardNotActive
            name={'...'}
            author={'...'}
            year={'...'}
            pages={'...'}
            isCont={false}
          />
          <CardFrame>
            <Chart></Chart>
          </CardFrame>
        </Wrapper>
      </Container>
    </>
  );
};

export default StartTrainingEmptyMobile;
