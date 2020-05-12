import styled from 'styled-components';


const Wrapper = styled.button`
  background-color: ${({ theme}) => theme.colors.accentDark};
  color: ${({ theme}) => theme.colors.white};
  font-size: ${({ theme}) => theme.fontSize.small};
  border: none;
  border-radius: .25rem;
  padding: .5rem 1rem;
  margin: 0 0 .5rem;

  &:hover {
    background-color: ${({ theme}) => theme.colors.accentLight};
  }
`;

const Inner = styled.div`
  margin: 0 -1rem;
`;


export { Wrapper, Inner };
