import React from 'react'
import PropTypes from 'prop-types'

function TagDisplay({ name }) {
    return(
        <div>
        >_  { name }
        </div>
    );
}

TagDisplay.propTypes = {
    name: PropTypes.string
}

export default TagDisplay