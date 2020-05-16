import React from 'react';
import PropTypes from 'prop-types';
import TagButton from '../../Buttons/TagButton';
import { Wrapper } from './TagList.styles';


function TagList({ matchingTags }) {
  return (
      <Wrapper>
      {
        matchingTags.map((tag,i) => (
          <TagButton
            key={tag.name + i}
            name={tag.name}
            total={tag.total}
          >
            { tag.name } / { tag.total }
          </TagButton>
         ))
      }
      </Wrapper>
  )
}

TagList.propTypes = {
  matchingTags: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default TagList;
