import InfoList from 'components/reusableComponents/InfoList';
import InfoTitle from 'components/reusableComponents/InfoTitle';
import { routes } from 'constants';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'styles';
import HelpInfoMobileStyled from './HelpInfoMobile.styled';
import Button from '../reusableComponents/Button';

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
          <Button className="button">
            <Link to={routes.login.path} className="link">
              Log in
            </Link>
          </Button>

          <Button filled className="button">
            <Link to={routes.signUp.path} className="link filled">
              Register
            </Link>
          </Button>
        </div>
      </HelpInfoMobileStyled>
    </Container>
  );
};

export default HelpInfoMobile;
