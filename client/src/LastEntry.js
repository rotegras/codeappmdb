import React from 'react'

const LastEntry = ({data}) => {
    
    let lastel={};
    let ordered =  data.sort((a,b) => {
        return a.updatedAt.localeCompare(b.updatedAt)
    });

    if ( ordered.length ) {
        lastel = ordered.pop();
    }

    return (
        <div>
            <h5>Last Entry</h5>
            <div>{lastel.name}</div>
            <div>{lastel.code}</div>
            <div>{lastel.updatedAt}</div>
        </div>
    );

}

export default LastEntry
