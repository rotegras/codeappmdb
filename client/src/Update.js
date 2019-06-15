import React from "react";

const Update = ({id, data, title, content, comment, tags, modifyName, modifyTags, onClickModify}) => {

    // >> todo: update in app.js
    const thisid = {id} 
    const modifyN = e => {
        const { target: { name, value } } = e;
        console.log('id name value: ', thisid, name, value)
        modifyName(thisid, name, value);
    }

    const modifyValueTags = e => {
        let value = e.target.value;
        modifyTags(value);
    }

    const modifyEntry = (e) => {
        onClickModify(e);
    }

    return (
        <div>
        <h5 className="label">MODIFY</h5>

          <input
            type="text"
            id={id}
            onChange={e => modifyN(e)}
            placeholder="modify title"
            value={title} 
            name="title"
          />

          <textarea 
            type="text"
            onChange={e => modifyN(e)}
            placeholder="modify content"
            value={content}
            name="code"
          />

          <input 
            type="text"
            onChange={e => modifyValueTags(e)}
            placeholder="modify tags"
            value={tags}
          />

          <input 
            type="text"
            onChange={e => modifyN(e)}
            placeholder="modify cooment"
            value={comment}
            name="comment"
          />
          <div>{id}</div>
          <button
            onClick={e => modifyEntry(e)}
          >
            UPDATE
          </button>
        </div>
    )
}

export default Update;
