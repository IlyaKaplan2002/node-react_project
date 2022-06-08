import AppBar from 'components/AppBar';
import React from 'react';
import CardSectionNotActive from 'components/CardSectionNotActive'; 

// cardType = withoutDelEmpty
// cardType =withDel
// cardType=notChecked
// cardType=checked
// const books = [{name:'nameBook', author:'nameAuthor', year:'bookYear', pages:'bookPages', rating:'4', _id:'1'},{name:'nameBook', author:'nameAuthor', year:'bookYear', pages:'bookPages', rating:'4', _id:'2'}];
const books = [{name:'nameBook', author:'nameAuthor', year:'bookYear', pages:'bookPages', rating:'4', _id:'1'},{name:'nameBook', author:'nameAuthor', year:'bookYear', pages:'bookPages', rating:'4', _id:'2'},{name:'nameBook', author:'nameAuthor', year:'bookYear', pages:'bookPages', rating:'4', _id:'3'}]
// const books=[];
const LibraryView = () => {
  return (
    <>
      <AppBar />
      <CardSectionNotActive cardType='checked' books={books}></CardSectionNotActive>
    </>
  );
};

export default LibraryView;
