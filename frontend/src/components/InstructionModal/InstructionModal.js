import { Container } from 'styles';
import { ModalOverlay, Modal } from './InstructionModal.styled';
import GoBackButton from 'components/utils/GoBackButton';
import InstructionList from 'components/utils/InstructionList';
import Button from 'components/utils/Button';

const InstructionModal = () => {
  return (
    <Container>
      <ModalOverlay>
        <Modal>
          <GoBackButton className="back" />
          <InstructionList
            className="fisrtStepWrapper"
            title="Step 1."
            bigIconId="book"
            smallIconId="vector"
            instruction="Create your own library"
            text="Add there books which you are going to read."
          />
          <InstructionList
            className="secondStepWrapper"
            title="Step 2."
            bigIconId="flag"
            smallIconId="vector"
            instruction="Create your first training"
            text="Set a goal, choose period, start training."
          />

          <Button
            className="button"
            type="button"
            filled="true"
            onClick={() => console.log('click')}
          >
            Ok
          </Button>
        </Modal>
      </ModalOverlay>
    </Container>
  );
};

export default InstructionModal;
