import React from "react";

const SelectToUpdate = ({id, idToUpdate}) => {

    const updateId= e => {
        let id = e.target.value;
        idToUpdate(id);
    }
 
    return (
          <button value={id} onClick={e => updateId(e)}>
            MODIFY 
          </button>
    );
}

export default SelectToUpdate; 
