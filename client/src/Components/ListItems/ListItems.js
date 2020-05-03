import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ListWrapper } from './ListItems.styles';
import Item from './Item';


function ListItems({ displayData }) {
  return (
    <ListWrapper>
      {
        displayData.map((item) => (
          <Item
            item={item}
            key={item._id}
          />
        ))
      }
    </ListWrapper>
  );
}


ListItems.propTypes = {
  displayData: PropTypes.arrayOf(PropTypes.object).isRequired,
};


const mapStateToProps = (state) => {
  return {
    displayData : state.displayData,
  }
}


export default connect(mapStateToProps)(ListItems);