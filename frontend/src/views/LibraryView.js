import React from 'react';
import { Helmet } from 'react-helmet';
import Library from 'components/Library/Library';

const LibraryView = () => {
  return (
    <>
      <Helmet>
        <title>Library</title>
      </Helmet>
      <Library />
    </>
  );
};

export default LibraryView;
