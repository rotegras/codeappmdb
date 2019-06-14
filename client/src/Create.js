import React from "react";

const Create = ({title, code, comment, tags, addTitle, addContent, addComment, addTags, onClickCreate}) => {

    const updateTitle = e => {
        let data = e.target.value;
        addTitle(data);
    } 

    const updateCode = e => {
        let code = e.target.value;
        addContent(code);
    } 

    const updateComment = e => {
        let code = e.target.value;
        addComment(code);
    } 

    const updateTags = e => {
        let tags = e.target.value;
        addTags(tags); 
    } 

    const triggerAdd = () => {
        onClickCreate();
    }

    console.log(code);
    return(
        <div>
        <h5 className="label">Add content</h5>

        <input
            type="text"
            onChange={e => updateTitle(e)}
            placeholder="add title"
            value={title}
            attr="title"
        />

        <textarea
            row="3"
            type="text"
            onChange={e => updateCode(e)}
            placeholder="add content"
            value={code}
            attr="code"
        />

        <input
            type="text"
            onChange={e => updateTags(e)}
            placeholder="add tags separated by comma"
            value={tags}
        />

        <input
            type="text"
            onChange={e => updateComment(e)}
            placeholder="add comment"
            value={comment}
            attr="comment"
        />

        <button onClick={e => triggerAdd()}>
        ADD
        </button>

        </div>
    )
}

export default Create;
