import React, { Component } from "react"
import Button from '@material-ui/core/Button'
import PropTypes, { func } from 'prop-types'
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

export default function Update({ id, updateData, updateFunction, onClickUpdate }) {

  const classes = useStyles();
  // const { title, code, tags, comment } = updateData;
  const [{ title, code, tags, comment }, setValue] = React.useState({
    title: '',
    code: '',
    tags: '',
    comment: ''
  });

  const modifyN = e => {
    const { name, value } = e.target;
    setValue(prevState => ({
        ...prevState,
        [name]: value
    }));
  }

  const triggerUpdate = (e) => {
    e.preventDefault();
    console.log( title, code, tags, comment )
    onClickUpdate( title, code, tags, comment )
  }

  return (
    <div>
    <h5 className="label">MODIFY</h5>
    <form>
    <input
    type="text"
    onChange={e => modifyN(e)}
    placeholder="modify title"
    value={title}
    name="name"
    />

    <textarea
    type="text"
    onChange={e => modifyN(e)}
    placeholder="modify content"
    value={code}
    name="code"
    />

    <input
    type="text"
    onChange={e => modifyN(e)}
    placeholder="modify tags"
    value={tags}
    name="tags"
    />

    <input
    type="text"
    onChange={e => modifyN(e)}
    placeholder="modify cooment"
    value={comment}
    name="comment"
    />
    <div>{id}</div>
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

  Update.propTypes = {
    id: PropTypes.string.isRequired,
    // updateData: PropTypes.function,
    // updateFunction: PropTypes.function,
    // onClickUpdate: PropTypes.function
  }

  // export default Update