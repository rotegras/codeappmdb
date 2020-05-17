import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './Components/Header/Header';
import Theme from './Theme/Theme';
import ThemeView from './Views/ThemeView';
import Main from './Views/Main';
import About from './Views/About';
import AddContent from './Views/AddContent';

import {
  getData, setLoading,
} from './redux/actions/actions';


function App({
  getData, setLoading, loading
}) {
  const [intervalIsSet, setIntervalIsSet] = useState(null);

  async function getDataFromDb() {
      const response = await fetch('/api/getData');
      const json = await response.json();
      return json.data;
  }

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
  }, [loading, getData, intervalIsSet, setLoading]);

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
    loading: state.loading,
  }
}

App.propTypes = {
  loading: PropTypes.bool.isRequired,
};

const mapDispatchToProps = { getData, setLoading };


export default connect(mapStateToProps, mapDispatchToProps)(App);
