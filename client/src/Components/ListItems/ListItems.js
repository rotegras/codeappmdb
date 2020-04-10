import React from 'react';
import PropTypes from 'prop-types';
import { ListWrapper } from './ListItems.styles';
import Item from './Item';


export default function ListItems({ data }) {
  return (
    <ListWrapper>
      {
        data.map((item) => (
          <Item
            item={item}
          />
        ))
      }
    </ListWrapper>
  );
}


ListItems.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
