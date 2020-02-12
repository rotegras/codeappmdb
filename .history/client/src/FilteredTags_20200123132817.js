/*jshint esversion: 6 */
import React from 'react';

// return tag list that matches search
// as clickable buttons
const FilteredTags = ({tags, clickTag}) => {

    const listItems = tags.map(item => {
        return <li key={item.tag} className="taglist tag d-inline">
            <button className="tagbutton mb-2 mr-2 px-2" name={item.tag} onClick={(e) => TagCallback(e)}>
                {item.tag} | {item.tag.num}
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
