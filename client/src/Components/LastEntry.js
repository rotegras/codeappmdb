import React from 'react'
import PropTypes from 'prop-types'

const LastEntry = ({ data, tags }) => {

    let tagli = tags.map(tag => {
        return <li>{tag}</li>
    });
    console.log('tags: ', tags);

    return (
        <div>
            <h5>LAST ENTRY</h5>
            <div className="mb-1">{data.name}</div>
            <div className="line-break text-success">{data.code}</div>
            <ul className="mt-0">
                Tags: {tagli}
            </ul>
            <div className="mt-1">Updated at: {data.updatedAt}</div>
            <div className="mt-0">id: {data.id}</div>
            <div className="mt-0">_id: {data._id}</div>
        </div>
    );
}

LastEntry.propTypes = {
    data: PropTypes.object,
    tags: PropTypes.array
}

LastEntry.defaultProps = {
    tags: []
}

export default LastEntry