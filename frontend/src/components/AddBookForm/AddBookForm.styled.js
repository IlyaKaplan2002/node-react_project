import styled from 'styled-components';

const AddBookFormStyled = styled.form`
  .wrapper {
    margin-bottom: 40px;
  }

  .label:not(:last-child) {
    margin-bottom: 20px;
  }

  .button {
    width: fit-content;
    height: fit-content;
    padding: 12px 70px;
    margin: 0 auto;
    font-size: 14px;
    line-height: 17px;
  }
`;

export default AddBookFormStyled;
