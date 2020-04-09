import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';



export default function ListItems({ data }) {
  return (
    <div>
      ListItems
      {
        data.map((item) => (
          <Item
            item={item}
          />
        ))
      }
    </div>
  );
}

ListItems.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
