import styled from 'styled-components';


const Wrapper = styled.div`
  padding: 1rem 0;
`;

const Title = styled.h3`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.big};
  max-width: 100%;

  &:hover {
    cursor: pointer;
    opacity: .6;
    transition: opacity .4s ease-in-out;
  }
`;


export {
  Wrapper,
  Title,
};