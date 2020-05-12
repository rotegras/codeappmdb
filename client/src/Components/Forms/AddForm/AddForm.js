import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import { setLoading } from '../../../redux/actions/actions';
import {
  Wrapper, Input, Textarea, AddButton,
} from './AddForm.styles';

function AddForm({ data, setLoading, loading }) {
  const [{ title, code, comment, tags }, setValue] = useState({
    title: '', code: '', tags: '', comment: '',
  });

  // create new query into the data base
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
      tags: tags.map((item) => item.trim()),
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleTags = (e) => {
    const { value } = e.target;
    const tagArray = value.split(',');

    setValue(prevState => ({
      ...prevState,
      tags: tagArray
    }));
  }

  const resetForm = () => {
    setValue({
      title: '', code: '', tags: '', comment: '',
    })
  };

  const triggerAdd = (e) => {
    e.preventDefault();
    putDataToDB(title, code, comment, tags);
    setLoading(true);
    resetForm();
  }


  return (
    <div>
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
          onChange={e => handleTags(e)}
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
    loading: state.loading,
  }
};

const mapDispatchToProps = { setLoading };


export default connect(mapStateToProps, mapDispatchToProps)(AddForm);
