import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 8px;
`;

export const Button = styled.button`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  cursor: pointer;
  border: none;
  background-color: inherit;
  &:hover,
  &:focus {
    text-decoration-line: underline;
  }
`;

export const ProfileImage = styled.div`
  width: 33px;
  height: 33px;
  border-radius: 50%;
  background: #f5f7fa;
  text-align: center;
`;
