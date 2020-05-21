import React from 'react';
import ListItems from '../Components/ListItems/ListItems';
import FocusedItem from '../Components/FocusedItem';
import SearchByTag from '../Components/Search';
import TagDisplay from '../Components/Search/TagDisplay';
import UpdateForm from '../Components/Forms/UpdateForm';
import StickyWrapper from './Main.styles';
import { useParams } from 'react-router-dom';

import {
  Content, Container, Row, Col,
} from '../Theme/Grid';
import { connect } from 'react-redux';


function Main({ loading, itemIdToUpdate }) {
  const { slug } = useParams();
  return (
    <Content>
      <Container>
        <Row>
          <Col cols={18}>
            <StickyWrapper>
              <TagDisplay />
              <SearchByTag />
              {
                loading && `Loading...`
              }
            </StickyWrapper>
          </Col>
          <Col cols={24}>
            <StickyWrapper>
              <ListItems />
            </StickyWrapper>
          </Col>
          <Col cols={30}>
            <StickyWrapper>
              { !itemIdToUpdate && <FocusedItem /> }
              { itemIdToUpdate && <UpdateForm /> }
            </StickyWrapper>
          </Col>
        </Row>
      </Container>
    </Content>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    itemIdToUpdate: state.itemIdToUpdate,
  }
}

export default connect(mapStateToProps)(Main);