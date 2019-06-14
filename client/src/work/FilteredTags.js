/*jshint esversion: 6 */
import React from 'react';

    
const FilteredTags = ({name, clickTag, id, active }) => {



    const TagCallback = (e) => {
        const newTagName = e.target.name;
        const newTagId = e.target.id;
        clickTag ( newTagName, newTagId );
    };

    
    return(
        <li className={'d-inline'}>
            <button className="mb-2 mr-2 px-3 bg-light" id={id} name={name} onClick={(e) => TagCallback(e)}>
                {name}
            </button>
        </li>
    );

}

export default FilteredTags;
