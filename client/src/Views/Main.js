import React from 'react';
import ListItems from '../Components/ListItems/ListItems';
import FocusedItem from '../Components/FocusedItem';
import SearchByTag from '../Components/Search';
import TagDisplay from '../Components/Search/TagDisplay';
import UpdateForm from '../Components/Forms/UpdateForm';
import StickyWrapper from './Main.styles';
import {
  Content, Container, Row, Col,
} from '../Theme/Grid';
import { connect } from 'react-redux';


function Main({ loading, itemIdToUpdate }) {
  return (
    <Content>
      <Container>
        <Row>
          <Col cols={12}>
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
          <Col cols={36}>
            <StickyWrapper>
              { !itemIdToUpdate && <FocusedItem /> }
              { itemIdToUpdate.id && <UpdateForm /> }
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