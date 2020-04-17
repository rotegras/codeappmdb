import React from 'react';
import PropTypes from 'prop-types';
import { ItemWrapper, ItemSticky, ItemTitle, ItemCode }  from './FocusedItem.styles';
import TagButton from '../Buttons/TagButton';


export default function FocusedItem({ item, submitTag, tags }) {

  const selectTag = (name) => {
    submitTag(name);
  };

  console.log(tags);

  return (
    <ItemWrapper>
      <ItemTitle>
        {item.name}
      </ItemTitle>
      <ItemSticky>
        <ItemCode>
          {item.code}
        </ItemCode>
      </ItemSticky>
      <div>
        {
          tags && tags.map((tag) => (
            // <div>a</div>
            <TagButton
              key={tag}
              name={tag}
              sendTag={selectTag}
            />
          ))
        }
      </div>
      <div>
        {item.comment}
      </div>
    </ItemWrapper>
  );
}


FocusedItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.any),
  submitTag: PropTypes.func.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

FocusedItem.defaultProps = {
  item: {
    name: 'default',
    code: 'default',
    tags: ['default1', 'default2'],
    comment: 'default',
  },
};
