/*jshint esversion: 6 */
import React from 'react';
import PropTypes from 'prop-types';

const SearchTag = ({keyDown, input, reset}) => {
    const sendText = (e) => {
        const text = e.target.value;
        keyDown (text);  
    }

    const resetText = (e) => {
        reset();  
    }

    return(
        <div>
            <input type='text' value={input} className="mb-2 px-2 mr-2 pr-3 bg-white" onChange={(e) => sendText(e)} />
            <button className="bg-light" reset={reset} onClick={(e) => resetText(e)}>Reset</button>
        </div>
    );
}

SearchTag.propTypes = {
  keyDown: PropTypes.func.isRequired,
}

export default SearchTag;
