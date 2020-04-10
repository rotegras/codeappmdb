import React from 'react';
import PropTypes from 'prop-types';
import { ItemWrapper, ItemTitle }  from './Item.styles';


export default function Item({ item }) {
  return (
    <ItemWrapper key={item['_id']}>
      <div>
        {item._id} / {item.id}
      </div>
      <ItemTitle>
        {item.name}
      </ItemTitle>
      <div>
        {
          item.tags.map((tag) => (
            <div>
              { tag }
            </div>
          ))}
      </div>
      <div>
        {item.comment}
      </div>
    </ItemWrapper>
  );
}


Item.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};
