import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TagList from '../TagList';
import { ItemWrapper, ItemSticky, ItemTitle, ItemCode }  from './FocusedItem.styles';


function FocusedItem({ focusItem }) {
  const normalizeTags = (arrayOfTags) => {
    const result = [];
    arrayOfTags.forEach((item) => result.push({ name: item }))
    return result;
  };


  return (
    <ItemWrapper>
      <ItemTitle>
        {focusItem.name}
      </ItemTitle>
      <ItemSticky>
        <ItemCode>
          {focusItem.code}
        </ItemCode>
      </ItemSticky>

      { focusItem.tags && <TagList matchingTags={normalizeTags(focusItem.tags)} /> }

      <div>
        {focusItem.comment}
      </div>
    </ItemWrapper>
  );
}

FocusedItem.propTypes = {
  focusItem: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => {
  return {
    focusItem: state.focusItem,
  }
}


export default connect(mapStateToProps)(FocusedItem);
