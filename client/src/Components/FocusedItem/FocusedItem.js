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

  const { name, code, tags, comment } = focusItem;

  return (
    <ItemWrapper>
      <ItemTitle>
        {name}
      </ItemTitle>
      <ItemSticky>
        <ItemCode>
          {code}
        </ItemCode>
      </ItemSticky>

      { tags && <TagList matchingTags={normalizeTags(tags)} /> }

      <div>
        {comment}
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
