import React, { useState } from "react";
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import { Paper, ModalButton } from './Create.styles';


export default function Create({ onClickCreate }) {
  const [open, setOpen] = useState(false);
  const [{ title, code, comment, tags }, setValue] = useState({title: '', code: '', tags: '', comment: ''});

  // putDataToDB(title, code, comment, tags);

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
      <ModalButton
        type="button"
        onClick={handleOpen}
      >
        Add Content
      </ModalButton>

      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>

        <Paper>
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
      </Fade>
    </Modal>
    </div>
    );
  }
