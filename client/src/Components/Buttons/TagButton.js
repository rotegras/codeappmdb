import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setActiveTag } from '../../actions/actions';
import { Wrapper, Inner } from './TagButton.styles';


function TagButton({ name, total, setActiveTag }) {
  const tagCallback = (e) =>  setActiveTag(e.target.value);

  return(
    <Wrapper
      onClick={(e) => tagCallback(e)}
      value={name}
    >
      <Inner>
        {name}  {total ? `| ${total}` : false }
      </Inner>
    </Wrapper>
  );
}

TagButton.propTypes = {
  name: PropTypes.string.isRequired,
  total: PropTypes.number,
  sendTag: PropTypes.func.isRequired,
};

const mapDispatchToProps = { setActiveTag };


export default connect(null, mapDispatchToProps)(TagButton);
