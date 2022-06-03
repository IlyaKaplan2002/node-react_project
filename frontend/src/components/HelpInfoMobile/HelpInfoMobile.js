import InfoList from 'components/utils/InfoList';
import InfoTitle from 'components/utils/InfoTitle';
import { routes } from 'constants';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'styles';
import HelpInfoMobileStyled from './HelpInfoMobile.styled';

const HelpInfoMobile = () => {
  return (
    <Container>
      <HelpInfoMobileStyled>
        <InfoTitle title="Books Reading" className="title" />
        <InfoList
          title="Will help you to"
          items={[
            'Create your goal faster and proceed to read',
            'Divide process proportionally for each day',
            'Track your success',
          ]}
          className="list1"
        />
        <InfoList
          title="You may also"
          items={[
            'Pose your own independent point of view',
            'Improve your professional skills according to new knowledge',
            'Become an interesting interlocutor',
          ]}
          className="list2"
        />

        <div className="buttonsWrapper">
          <Link to={routes.login.path} className="button">
            Log in
          </Link>
          <Link to={routes.signUp.path} className="button filled">
            Register
          </Link>
        </div>
      </HelpInfoMobileStyled>
    </Container>
  );
};

export { HelpInfoMobile };
