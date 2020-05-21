import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setLoading } from '../../../redux/actions/actions';
import axios from 'axios';
import ContentButton from '../../Buttons/ContentButton';
import { NegativeContainer } from './UpdateForm.styles';
import { Input, TextArea } from '../../../Theme/Forms';


function UpdateForm({ data, itemIdToUpdate, setLoading }) {
  const [inputValues, setValue] = useState({
      name: itemIdToUpdate.name,
      code: itemIdToUpdate.code,
      tags: itemIdToUpdate.tags,
      comment: itemIdToUpdate.comment
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setValue({...inputValues, [name]: value })
  };

  const handleTagsChange = (e) => {
    const { value } = e.target;
    const tagArray = value.split(',');

    setValue(prevState => ({
      ...prevState,
      tags: tagArray
    }));
  }

  const updateDB = (e) => {
    e.preventDefault();
    data.forEach((item) => {
      
      console.log(item.id, itemIdToUpdate.id);
      if (item.id === itemIdToUpdate.id) {
        console.log('ok');
        const { name, code, tags, comment } = inputValues;
        axios.post('/api/updateData', {
          id: { _id: item._id },
          update: {
            'name': name,
            'code': code,
            'tags': tags.map((item) => item.trim()),
            'comment': comment,
          }
        })
          .then(() => setLoading(true))
          .then(() => console.log('item updated'))
          .catch((error) => console.log(error));
      }
    })
  };

  useEffect(() => {
    setValue({
      name: itemIdToUpdate.name,
      code: itemIdToUpdate.code,
      tags: itemIdToUpdate.tags,
      comment: itemIdToUpdate.comment
    });
  }, [itemIdToUpdate]);

  return (
    <React.Fragment>
      <h3>Update item</h3>
      <form>
        <Input
          type="text"
          value={ inputValues.name }
          onChange={(e) => handleChange(e)}
          name="name"
        />
        <TextArea
          type="textarea"
          value={ inputValues.code }
          onChange={(e) => handleChange(e)}
          name="code"
        />
        <Input
          type="text"
          value={ inputValues.tags }
          onChange={(e) => handleTagsChange(e)}
          name="tags"
        />
        <Input
          type="text"
          value={ inputValues.comment }
          onChange={(e) => handleChange(e)}
          name="comment"
        />
        <NegativeContainer>
          <ContentButton type="button" onClick={(e) => updateDB(e)}>
            UPDATE
          </ContentButton>
        </NegativeContainer>
      </form>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
    itemIdToUpdate: state.itemIdToUpdate,
  }
};

const mapDispatchToProps = { setLoading };

export default connect(mapStateToProps, mapDispatchToProps)(UpdateForm);
