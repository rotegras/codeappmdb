import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Wrapper = styled.div`
  margin:  ${({ theme }) => - theme.margin.haflNegative};
  padding: ${({ theme }) => theme.padding.halfNormal};
`;

const Inner = styled(Link)`
  background-color: ${({ theme}) => theme.colors.accentDark};
  color: ${({ theme}) => theme.colors.white};
  font-size: ${({ theme}) => theme.fontSize.small};
  padding: ${({ theme }) => theme.padding.normal};
  width: 100%;
  border-radius: .25rem;
  border: ${({ theme}) => theme.borderRadius.normal};
  letter-spacing: .5px;
  flex-grow: 1;

  &:hover {
    background-color: ${({ theme}) => theme.colors.accentLight};
  }
`;


export { Wrapper, Inner };
