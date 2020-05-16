import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import { setFocusItem, setLoading } from '../../../redux/actions/actions';
import TagButton from '../../Buttons/TagButton';
import { ItemWrapper, ItemTitle }  from './Item.styles';


function Item({ data, item, setFocusItem, setLoading }) {
  
  // delete item from database by id
  const deleteFromDB = () => {
    const itemId = item.id;
    data.forEach((dat) => {
      if (dat.id === itemId) {
        axios.delete("/api/deleteData", {
          data: { id: { _id: item._id } }
        })
      }
    })
    setLoading(true);
  };

const selectFocusItem = () => {
  setFocusItem(item);
}

return (
  <ItemWrapper
    id={item.id}
    key={item._id}
  >
  <ItemTitle
    onClick={selectFocusItem}
  >
  {item.name}
  </ItemTitle>
  <div>
  {
    item.tags.map((tag) => (
      <TagButton
        key={tag}
        name={tag}
      />
      ))}
      </div>
      <div>
      {item.comment}
      </div>
      <button onClick={(e) => deleteFromDB(e)}>
      DELETE
      </button>
      </ItemWrapper>
      );
    }
    
    Item.propTypes = {
      item: PropTypes.objectOf(PropTypes.any).isRequired,
      data: PropTypes.arrayOf(PropTypes.object).isRequired,
    };
    
    const mapStateToProps = (state) => {
      return {
        data: state.data,
      }
    };
    
    const mapDispatchToProps = { setFocusItem, setLoading };
    

    export default connect(mapStateToProps, mapDispatchToProps)(Item);
