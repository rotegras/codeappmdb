import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from './Components/Header/Header';
import Theme from './Theme/Theme';
import ThemeView from './Views/ThemeView';


// import axios from "axios"
import Main from './Views/Main';
import About from './Views/About';

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      tags: [],
    };

    this.listTags = this.listTags.bind(this);
    this.getDataFromDb = this.getDataFromDb.bind(this);
  };

  componentDidMount() {
    this.getDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 300);
      this.setState({ intervalIsSet: interval });
    }
  }

  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  getDataFromDb() {
    fetch("/api/getData")
      .then(data => data.json())
      .then(res => this.setState({ data: [...res.data] }))
      // .then(() => this.listTags())
      .catch((error) => console.log(`Error: ${error}`));

    this.listTags();

  }

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

  listTags() {
    const { data } = this.state;

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
          // console.log(tagList[i]);
          tagList[i].total++;
        }
      });
    });
    this.setState({
      tags: tagList,
    })
  }

  render() {
    const { data, tags } = this.state;

    return (
      <Theme>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Main
                data={data}
                tags={tags}
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
}

export default App;