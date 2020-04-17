import React from 'react';
import PropTypes from 'prop-types';
import { ListWrapper } from './ListItems.styles';
import Item from './Item';


export default function ListItems({ data, selectItem, submitTag }) {
  return (
    <ListWrapper>
      {
        data.map((item) => (
          <Item
            item={item}
            key={item._id}
            selectItem={selectItem}
            submitTag={submitTag}
          />
        ))
      }
    </ListWrapper>
  );
}


ListItems.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectItem: PropTypes.func.isRequired,
  submitTag: PropTypes.func.isRequired,
};
