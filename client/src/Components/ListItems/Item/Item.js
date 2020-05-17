import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import { setFocusItem, setLoading, setItemIdToUpdate } from '../../../redux/actions/actions';
import TagButton from '../../Buttons/TagButton';
import { Row, Col } from '../../../Theme/Grid';
import { ItemWrapper, ItemTitle }  from './Item.styles';


function Item({ data, item, setFocusItem, setLoading, setItemIdToUpdate }) {
  
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
  
  const handleUpdate = () => {
    setItemIdToUpdate(item);
  };
  
  const selectFocusItem = () => {
    setFocusItem(item);
    setItemIdToUpdate(null);
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
    {
      item.tags.map((tag) => (
        <TagButton
        key={tag}
        name={tag}
        />
      ))
    }
      <div>
        {item.comment}
      </div>
      <Row>
        <Col>
          <button onClick={(e) => deleteFromDB(e)}>
            DELETE
          </button>
        </Col>
        <Col>
          <button onClick={handleUpdate}>
            UPDATE
          </button>
        </Col>
      </Row>
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
      
      const mapDispatchToProps = { setFocusItem, setLoading, setItemIdToUpdate };
      
      
      export default connect(mapStateToProps, mapDispatchToProps)(Item);
      