import styled from 'styled-components';


const ItemWrapper = styled.div`
  padding: 1rem 0;
  margin: 0 1rem 1rem;
  padding-left: 2rem;
  border-left: 1px solid ${({ theme }) => theme.colors.accentDark};
  min-height: 50vh;
`;

const ItemSticky = styled.div`
  position: styicky;
  top: 80px;
`;

const ItemTitle = styled.h3`
  position: absolute;
  top: 0;
  margin: 0;
  margin-left: -10rem;
  opacity: .2;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.superbig};
  color: ${({ theme }) => theme.colors.white};
`;

const ItemCode = styled.div`
  margin: 2rem 0;
  line-height: 1.8;
  white-space: pre-wrap;
`;

export {
  ItemWrapper,
  ItemSticky,
  ItemTitle,
  ItemCode,
};