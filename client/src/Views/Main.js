import React from 'react';
import PropTypes from 'prop-types';
import ListItems from '../Components/ListItems/ListItems';
import SearchByTag from '../Components/Search/SearchByTag.js';
import {
  Content,
  Container,
  Row,
  Col2,
  Col4,
  Col6,
} from '../Components/Layout/Layout';

export default function Main({ data, tags, tagUp }) {
  const submitTag = (value) => {
    tagUp(value);
  };


  return (
    <Content>
      <Container>
        <Row>
          <Col2>
            <SearchByTag
              tags={tags}
              submitTag={submitTag}
            />
          </Col2>
          <Col4>
            <ListItems
              data={data}
            />
          </Col4>
          <Col6>
            Info
          </Col6>
        </Row>
      </Container>
    </Content>
  );
}


Main.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  tags: PropTypes.arrayOf(PropTypes.object).isRequired,
};
