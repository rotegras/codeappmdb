import React from "react";

const Delete = ({updateIdToDelete, onClickDelete}) => {

    const updateId= e => {
        let id = e.target.value;
        updateIdToDelete(id);
    }
    
    const triggerDelete = e => {
        onClickDelete(e); 
    }

    return (
          <div>
              <input
                type="text"
                onChange={e => updateId(e)}
                placeholder="put id of item to delete here"
              />
              <button onClick={e => triggerDelete()}>
                DELETE
              </button>
          </div>
    );
}

export default Delete; 
