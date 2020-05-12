import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TagButton from '../Buttons/TagButton';
import {
  Wrapper,
  Input,
  TagsArea,
} from './SearchByTag.styles';


function SearchByTag({ data }) {
  const [inputValue, setInputValue] = useState('');
  const [matchingTags, filterTags] = useState([]);

  const listTags = useMemo(() => {
    const tagList = [],
      singleTags = [];

    data.forEach((item) => {
      item.tags.forEach((tag) => {
        if (singleTags.indexOf(tag.trim()) === -1) {
          const tagEntry = { name: tag.trim(), total: 1 }
          tagList.push(tagEntry);
          singleTags.push(tag);
        } else {
          const i = singleTags.indexOf(tag.trim());
          tagList[i].total++;
        }
      });
    });
    return tagList;
  }, [data]);

  const changeInput = (e) => {
    const { value } = e.target;
    setInputValue(value);
  }

  const searchInTagList = () => {
    const match = [];
    listTags.forEach((tag) => {
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
    data: state.data,
  }
};


export default connect(mapStateToProps)(SearchByTag);
