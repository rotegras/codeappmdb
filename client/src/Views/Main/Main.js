import React from 'react';
import ListItems from '../../Components/ListItems/ListItems';
import FocusedItem from '../../Components/FocusedItem';
import SearchByTag from '../../Components/Search';
import TagDisplay from '../../Components/Search/TagDisplay';
import UpdateForm from '../../Components/Forms/UpdateForm';
import { StickyWrapper } from './Main.styles';

// import {
//   Content, Container, Row, Col,
// } from '../../Theme/Grid';
import * as G from '../../Theme/Grid';
import { connect } from 'react-redux';


function Main({ loading, itemIdToUpdate }) {
  return (
    <G.Content>
      <G.Container>
        <G.Row>
          <G.Col cols={12}>
            <StickyWrapper>
              <TagDisplay />
              <SearchByTag />
              {
                loading && `Loading...`
              }
            </StickyWrapper>
          </G.Col>
          <G.Col cols={12}>
            <StickyWrapper>
              <ListItems />
            </StickyWrapper>
          </G.Col>
          <G.Col cols={36}>
            <StickyWrapper>
              { itemIdToUpdate === null && <FocusedItem /> }
              { !itemIdToUpdate === null  && <UpdateForm /> }
            </StickyWrapper>
          </G.Col>
        </G.Row>
      </G.Container>
    </G.Content>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    itemIdToUpdate: state.itemIdToUpdate,
  }
}

export default connect(mapStateToProps)(Main);