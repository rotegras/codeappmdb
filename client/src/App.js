import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { connect } from 'react-redux';
// import { SET_DATA, SET_TAGS } from './actions';

import Header from './Components/Header/Header';
import Theme from './Theme/Theme';
import ThemeView from './Views/ThemeView';


// import axios from "axios"
import Main from './Views/Main';
import About from './Views/About';

function App() {
  // class App extends Component {
  // constructor() {
  // super();

  // this.state = {
  // data: [],
  // tags: [],
  // activeTag: '',
  // showData: [],
  // focusItem: {},
  // };

  // this.filterContentByTag = this.filterContentByTag.bind(this);
  // this.getDataFromDb = this.getDataFromDb.bind(this);
  // this.listTags = this.listTags.bind(this);
  // this.selectItem = this.selectItem.bind(this);
  // this.updateActiveTag = this.updateActiveTag.bind(this);
  // };

  const [data, setData] = useState([]);
  const [tags, setTags] = useState([]);
  const [activeTag, setActiveTag] = useState('');
  const [showData, setShowData] = useState([]);
  const [focusItem, setFocusItem] = useState({});
  const [intervalIsSet, setIntervalIsSet] = useState(null);


  // componentDidMount() {
  //   this.getDataFromDb();
  //   if (!this.state.intervalIsSet) {
  //     let interval = setInterval(this.getDataFromDb, 300);
  //     this.setState({ intervalIsSet: interval });
  //   }
  // }

  // componentWillUnmount() {
  //   if (this.state.intervalIsSet) {
  //     clearInterval(this.state.intervalIsSet);
  //     this.setState({ intervalIsSet: null });
  //   }
  // }

    // this.arrayDuplicates(this.state.data);
    // this.getLast(this.state.data);


  // putDataToDB = (title, code, comment, tags) => {
  //   let currentIds = this.state.data.map(data => data.id);
  //   let idToBeAdded = 0;
  //   while (currentIds.includes(idToBeAdded)) {
  //     ++idToBeAdded;
  //   }
  //   axios.post("/api/putData", {
  //     id: idToBeAdded,
  //     name: title,
  //     code: code,
  //     comment: comment,
  //     tags: tags
  //   });
  // };

  // deleteFromDB = idTodelete => {
  //   console.log('deleteFromDB fired, id to delete: ', idTodelete);
  //   this.state.data.forEach(dat => {
  //   console.log('deleteFromDB fired test 2, id to delete: ', idTodelete);
  //     console.log('compare: ', dat.id, idTodelete);
  //     if (dat.id === idTodelete) {
  //       console.log(dat._id, ' : dat._id')
  //       this.setState({
  //         objectToDelete: dat._id
  //       }, () => {
  //         axios.delete("/api/deleteData", {
  //           data: {
  //             id: { _id: this.state.objectToDelete }
  //           }
  //         });
  //       })
  //     }
  //   });
  // };

  // updateDB = (idToUpdate, update) => {
  //   this.state.data.forEach(dat => {

  //     if (dat.id === idToUpdate) {
  //       this.setState({
  //         idToUpdate: dat._id
  //       }, () => {

  //         axios.post("/api/updateData", {
  //           id: { _id: dat._id },
  //           update: {
  //             "name": update.name,
  //             "code": update.code,
  //             "comment": update.comment,
  //             "tags": update.tags,
  //           }
  //         }).then((response) => {
  //           console.log(response);
  //           console.log(response.data);
  //         })
  //           .catch((error) => {
  //             console.log(error);
  //           });
  //       })
  //     }
  //   });
  // };

  const listTags = () => {
    const tagList = [];
    const singleTags = [];

    data.forEach((item) => {
      item.tags.forEach((tag) => {
        if (singleTags.indexOf(tag.trim()) === -1) {
          const tagEntry = { name: tag.trim(), total: 1}
          tagList.push(tagEntry);
          singleTags.push(tag);
        } else {
          const i = singleTags.indexOf(tag.trim());
          tagList[i].total++;
        }
      });
    });
    // dispatch(setTags(tagList));
    setTags(tagList);
  }

  const updateActiveTag = (value) => {
    setActiveTag(value);
  }

  const filterContentByTag = (value) => {
    const result = [];
    data.map((item) => {
      if (item.tags.indexOf(value) > -1) {
        result.push(item);
      }
      return null;
    })
    setShowData(result);
  }

  const selectItem = (value) => {
    const focus = data.filter((item) => item._id === value)[0];
    setFocusItem(focus);
  }

  const getDataFromDb = () => {
    fetch("/api/getData")
      .then((data) => data.json())
      .then((res) => setData([...res.data]))
      // .then(res => dispatch(SET_DATA(res.data)))
      .catch((error) => console.log(`Error: ${error}`));
  }

  useEffect(() => {
    getDataFromDb();
    if (!intervalIsSet) {
      let interval = setInterval(getDataFromDb, 300);
      setIntervalIsSet(interval);
    }
    return () => {
      if (intervalIsSet) {
        clearInterval(intervalIsSet);
        setIntervalIsSet(null);
      }
    }
  }, []);

  useEffect(() => {
    listTags();
  }, [data])

  useEffect(() => {
    filterContentByTag(activeTag);
  }, [activeTag]);

  return (
    <Theme>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Main
              data={showData}
              tags={tags}
              tagUp={updateActiveTag}
              selectedTag={activeTag}
              selectItem={selectItem}
              focusItem={focusItem}
            />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/theme">
            <ThemeView />
          </Route>
        </Switch>
      </Router>
    </Theme>
  );
}

const mapStateToProps = function(state) {
  return {
    dataAsProps: state.data,
    tagsAsProps: state.tags
  }
}

// const mapDispatchToProps = (dispatch) => {
  // getData: dispatch(getData());
  //  getTags: dispatch(getTags());
// }

export default connect(mapStateToProps)(App);