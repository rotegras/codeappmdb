import styled from 'styled-components';
import { Link } from 'react-router-dom';


const HeaderWrapper = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100px;
  padding: 0 2rem;
  right: 0;
  z-index: 100;
`;

const MenuItem = styled(Link)`
  padding: 1rem;
  font-size: ${({ theme }) => theme.fontSize.normal};
  color: ${({ theme }) => theme.colors.white};
`;


export {
  HeaderWrapper,
  MenuItem,
};
