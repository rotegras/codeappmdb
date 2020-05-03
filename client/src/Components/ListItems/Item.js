import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setFocusItem } from '../../actions/actions';
import TagButton from '../Buttons/TagButton';
import { ItemWrapper, ItemTitle }  from './Item.styles';


function Item({ item, setFocusItem }) {

  const selectFocusItem = () => {
    setFocusItem(item);
  }

  return (
    <ItemWrapper
      id={item.id}
      key={item._id}
      onClick={selectFocusItem}
    >
      <ItemTitle>
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
    </ItemWrapper>
  );
}

Item.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapDispatchToProps = { setFocusItem };


export default connect(null, mapDispatchToProps)(Item);