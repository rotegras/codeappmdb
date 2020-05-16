import styled from 'styled-components';


const Input = styled.input`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.accentDark};
  font-size: ${({ theme }) => theme.fontSize.small};
  padding: .5rem;
  border: 0;
  border-radius: 5px;
`;


export { Input };
