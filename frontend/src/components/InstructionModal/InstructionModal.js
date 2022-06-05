import { MdMenuBook, MdOutlineOutlinedFlag } from 'react-icons/md';
import { Container } from 'styles';
import { ModalOverlay, Modal, Wrapper } from './InstructionModal.styled';
import GoBackButton from 'components/utils/GoBackButton';
import InstructionList from 'components/utils/InstructionList';
import Button from 'components/utils/Button';

import { useState, useEffect } from 'react';

function UseWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return width;
}

const InstructionModal = () => {
  const width = UseWindowWidth();

  return (
    <Container>
      <ModalOverlay>
        <Modal>
          {width <= 767 ? <GoBackButton className="back" /> : null}
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
            {width <= 767 ? (
              <Button
                className="button"
                type="button"
                filled="true"
                onClick={() => console.log('click')}
              >
                Ok
              </Button>
            ) : null}
          </Wrapper>
        </Modal>
      </ModalOverlay>
    </Container>
  );
};

export default InstructionModal;
