import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col } from '../../Theme/Grid';
import Item from './Item';


function ListItems({ data, activeTag }) {
  const { slug } = useParams();

  const displayData = useMemo(() => {
    const result = [];
    data.map((item) => {
      if (item.tags.indexOf(slug) > -1) {
        result.push(item);
      }
      return null;
    })
    return result;
  }, [data, slug]);

  return (
    <Row direction="column">
      {
        displayData.map((item) => (
          <Col key={item._id}>
            <Item
              item={item}
              key={item._id}
            />
          </Col>
        ))
      }
    </Row>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
  }
}

ListItems.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
}


export default connect(mapStateToProps)(ListItems);
