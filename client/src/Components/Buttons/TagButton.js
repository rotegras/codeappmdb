import React from 'react';
import PropTypes from 'prop-types';

function TagButton({ name, total, sendTag }) {

  const tagCallback = (e) => {
    const { value } = e.target;
    sendTag(value);
  };

  return(
    <button
      onClick={(e) => tagCallback(e)}
      value={name}
    >
      { name } / { total }
    </button>
  );
}


TagButton.propTypes = {
    name: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
    sendTag: PropTypes.func.isRequired,
};


export default TagButton;
