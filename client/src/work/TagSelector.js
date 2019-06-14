/*jshint esversion: 6 */
import React from 'react'
import PropTypes from 'prop-types'

const TagSelector = ({name, clickTag, id, active }) => {

    const TagCallback = (e) => {
        const newTagName = e.target.name;
        const newTagId = e.target.id;
        clickTag ( newTagName, newTagId );
    };

    
    return(
        <li className={'d-inline'}>
            <button className="mb-2 mr-2 px-3 bg-secondary" id={id} name={name} onClick={(e) => TagCallback(e)}>
                {name}
            </button>
        </li>
    );
}

TagSelector.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  clickTag: PropTypes.func.isRequired,
}

export default TagSelector;
