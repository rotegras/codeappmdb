import React from 'react';
import styled from 'styled-components';


const Content = styled.div`
  padding: 1rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 1rem;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 100%;
  margin: 0 -1rem;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
`;

const Col2 = styled(Col)`
  width: 16.667%;
`;

const Col3 = styled(Col)`
  width: 25%;
`;

const Col4 = styled(Col)`
  width: 33.33%;
`;

const Col6 = styled(Col)`
  width: 50%;
`;

const Col12 = styled(Col)`
  width: 1000%;
`;

export {
  Content,
  Container,
  Row,
  Col,
  Col2,
  Col3,
  Col4,
  Col6,
  Col12,
};