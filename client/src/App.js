import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getData, getTags, setDisplayData } from './actions/actions';
import Header from './Components/Header/Header';
import Theme from './Theme/Theme';
import ThemeView from './Views/ThemeView';
import Main from './Views/Main';
import About from './Views/About';


function App({ data, displayData, activeTag, tags, getData, getTags, setDisplayData }) {
  const [intervalIsSet, setIntervalIsSet] = useState(null);
  const [loading, setLoading] = useState(false);

  function listTags(value) {
    const tagList = [],
          singleTags = [];

    // if (value) {
      value.forEach((item) => {
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
      getTags(tagList);
    // }
  }

  // const updateActiveTag = (value) => {
    // setActiveTag(value);
  // }

  const filterContentByTag = (value) => {
    const result = [];
    data.map((item) => {
      if (item.tags.indexOf(value) > -1) {
        result.push(item);
      }
      return null;
    })
    setDisplayData(result);
  }

  useEffect(() => {
    filterContentByTag(activeTag);
  }, [activeTag])


  async function getDataFromDb() {
      const response = await fetch('/api/getData');
      const json = await response.json();

      console.log(json.data);
      return json.data;
  }

  //component did mount
  useEffect(() => {
    try {
      setLoading((loading) => !loading);
      getDataFromDb()
        .then((response) => getData(response))
        .then(() => setLoading((loading) => !loading));
    } catch (error) { };
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
    listTags(data);
  }, [loading]);


  return (
    <Theme>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Main />
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

const mapStateToProps = (state) => {
  return {
    data: state.data,
    tags: state.tags,
    displayData: state.displayData,
    activeTag: state.activeTag,
  }
}


const mapDispatchToProps = { getData, getTags, setDisplayData };


export default connect(mapStateToProps, mapDispatchToProps)(App);
