import React from 'react';
import PropTypes from 'prop-types';
import { ItemWrapper, ItemTitle }  from './Item.styles';
import TagButton from '../Buttons/TagButton';


export default function Item({ item, selectItem, submitTag }) {

  const updateItem = () => {
    selectItem(item._id);
  };

  const selectTag = (name) => {
    submitTag(name);
  };

  return (
    <ItemWrapper
      key={item._id}
      onMouseEnter={updateItem}
    >
      <ItemTitle>
        {item.name}
      </ItemTitle>
      <div>
        {
          item.tags.map((tag) => (
            <TagButton
              key={tag}
              name={tag}
              sendTag={selectTag}
            />
          ))}
      </div>
      <div>
        {item.comment}
      </div>
    </ItemWrapper>
  );
}


Item.propTypes = {
  item: PropTypes.objectOf(PropTypes.any),
  selectItem: PropTypes.func.isRequired,
  submitTag: PropTypes.func.isRequired,
};

Item.defaultProps = {
  item: { name: 'default', code: 'default', tags: ['default1', 'default2'], comment: 'default' },
}
