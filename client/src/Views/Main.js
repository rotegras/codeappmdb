import React from 'react';
import PropTypes from 'prop-types';
import ListItems from '../Components/ListItems/ListItems';


export default function Main({ data }) {
  return (
    <div>
      Main
      <ListItems
        data={data}
      />
    </div>
  );
}

Main.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};
