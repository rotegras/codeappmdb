import styled from 'styled-components';
import PropTypes from 'prop-types';


const Content = styled.div`
  padding: 1rem;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  padding: ${({ theme }) => theme.padding.normal};
  box-sizing: border-box;
`;

const Row = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: flex-start;
  margin: 0 - ${({ theme }) => theme.padding.normal};
  width: 100%;
`;

const Col = styled.div`
  display: flex;
  border: 1px dashed white;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: ${({ theme }) => theme.padding.normal};
  width: ${(props) => `${1 / 60 * props.cols * 100}%`};
  border: 1px dashed white;
`;

const Col2 = styled(Col)`
  width: 16.667%;
`;

const Col3 = styled(Col)`
  width: 25%;
`;

const Col4 = styled(Col)`
  width: 33.333%;
`;

const Col6 = styled(Col)`
  width: 50%;
`;

const Col12 = styled(Col)`
  width: 100%;
`;

export {
  Content, Container, Row, Col, Col2, Col3, Col4, Col6, Col12,
};

Row.propTypes = {
  direction: PropTypes.string.isRequired,
};

Row.defaultProps = {
  direction: 'row',
};

Col.propTypes = {
  cols: PropTypes.number,
};

Col.defaultProps = {
  cols: 60,
};
