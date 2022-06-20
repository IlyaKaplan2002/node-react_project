import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import InfoList from 'components/reusableComponents/InfoList';
import InfoTitle from 'components/reusableComponents/InfoTitle';
import { routes } from 'constants';
import { Container } from 'styles';
import Button from '../reusableComponents/Button';
import HelpInfoMobileStyled from './HelpInfoMobile.styled';

const HelpInfoMobile = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'bookInfo' });

  return (
    <Container>
      <HelpInfoMobileStyled>
        <InfoTitle title="Books Reading" className="title" />
        <InfoList
          title={t('first.title')}
          items={[
            t('first.items.first'),
            t('first.items.second'),
            t('first.items.third'),
          ]}
          className="list1"
        />
        <InfoList
          title={t('second.title')}
          items={[
            t('second.items.first'),
            t('second.items.second'),
            t('second.items.third'),
          ]}
          className="list2"
        />

        <div className="buttonsWrapper">
          <Button className="button">
            <Link to={routes.login.path} className="link">
              {t('login')}
            </Link>
          </Button>

          <Button filled className="button">
            <Link to={routes.signUp.path} className="link filled">
              {t('register')}
            </Link>
          </Button>
        </div>
      </HelpInfoMobileStyled>
    </Container>
  );
};

export default HelpInfoMobile;
