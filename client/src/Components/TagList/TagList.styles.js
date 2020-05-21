import styled from 'styled-components';


const Wrapper = styled.div`
  align-text: left;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin: ${(props) => props.theme.margin.halfNegative};
`;


export { Wrapper };
