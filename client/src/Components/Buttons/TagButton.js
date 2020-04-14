import React from 'react';
import PropTypes from 'prop-types';
import TagButtonWrapper from './TagButton.styles';


function TagButton({ name, total, sendTag }) {

  const tagCallback = (e) =>  sendTag(e.target.value);

  return(
    <TagButtonWrapper
      onClick={(e) => tagCallback(e)}
      value={name}
    >
      { name } / { total }
    </TagButtonWrapper>
  );
}


TagButton.propTypes = {
    name: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
    sendTag: PropTypes.func.isRequired,
};


export default TagButton;
