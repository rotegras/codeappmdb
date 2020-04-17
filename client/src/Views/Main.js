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
  selectItem,
  focusItem,
  selectedTag,
  data,
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
              <ListItems
                data={data}
                selectItem={selectItem}
                submitTag={submitTag}
              />
            </StickyWrapper>
          </Col4>
          <Col6>
            <StickyWrapper>
              <FocusedItem
                item={focusItem}
                selectItem={selectItem}
                submitTag={submitTag}
                // tags={focusItem.tags}
              />
            </StickyWrapper>
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
  selectItem: PropTypes.func.isRequired,
  focusItem: PropTypes.objectOf(PropTypes.any).isRequired,
};
