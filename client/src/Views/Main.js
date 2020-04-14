import React from 'react';
import PropTypes from 'prop-types';
import ListItems from '../Components/ListItems/ListItems';
import SearchByTag from '../Components/Search/SearchByTag.js';
import TagDisplay from '../Components/Search/TagDisplay';
import {
  Content,
  Container,
  Row,
  Col2,
  Col4,
  Col6,
} from '../Components/Layout/Layout';

export default function Main({ selectedTag, data, tags, tagUp }) {
  const submitTag = (value) => {
    tagUp(value);
  };


  return (
    <Content>
      <Container>
        <Row>
          <Col2>
            <TagDisplay
              name={selectedTag}
            />
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
  selectedTag: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  tags: PropTypes.arrayOf(PropTypes.object).isRequired,
};
