/*jshint esversion: 6 */
import React from 'react'

const TagDisplay = ({id, title}) => {

    return(
        <div className="mb-2 mr-2 pr-3 bg-black" key={id}>
        >_  {title}
        </div>
    );
}

TagDisplay.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
}

export default TagDisplay