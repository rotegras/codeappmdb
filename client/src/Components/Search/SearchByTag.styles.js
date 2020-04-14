import styled from 'styled-components';


const Wrapper = styled.div`

`;

const TagsArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  flex-grow: 1;
  margin: 1rem 0;
`;


const Input = styled.input`
  width: 100%;
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
  TagsArea,
};
