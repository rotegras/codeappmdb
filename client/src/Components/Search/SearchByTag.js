import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
  Input,
} from './SearchByTag.styles';

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
    // filterTags(match);
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
      <div>
      {
        matchingTags.map((tag,i) => (
          <div key={tag.name+i}>
            { tag.name } / { tag.total }
          </div>
         ))
      }
      </div>
    </Wrapper>
  );
}


//  function SearchByTag_Old({ keyDown, input, reset}) {


  // const sendText = (e) => {
  //   const { text } = e.target;
  //   keyDown(text);
  // };

  // const resetText = (e) => {
    // reset();
  // };

  // const filtertagsonsearch = (search) => {
  //   const tagsobj = Object.assign(this.state.data);

  //   let filteredsingle = [];
  //   let filtered = [];

  //   tagsobj.map(item => {
  //     item.tags.filter(tag => {

  //       if (tag.includes(search)) {
  //         let t = {};
  //         t.tag = tag;
  //         if (!(filteredsingle.includes(tag))) {
  //           t.num = 1;
  //           filteredsingle.push(tag);
  //           filtered.push(t);
  //         } else {
  //           let tagadd = filtered.filter(item => item.tag === tag);
  //           tagadd[0]['num'] = tagadd[0]['num'] + 1;
  //         }
  //       }
  //       return filtered;
  //     })

  //     this.setState({
  //       filteredTags: filtered
  //     });
  //   });
  // }
// }

SearchByTag.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.any).isRequired,
  // keyDown: PropTypes.func.isRequired,
  // reset: PropTypes.func.isRequired,
  // input: PropTypes.string.isRequired,
}

export default SearchByTag;
