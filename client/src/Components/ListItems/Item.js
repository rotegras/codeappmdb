import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const ItemWrapper = styled.div`
  padding: 2rem;
  margin: 0 0 1rem;
  box-shadow: 0 0 15px black;
`;


export default function Item({ item }) {
  return (
    <div>
      <ItemWrapper key={item['_id']}>
        {item.name}
      </ItemWrapper>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};
