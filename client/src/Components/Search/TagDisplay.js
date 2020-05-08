import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'


function TagDisplay({ activeTag }) {
  return (
    <div>
    >_  { activeTag }
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
