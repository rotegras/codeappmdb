import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';



const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
    modalbutton: {
      color: '#fff',
  }
}));

export default function Create({onClickCreate}) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
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
            <Button type="button" className={classes.modalbutton} onClick={handleOpen}>
                Add Content
            </Button>
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
                <div className={classes.paper}>
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

// export default Create;