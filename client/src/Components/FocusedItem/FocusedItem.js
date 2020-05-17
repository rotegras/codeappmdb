import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TagList from '../TagList';
import { ItemWrapper, ItemSticky, ItemTitle, ItemCode }  from './FocusedItem.styles';
import TagButton from '../Buttons/TagButton';


function FocusedItem({ focusItem, submitTag, tags }) {
  const selectTag = (name) => {
    submitTag(name);
  };

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
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  submitTag: PropTypes.func.isRequired.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

const mapStateToProps = (state) => {
  return {
    focusItem: state.focusItem,
  }
}


export default connect(mapStateToProps)(FocusedItem);
