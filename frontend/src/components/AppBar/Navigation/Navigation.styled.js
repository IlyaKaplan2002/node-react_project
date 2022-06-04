import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  border-right: 1px #a6abb9 solid;
`;

export const Link = styled(NavLink)`
  width: 33px;
  height: 33px;
  display: flex;
  margin: 0 auto;
  text-align: center;
  margin-right: 8px;
  &.active {
    background: #f5f7fa;
    border-radius: 50%;
  }
`;

export const Icon = styled.svg`
  display: block;
  margin: auto;
  align-items: center;
  fill: #a6abb9;
`;
