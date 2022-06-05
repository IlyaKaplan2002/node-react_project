import InfoList from 'components/utils/InfoList';
import InfoTitle from 'components/utils/InfoTitle';
import { routes } from 'constants';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'styles';
import HelpInfoMobileStyled from './HelpInfoMobile.styled';
import Button from '../utils/Button';
import { Card } from 'components/Card';
import { cardTypes } from 'constants';
import CardSection from 'components/CardSection/CardSection';
const books = [{
  name: 'Development of valuable proposal Development of valuable proposal Development of valuable proposal Development of valuable proposal',
  author: 'Jeff Sutherland',
  year: 2014,
  pages: 589,
  rating: 4,
  review: 'sfjhbwehf',
  owner: 'khvekfvwekfv',
},
{
  name: 'Development of valuable proposal Development of valuable proposal Development of valuable proposal Development of valuable proposal',
  author: 'Jeff Sutherland',
  year: 2014,
  pages: 589,
  rating: 4,
  review: 'sfjhbwehf',
  owner: 'khvekfvwekfv',
}];
const HelpInfoMobile = () => {
  return (
    <Container>
      <CardSection
      cardType={cardTypes.isGoingToRead}  books={ books}/>
      <CardSection
      cardType={cardTypes.reading}  books={ books}/>
      <CardSection
      cardType={cardTypes.alreadyRead}  books={ books}/>
      {/* <HelpInfoMobileStyled>
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
      </HelpInfoMobileStyled> */}
    </Container>
  );
};

export default HelpInfoMobile;
