import { MdMenuBook, MdOutlineOutlinedFlag } from 'react-icons/md';
import Media from 'react-media';
import { Container } from 'styles';
import { Wrapper, WrapperStyled } from './InstructionModal.styled';
import InstructionList from 'components/reusableComponents/InstructionList';
import Button from 'components/reusableComponents/Button';
import { useOnEscClose } from 'hooks';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const InstructionModal = ({ onClose }) => {
  const [addOnEscClose, removeOnEscClose] = useOnEscClose(onClose);
  const { t } = useTranslation('translation', { keyPrefix: 'instructions' });

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
            title={t('first.title')}
            bigIcon={<MdMenuBook className="reactIcon" />}
            instruction={t('first.instruction')}
            text={t('first.text')}
          />
          <InstructionList
            className="secondStepWrapper"
            title={t('second.title')}
            bigIcon={<MdOutlineOutlinedFlag className="reactIcon" />}
            instruction={t('second.instruction')}
            text={t('second.text')}
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
