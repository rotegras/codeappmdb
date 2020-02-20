import React from "react"
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';

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

export default function Update({ id, data, onModalClick, modalOpen }) {

  const classes = useStyles();
  const [open, setOpen] = React.useState(modalOpen)
  const [inputValues, setValue] = React.useState({
      title: data.name,
      code: data.code,
      tags: data.tags,
      comment: data.comment
  });

  const modifyN = e => {
    const { name, value } = e.target;
    setValue({
        ...inputValues,
        [name]: value
    });
  }

  const triggerUpdate = (e) => {
    e.preventDefault()
    const { name, value } = e.target;
    // console.log( inputValues.title, inputValues.code, inputValues.tags, inputValues.comment )
    setOpen(false);
    onModalClick(inputValues, open);
  }

  return (
    <div className={classes.paper}>
    <h5 className="label">MODIFY</h5>
    <form>
    <input
    type="text"
    onChange={e => modifyN(e)}
    placeholder="modify title"
    value={inputValues.title}
    name="title"
    />

    <textarea
    type="text"
    onChange={e => modifyN(e)}
    placeholder="modify content"
    value={inputValues.code}
    name="code"
    />

    <input
    type="text"
    onChange={e => modifyN(e)}
    placeholder="modify tags"
    value={inputValues.tags}
    name="tags"
    />

    <input
    type="text"
    onChange={e => modifyN(e)}
    placeholder="modify cooment"
    value={inputValues.comment}
    name="comment"
    />
    <div>{id}</div>
    <Button
    color="primary"
    variant="contained"
    name="UPDATE"
    onClick={(e) => triggerUpdate(e)}
    >
    update
    </Button>
    </form>
    </div>
    );
  }

  Update.propTypes = {
    data: PropTypes.object.isRequired,
    // onModalClick: PropTypes.function.isRequired
  }