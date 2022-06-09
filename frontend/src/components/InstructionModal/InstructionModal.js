import { MdMenuBook, MdOutlineOutlinedFlag } from 'react-icons/md';
import Media from 'react-media';
import { Container } from 'styles';
import { Wrapper, WrapperStyled } from './InstructionModal.styled';
import InstructionList from 'components/utils/InstructionList';
import Button from 'components/utils/Button';
import { useOnEscClose } from 'hooks';
import { useEffect } from 'react';

const InstructionModal = ({ onClose }) => {
  const [addOnEscClose, removeOnEscClose] = useOnEscClose(onClose);

  useEffect(() => {
    addOnEscClose();

    return () => {
      removeOnEscClose();
    };
  }, [addOnEscClose, removeOnEscClose]);

  const onBackdropClick = e => {
    if (e.target !== e.currentTarget) return;
    onClose();
  };

  return (
    <WrapperStyled>
      <Container className="backdrop" onClick={onBackdropClick}>
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
    </WrapperStyled>
  );
};

export default InstructionModal;
