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
            <div className="mb-1">{lastel.name}</div>
            <div className="line-break text-success">{lastel.code}</div>
            <div className="mt-0">Tags: {lastel.tags}</div>
            <div className="mt-1">Updated at: {lastel.updatedAt}</div>
            <div className="mt-0">id: {lastel.id}</div>
            <div className="mt-0">_id: {lastel._id}</div>
        </div>
    );

}

export default LastEntry
