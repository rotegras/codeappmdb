import React from 'react'
import PropTypes from 'prop-types'

const LastEntry = ({data}) => {

    let lastel=[];
    let ordered =  data.sort((a,b) => {
        return a.updatedAt.localeCompare(b.updatedAt)
    });

    if ( ordered.length ) {
        lastel = ordered.pop();

        console.log('lastel', lastel.tags.map(tag => ({tag})));
    }

    return (
        <div>
            <h5>LAST ENTRY</h5>
            <div className="mb-1">{lastel.name}</div>
            <div className="line-break text-success">{lastel.code}</div>
            <ul className="mt-0">Tags: {}
            </ul>
            <div className="mt-1">Updated at: {lastel.updatedAt}</div>
            <div className="mt-0">id: {lastel.id}</div>
            <div className="mt-0">_id: {lastel._id}</div>
        </div>
    );
}

LastEntry.propTypes = {
    data: PropTypes.object
}

export default LastEntry
