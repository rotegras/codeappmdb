import styled from 'styled-components';


const NegativeContainer = styled.div`
  margin: 0 ${({ theme }) => theme.margin.halfNegative}
`;

const Input = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.padding.halfNormal};
  margin-bottom: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.normal};
  border: none;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: ${({ theme }) => theme.padding.halfNormal};
  margin-bottom: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.normal};
  border: none;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
`;



export { NegativeContainer, Input, TextArea };
