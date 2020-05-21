import React from 'react'
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types'


function TagDisplay({ activeTag }) {
  const { slug } = useParams();

  return (
    <div>
    >_  { slug }
    </div>
  );
}

TagDisplay.propTypes = {
  activeTag: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => {
  return {
    activeTag: state.activeTag,
  }
}


export default connect(mapStateToProps)(TagDisplay);
