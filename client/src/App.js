import React, { Component } from 'react';
import Main from './Views/Main';

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
    };
  }


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

  getDataFromDb = () => {
    fetch("/api/getData")
      .then(data => data.json())
      .then(res => this.setState({ data: res.data })
      );
    this.arrayDuplicates(this.state.data);
    this.getLast(this.state.data);
  };

  putDataToDB = (title, code, comment, tags) => {
    let currentIds = this.state.data.map(data => data.id);
    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }
    axios.post("/api/putData", {
      id: idToBeAdded,
      name: title,
      code: code,
      comment: comment,
      tags: tags
    });
  };

  // delete item from database by id
  deleteFromDB = idTodelete => {
    console.log('deleteFromDB fired, id to delete: ', idTodelete);
    this.state.data.forEach(dat => {
    console.log('deleteFromDB fired test 2, id to delete: ', idTodelete);
      console.log('compare: ', dat.id, idTodelete);
      if (dat.id === idTodelete) {
        console.log(dat._id, ' : dat._id')
        this.setState({
          objectToDelete: dat._id
        }, () => {
          axios.delete("/api/deleteData", {
            data: {
              id: { _id: this.state.objectToDelete }
            }
          });
        })
      }
    });
  };

  // our update method that uses our backend api
  // to overwrite existing data base information
  updateDB = (idToUpdate, update) => {
    this.state.data.forEach(dat => {

      if (dat.id === idToUpdate) {
        this.setState({
          idToUpdate: dat._id
        }, () => {

          axios.post("/api/updateData", {
            id: { _id: dat._id },
            update: {
              "name": update.name,
              "code": update.code,
              "comment": update.comment,
              "tags": update.tags,
            }
          }).then((response) => {
            console.log(response);
            console.log(response.data);
          })
            .catch((error) => {
              console.log(error);
            });

        })
      }
    });
  };

  render() {
    return (
      <>
        <Main />
      </>
    );
  }

}

export default App;