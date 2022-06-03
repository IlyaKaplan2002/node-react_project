import InfoList from 'components/utils/InfoList';
import InfoTitle from 'components/utils/InfoTitle';
import React from 'react';
import HelpInfoMobileStyled from './HelpInfoMobile.styled';

const HelpInfoMobile = () => {
  return (
    <HelpInfoMobileStyled>
      <InfoTitle title="Books Reading" className="title" />
      <InfoList
        title=" Will help you to"
        items={[
          'Create your goal faster and proceed to read',
          'Divide process proportionally for each day',
        ]}
        className="list"
      />
      <InfoList title="You may also" items={[]} />
    </HelpInfoMobileStyled>
  );
};

export { HelpInfoMobile };
