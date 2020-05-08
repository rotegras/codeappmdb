import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ItemWrapper, ItemSticky, ItemTitle, ItemCode }  from './FocusedItem.styles';
import TagButton from '../Buttons/TagButton';


function FocusedItem({ focusItem, submitTag, tags }) {
  const selectTag = (name) => {
    submitTag(name);
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
      <div>
        {
          focusItem.tags && focusItem.tags.map((tag) => (
            <TagButton
              key={tag}
              name={tag}
              sendTag={selectTag}
            />
          ))
        }
      </div>
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
