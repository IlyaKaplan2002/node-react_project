import InfoList from 'components/utils/InfoList';
import InfoTitle from 'components/utils/InfoTitle';
import { routes } from 'constants';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'styles';
import HelpInfoMobileStyled from './HelpInfoMobile.styled';
import Button from '../utils/Button';
import ReadingCard from 'components/ReadingCard';
import GoingToReadCard from 'components/GoingToReadCard';
import AlreadyReadCard from 'components/AlreadyReadCard';

const HelpInfoMobile = () => {
  return (
    <Container>
      <ReadingCard 
    name={'Development of valuable proposal Development of valuable proposal Development of valuable proposal Development of valuable proposal ' }
    author={'Jeff Sutherland' }
    year={2014 }
    pages={ 25}/>
    <GoingToReadCard 
  name={'Development of valuable propojkbwejk Development of valuable proposal Development of valuable proposal Development of valuable proposal Development of valuable proposal Development of valuable proposal ' }
  author={'Jeff Sutherland' }
  year={2014 }
  pages={ 25}/>
  <AlreadyReadCard 
name={'Already of valuable propojkbwejk ' }
author={'Jeff Sutherland' }
        year={2014}
pages={ 25}/>
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
