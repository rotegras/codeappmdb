/*jshint esversion: 6 */
import React from 'react';
import PropTypes from 'prop-types';

const SearchTag = ({keyDown, input, reset}) => {

    const sendText = e => {
        const text = e.target.value;
        keyDown (text);  
    }

    const resetText = (e) => {
        reset();  
    }

    return(
        <div className="label d-flex flex-row mt-3">
            <input type='text' placeholder="Search..." value={input} className="mb-2 px-2 mr-2 pr-3" onChange={(e) => sendText(e)} />
            <button className="action-icon action-icon__trash" onClick={(e) => resetText(e)}></button>
        </div>
    );
}

SearchTag.propTypes = {
  keyDown: PropTypes.func.isRequired,
}

export default SearchTag;
