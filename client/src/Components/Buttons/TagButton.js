import React from 'react';
import Button from '@material-ui/core/Button';

const TagButton = ({ name, clickTag, id, active }) => {

    const TagCallback = (e) => {
        const newTagName = e.target.name;
        const newTagId = e.target.id;
        clickTag ( newTagName );
    };

    return(
        <Button className="mb-2 mr-2 px-3" id={id} name={name} onClick={(e) => TagCallback(e)}
            name={name}
        />
    );
}

export default TagButton;
