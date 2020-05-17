import styled from 'styled-components';


const Wrapper = styled.div`
  margin: ${({ theme }) => - theme.margin.tagBuuttonWrapper};
  padding: ${({ theme }) => theme.padding.tagButtonWrapper};
  flex-grow: 1; 
`;

const Inner = styled.button`
  background-color: ${({ theme}) => theme.colors.accentDark};
  color: ${({ theme}) => theme.colors.white};
  font-size: ${({ theme}) => theme.fontSize.small};
  padding: ${({ theme }) => theme.padding.tagButtonInner};
  border: none;
  width: 100%;
  border-radius: .25rem;

  &:hover {
    background-color: ${({ theme}) => theme.colors.accentLight};
  }
`;


export { Wrapper, Inner };
