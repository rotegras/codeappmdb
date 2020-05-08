import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import { Wrapper, Input, Textarea, AddButton } from './AddForm.styles';

function AddForm({ data }) {
  // const [open, setOpen] = useState(false);
  const [{ title, code, comment, tags }, setValue] = useState({title: '', code: '', tags: '', comment: ''});

  // put method that uses our backend api
  // to create new query into the data base
  const putDataToDB = (title, code, comment, tags) => {
    let currentIds = data.map(data => data.id);
    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }
    axios.post("/api/putData", {
      id: idToBeAdded,
      name: title,
      code: code,
      comment: comment,
      tags: tags
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const triggerAdd = (e) => {
    e.preventDefault();
    console.log('trigger');
    putDataToDB(title, code, comment, tags);
  }

  return (
    <div>
      Add Item
      <Wrapper>
        <Input
          type="text"
          onChange={e => handleChange(e)}
          placeholder="add title"
          value={title}
          name="title"
        />

        <Textarea
          row="3"
          type="text"
          onChange={e => handleChange(e)}
          placeholder="add content"
          value={code}
          name="code"
        />

        <Input
          type="text"
          onChange={e => handleChange(e)}
          placeholder="add tags separated by comma"
          value={tags}
          name="tags"
        />

        <Input
          type="text"
          onChange={e => handleChange(e)}
          placeholder="add comment"
          value={comment}
          name="comment"
        />

        <AddButton
          color="secondary"
          variant="contained"
          name="ADD ITEM"
          onClick={e => triggerAdd(e)}
        >
          ADD ITEM
        </AddButton>
      </Wrapper>
  </div>
  );
}

AddForm.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
  }
};

export default connect(mapStateToProps)(AddForm);