/*jshint esversion: 6 */
import React from 'react';
    
const FilteredTags = ({tags, clickTag}) => {

    console.log(tags);

    const listItems = tags.map(item => {
        return <li key={item.index} className="taglist tag d-inline">
            <button className="tagbutton mb-2 mr-2 px-3" id={item.index} name={item} onClick={(e) => TagCallback(e)}>
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
