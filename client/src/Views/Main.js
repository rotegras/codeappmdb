import React from 'react';
import ListItems from '../Components/ListItems/ListItems';
import FocusedItem from '../Components/FocusedItem';
import SearchByTag from '../Components/Search';
import AddForm from '../Components/Forms/AddForm';
import TagDisplay from '../Components/Search/TagDisplay';
import StickyWrapper from './Main.styles';
import {
  Content, Container, Row, Col2, Col4, Col6,
} from '../Components/Layout/Layout';


export default function Main({ loading }) {
  return (
    <Content>
      <Container>
        <Row>
          <Col2>
            <StickyWrapper>
              <TagDisplay />
              <SearchByTag />
              {
                loading && `Loading...`
              }
            </StickyWrapper>
          </Col2>
          <Col4>
            <StickyWrapper>
              <ListItems />
            </StickyWrapper>
          </Col4>
          <Col6>
              <AddForm />
            <StickyWrapper>
              {/* <FocusedItem /> */}
            </StickyWrapper>
          </Col6>
        </Row>
      </Container>
    </Content>
  );
}
