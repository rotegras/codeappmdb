import styled from 'styled-components';


const Wrapper = styled.div`
`;

const Input = styled.input`
  max-width: 100%;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.accentDark};
  font-size: ${({ theme }) => theme.fontSize.small};
  padding: .5rem;
  border: 0;
  border-radius: 5px;
`;


export {
  Wrapper,
  Input,
};
