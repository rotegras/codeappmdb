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
            <h5>LAST ENTRY</h5>
            <div className="mb-2">{lastel.name}</div>
            <div className="line-break text-info">{lastel.code}</div>
            <div className="mt-4">{lastel.updatedAt}</div>
        </div>
    );

}

export default LastEntry
