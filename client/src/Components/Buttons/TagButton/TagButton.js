import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setActiveTag } from '../../../redux/actions/actions';
import { Wrapper, Inner } from './TagButton.styles';


function TagButton({ name, total, setActiveTag }) {
  const onTagClick = () =>  setActiveTag(name);

  return(
    <Wrapper>
      <Inner
        onClick={onTagClick}
        value={name}
      >
        {name}  {total ? `| ${total}` : false }
      </Inner>
    </Wrapper>
  );
}

TagButton.propTypes = {
  name: PropTypes.string.isRequired,
  total: PropTypes.number,
  setActiveTag: PropTypes.func.isRequired,
};

const mapDispatchToProps = { setActiveTag };


export default connect(null, mapDispatchToProps)(TagButton);
