import Library from 'components/Library/Library';
import React from 'react';
import { Helmet } from 'react-helmet';

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
