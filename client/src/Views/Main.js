import React from 'react';
import PropTypes from 'prop-types';
import ListItems from '../Components/ListItems/ListItems';
import FocusedItem from '../Components/ListItems/FocusedItem';
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
import StickyWrapper from './Main.styles';


export default function Main({
  selectedTag,
  tags,
  tagUp,
}) {
  const submitTag = (value) => {
    tagUp(value);
  };


  return (
    <Content>
      <Container>
        <Row>
          <Col2>
            <StickyWrapper>
              <TagDisplay
                name={selectedTag}
              />
              <SearchByTag
                tags={tags}
                submitTag={submitTag}
              />
            </StickyWrapper>
          </Col2>
          <Col4>
            <StickyWrapper>
              <ListItems />
            </StickyWrapper>
          </Col4>
          <Col6>
            <StickyWrapper>
              <FocusedItem />
            </StickyWrapper>
          </Col6>
        </Row>
      </Container>
    </Content>
  );
}


Main.propTypes = {
  selectedTag: PropTypes.string.isRequired,
  focusItem: PropTypes.objectOf(PropTypes.any).isRequired,
};
