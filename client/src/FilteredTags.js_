/*jshint esversion: 6 */
import React from 'react';
    
const FilteredTags = ({name, clickTag, id}) => {

    const TagCallback = (e) => {
        const newTagName = e.target.name;
        const newTagId = e.target.id;
        clickTag ( newTagName, newTagId );
    };
    
    return(
        <li className="taglist tag d-inline">
            <button className="tagbutton mb-2 mr-2 px-3" id={id} name={name} onClick={(e) => TagCallback(e)}>
                {name}
            </button>
        </li>
    );
}

export default FilteredTags;
