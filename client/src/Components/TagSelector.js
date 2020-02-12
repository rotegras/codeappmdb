/*jshint esversion: 6 */
import React from 'react'
import TagButton from 'TagButton';

const TagSelector = ({name, clickTag, id, active }) => {

    const TagCallback = (e) => {
        const newTagName = e.target.name;
        const newTagId = e.target.id;
        clickTag ( newTagName );
    };

    return(
        <li className="tag d-inline">
            <button className="mb-2 mr-2 px-3" id={id} name={name} onClick={(e) => TagCallback(e)}>
                {name}
            </button>
        </li>
    );
}

export default TagSelector;
