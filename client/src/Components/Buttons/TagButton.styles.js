import styled from 'styled-components';


const TagButtonWrapper = styled.button`
  background-color: ${({ theme}) => theme.colors.accentDark};
  color: ${({ theme}) => theme.colors.white};
  font-size: ${({ theme}) => theme.fontSize.small};
  border: none;
  border-radius: .25rem;
  margin: 0 .5rem .5rem 0;
  padding: .25rem .5rem;

  &:hover {
    background-color: ${({ theme}) => theme.colors.accentLight};
  }
`;


export default TagButtonWrapper;
