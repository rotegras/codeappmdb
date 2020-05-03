import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setActiveTag } from '../../actions/actions';
import TagButtonWrapper from './TagButton.styles';


function TagButton({ name, total, setActiveTag }) {

  // const tagCallback = (e) =>  sendTag(e.target.value);
  const tagCallback = (e) =>  setActiveTag(e.target.value);

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
  total: PropTypes.number,
  sendTag: PropTypes.func.isRequired,
};

TagButton.defaultProps = {
  total: undefined,
}


const mapDispatchToProps = { setActiveTag };

export default connect(null, mapDispatchToProps)(TagButton);