import styled from 'styled-components';
import { Link } from 'react-router-dom';


const HeaderWrapper = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100px;
  padding: 0 2rem;
`;

const MenuItem = styled(Link)`
  padding: 1rem;
  font-size: ${({ theme }) => theme.fontSize.normal};
`;


export {
  HeaderWrapper,
  MenuItem,
};
