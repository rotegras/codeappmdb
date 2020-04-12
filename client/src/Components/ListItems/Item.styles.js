import styled from 'styled-components';


const ItemWrapper = styled.div`
  padding: 1rem 0;
  margin: 0 1rem 1rem;
`;

const ItemTitle = styled.h3`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.big};
`;


export {
  ItemWrapper,
  ItemTitle,
};