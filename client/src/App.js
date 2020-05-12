import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Components/Header/Header';
import Theme from './Theme/Theme';
import ThemeView from './Views/ThemeView';
import Main from './Views/Main';
import About from './Views/About';
import AddContent from './Views/AddContent';

import {
  getData, getTags, setDisplayData, setLoading,
} from './redux/actions/actions';


function App({
  data, activeTag, getData, getTags, setDisplayData, setLoading, loading
}) {
  const [intervalIsSet, setIntervalIsSet] = useState(null);
  // const [loading, setLoading] = useState(false);

  function listTags(value) {
    const tagList = [],
          singleTags = [];

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
  }

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
  }, [data, activeTag])


  async function getDataFromDb() {
      const response = await fetch('/api/getData');
      const json = await response.json();
      return json.data;
  }

  //component did mount
  useEffect(() => {
    if (loading === true) {
      try {
        getDataFromDb()
          .then((response) => getData(response))
          .then(() => setLoading(false))
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
    }
  }, [loading]);

  useEffect(() => {
    if (!loading) {
      try {
      getDataFromDb()
        .then((response) => getData(response))
        .then(() => setLoading(false))
      } catch (error) { };
      listTags(data);
    }
    return () => {
      if (loading) {
        setLoading(false);
      }
    }
  }, [loading]);


  return (
    <Theme>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Main loading={loading} />
          </Route>
          <Route path="/add">
            <AddContent />
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
    activeTag: state.activeTag,
    loading: state.loading,
  }
}


const mapDispatchToProps = { getData, getTags, setDisplayData, setLoading };


export default connect(mapStateToProps, mapDispatchToProps)(App);
