import React, { Component } from "react";
import Button from '@material-ui/core/Button'

const Update = ({ id, updateData, updateFunction, onClickUpdate }) => {

  const modifyN = e => {
    const { name, value } = e.target;
    updateFunction({ name, value });
  }

  const triggerUpdate = () => {
    onClickUpdate();
  }

    return (
      <div>
        <h5 className="label">MODIFY</h5>
        <form>
          <input
            type="text"
            onChange={e => modifyN(e)}
            placeholder="modify title"
            value={updateData.name}
            name="name"
          />

          <textarea
            type="text"
            onChange={e => modifyN(e)}
            placeholder="modify content"
            value={updateData.code}
            name="code"
          />

          <input
            type="text"
            onChange={e => modifyN(e)}
            placeholder="modify tags"
            value={updateData.tags}
            name="tags"
          />

          <input
            type="text"
            onChange={e => modifyN(e)}
            placeholder="modify cooment"
            value={updateData.comment}
            name="comment"
          />
          <div>{updateData.id}</div>
          <Button
            color="primary"
            variant="contained"
            name="UPDATE"
            onClick={() => triggerUpdate()}
          >
            update
    </Button>
        </form>
      </div>
    );
}

export default Update