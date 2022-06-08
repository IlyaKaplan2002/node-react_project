import { MdMenuBook, MdOutlineOutlinedFlag } from 'react-icons/md';
import Media from 'react-media';
import { Container } from 'styles';
import { Wrapper } from './InstructionModal.styled';
import InstructionList from 'components/utils/InstructionList';
import Button from 'components/utils/Button';

const InstructionModal = ({ onClose }) => {
  return (
    <Container>
      <Wrapper>
        <InstructionList
          className="fisrtStepWrapper"
          title="Step 1."
          bigIcon={<MdMenuBook className="reactIcon" />}
          instruction="Create your own library"
          text="Add there books which you are going to read."
        />
        <InstructionList
          className="secondStepWrapper"
          title="Step 2."
          bigIcon={<MdOutlineOutlinedFlag className="reactIcon" />}
          instruction="Create your first training"
          text="Set a goal, choose period, start training."
        />

        <Media
          query="(max-width: 767px)"
          render={() => (
            <Button
              className="button"
              type="button"
              filled="true"
              onClick={onClose}
            >
              Ok
            </Button>
          )}
        />
      </Wrapper>
    </Container>
  );
};

export default InstructionModal;
