import React, { Component } from "react"
import Button from '@material-ui/core/Button'

const Update = ({id, data, modifyName, modifyTags, onClickModify}) => {

  const modifyN = e => {
    const { target: { name, value } } = e;
    modifyName({id}, name, value);
  }

  const modifyValueTags = e => {
    let value = e.target.value;
    modifyTags(value);
  }

  const modifyEntry = e => {
    onClickModify(e);
  }

  console.table('data: ', data);

  return (
    <div>
    <h5 className="label">MODIFY</h5>
    <form>
    <input
      type="text"
      id={id}
      onChange={e => modifyN(e)}
      placeholder="modify title"
      value={data.name} 
      name="title"
    />

    <textarea 
      type="text"
      onChange={e => modifyN(e)}
      placeholder="modify content"
      value={data.code}
      name="code"
    />

    <input 
    type="text"
    onChange={e => modifyN(e)}
    placeholder="modify tags"
    value={data.tags}
    />

    <input 
    type="text"
    onChange={e => modifyN(e)}
    placeholder="modify cooment"
    value={data.comment}
    name="comment"
    />
    <div>{id}</div>
    <Button 
    color="primary"
    variant="contained"
    name="UPDATE"
    onClick={e => modifyEntry(e)}
    >
    update
    </Button>
    </form>
    </div>
  );
}

export default Update
