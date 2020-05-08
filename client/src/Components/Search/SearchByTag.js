import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Wrapper,
  Input,
  TagsArea,
} from './SearchByTag.styles';
import TagButton from '../Buttons/TagButton';

// import { faTimes } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function SearchByTag({ tags }) {
  const [inputValue, setInputValue] = useState('');
  const [matchingTags, filterTags] = useState([]);

  const changeInput = (e) => {
    const { value } = e.target;
    setInputValue(value);
  }

  const searchInTagList = () => {
    const match = [];
    tags.forEach((tag) => {
      if (inputValue && tag.name.indexOf(inputValue) > -1) {
        match.push(tag);
      }
    });
    filterTags(match.sort((a, b) => ( a.name - b.name)));
  };

  useEffect(() => {
      searchInTagList();
  }, [inputValue]);


  return (
    <Wrapper>
      <h5>Search by Tag</h5>
      <Input
        type="text"
        onChange={(e) => changeInput(e)}
      />
      <TagsArea>
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
      </TagsArea>
    </Wrapper>
  );
}

SearchByTag.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.any).isRequired,
}

const mapStateToProps = (state) => {
  return {
    tags: state.tags,
  }
};


export default connect(mapStateToProps)(SearchByTag);
