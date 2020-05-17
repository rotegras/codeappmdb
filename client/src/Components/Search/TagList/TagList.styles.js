import styled from 'styled-components';


const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  flex-grow: 0;
  flex-wrap: wrap;
  margin: ${(props) => props.theme.margin.tagListWrapper};
`;


export { Wrapper };
