/*jshint esversion: 6 */
import React from 'react';
    
// return tags that match search
// in clickable buttons
const FilteredTags = ({tags, clickTag}) => {

    const listItems = tags.map(item => {
        return <li key={item} className="taglist tag d-inline">
            <button className="tagbutton mb-2 mr-2 px-3" name={item} onClick={(e) => TagCallback(e)}>
                {item}
            </button>
        </li>
    });

    const TagCallback = (e) => {
        const newTagName = e.target.name;
        clickTag ( newTagName);
    };
    
    return (
        <ul className="taglist">
            {listItems}
        </ul>
    );
}

export default FilteredTags;
