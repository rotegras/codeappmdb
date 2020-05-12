import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ListWrapper } from './ListItems.styles';
import Item from './Item';


function ListItems({ data, activeTag }) {

  const displayData = useMemo(() => {
    const result = [];
    data.map((item) => {
      if (item.tags.indexOf(activeTag) > -1) {
        result.push(item);
      }
      return null;
    })
    return result;
    // setDisplayData(result);
  }, [data, activeTag]);

  return (
    <ListWrapper>
      {
        displayData.map((item) => (
          <Item
            item={item}
            key={item._id}
          />
        ))
      }
    </ListWrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
    activeTag: state.activeTag,
  }
}

ListItems.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  activeTag: PropTypes.string.isRequired,
}


export default connect(mapStateToProps)(ListItems);
