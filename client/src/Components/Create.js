import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';

function Create({onClickCreate}) {

    const [open, setOpen] = React.useState(true);
    const [{title, code, tags, comment}, setValue] = React.useState({title: '', code: '', tags: '', comment: ''});

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValue(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const triggerAdd = (e) => {
        e.preventDefault();
        console.log( title, code, tags, comment )
        onClickCreate( title, code, tags, comment )
    }

    return (
        <div>
        <h5 className="label">Add content</h5>

        <input
        type="text"
        onChange={e => handleChange(e)}
        placeholder="add title"
        value={title}
        name="title"
        />

        <textarea
        row="3"
        type="text"
        onChange={e => handleChange(e)}
        placeholder="add content"
        value={code}
        name="code"
        />

        <input
        type="text"
        onChange={e => handleChange(e)}
        placeholder="add tags separated by comma"
        value={tags}
        name="tags"
        />

        <input
        type="text"
        onChange={e => handleChange(e)}
        placeholder="add comment"
        value={comment}
        name="comment"
        />

        <Button
        color="secondary"
        variant="contained"
        name="ADD ITEM"
        onClick={e => triggerAdd(e)}
        >
        ADD ITEM
        </Button>
        </div>
        );
    }

export default Create;
