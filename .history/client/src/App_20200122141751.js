'esversion: 6'

import React, { Component } from "react"
import update from 'react-addons-update'
import axios from "axios"
import Controls from "./Controls"
import Create from "./Create"
import IdSelector from "./IdSelector"
import FilteredTags from './FilteredTags'
import ListItems from './ListItems'
import LastEntry from './LastEntry'
import SearchTag from './SearchTag'
import SearchSwitch from './SearchSwitch'
import TagDisplay from './TagDisplay'
import Update from "./Update"
import "./app.css"
import { faThList } from "@fortawesome/free-solid-svg-icons"


let codeFiltered = [];

class App extends Component {
  constructor() {
    super();

    // initialize our state
    this.state = {
      data: [],
      new: {
        title: '',
        code: '',
        tags: [],
        comment: ''
      },
      update: {
        name: '',
        code: '',
        tags: [],
        comment: ''
      },
      searchmode: {
        tags: true,
        id: false,
        title: false,
        code: false,
      },
      intervalIsSet: false,
      idToUpdate: "",
      objectToUpdate: {
        name: '',
        code: '',
        tags: [],
        comment: ''
      },
      idToDelete: "",
      objectToDelete: "",
      open: false,
      id: "",
      // title: "",
      // titleupdate: "",
      // code: "",
      // codeupdate: "",
      // comment: "",
      // commentupdate: "",
      // tags: [],
      // tagsupdate: [],
      tagsList: [],
      // updateToApply: {},
      // tagName: "",
      searchingTag: '',
      searchById: '',
      filteredTags: [],
      _refactored: true
    }
  }

  // when component mounts, first thing it does is fetch all existing data in our db
  // then we incorporate a polling logic so that we can easily see if our db has
  // changed and implement those changes into our UI
  componentDidMount() {
    this.getDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 300);
      this.setState({ intervalIsSet: interval });
    }
  }

  // never let a process live forever
  // always kill a process everytime we are done using it
  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  // fetch data from our data base
  getDataFromDb = () => {
    fetch("/api/getData")
      .then(data => data.json())
      .then(res => this.setState({ data: res.data })
      );
    // check for items with same id
    this.arrayDuplicates(this.state.data);
    // console.log(this.state.data.length);
  };

  // put method that uses our backend api
  // to create new query into the data base
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

  // delete method that uses the backend api
  // to remove existing database information
  deleteFromDB = idTodelete => {
    this.state.data.forEach(dat => {
      if (dat.id == idTodelete) {
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
    console.log('almost there: ', idToUpdate, update)
    this.state.data.forEach(dat => {

      if (dat.id == idToUpdate) {
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
    const { data } = this.state;

    this.filtercode(this.state.data, this.state.tagName);

    return (
      <div className="container-fluid">

        <div className="row">

          <div className="col-12">
            <div className="row">
              <div className="col-2">
                <h5 className="app-title d-inline  p-2">Code Library</h5>
              </div>
              <div className="col-10">
                <Controls
                  className="d-inline"
                  open={this.state.open}
                  clickCB={this.toggleOpen}
                />
              </div>
            </div>
          </div>

          <div className="col-2">
            <div className="group sticky-top">
              <div className="c_tagdisplay">
                <h5 className="label bg-dark mt-3">Selected Tag</h5>
                <TagDisplay
                  title={this.state.tagName}
                />
              </div>

              <div className="c_searchtag mt-3">
                <SearchSwitch />
              </div>

              <div className="c_searchtag mt-3">
                <SearchTag
                  keyDown={this.updatetag}
                  input={this.state.searchingTag}
                  reset={this.resetInput}
                />
              </div>

              <div className="c_idselector mt-3">
                <IdSelector
                  keyDown={this.searchById}
                  input={this.state.searchById}
                  reset={this.resetInput}
                />
              </div>

              <div className="c_filteredtags">
                <h5 className="bg-dark label mt-5">Matching Tags</h5>
                <FilteredTags
                  tags={this.state.filteredTags}
                  clickTag={this.updateActiveTag}
                />
              </div>
            </div>
          </div>

          <div className="col-7 sticky-top">
            <div className="c_listitems mt-2">
              <ul>
                {data.length <= 0
                  ? "NO DB ENTRIES YET"
                  : codeFiltered.map(dat => (
                    <ListItems
                      data={dat}

                      idToUpdate={this.updateId}
                      onClickProp={this.deleteThis}
                      clickTag={this.updateActiveTag}
                      open={this.state.open}
                    />
                  ))}
              </ul>
            </div>
          </div>

          <div className="col-3">
            <div className="group sticky-top">
              <div className="c_create">
                <Create
                  fields={this.state.new}
                  handleNew={this.createNew}
                  onClickCreate={this.createNew}

                  title={this.state.new.title}
                  code={this.state.new.code}
                  tags={this.state.new.tags}
                  comment={this.state.new.comment}

                  addTitle={this.addTitle}
                  addContent={this.addContent}
                  addComment={this.addComment}
                  addTags={this.addTags}

                />
              </div>

              <div className="c_update  mt-5">
                <Update
                  id={this.state.idToUpdate}
                  updateData={this.state.update}
                  updateFunction={this.updateObjectToUpdate}
                  onClickUpdate={this.doUpdate}
                />
              </div>

              <div className="c_lastentry mt-5">
                <LastEntry
                  data={this.state.data}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // functions
  //
  // create new item
  createNew = (title, code, tags, comment) => {
    this.setState({
      new: {
        title: title,
        code: code,
        tags: tags.split(',').map(item => { return item.trim() }),
        comment: comment
      }
    }, () => {
      this.putDataToDB(this.state.new.title, this.state.new.code, this.state.new.comment, this.state.new.tags);
    })
  }

  // get item to delete and trigger delete from db
  deleteThis = iddelete => {
    this.setState({ idToDelete: iddelete }, () => {
      this.deleteFromDB(this.state.idToDelete)
    })
  }

  //update
  updateId = ( id, name, code, tags, comment ) => {

    this.setState({
      idToUpdate: id,
    })

    let update = {
      ...this.state.update,
      name: name,
      code: code,
      tags: tags,
      comment: comment
    }
    this.setState({ update });
  }

  updateObjectToUpdate = ({ name, value }) => {
    let update = {
      ...this.state.update,
      [name]: value = name == 'tags' ? value.split(',').map(item => { return item.trim() }) : value
    }
    this.setState({ update });
  }

  doUpdate = () => {
      // console.log('updateDb: ', this.state.idToUpdate, this.state.update);

      this.updateDB(this.state.idToUpdate, this.state.update);

      let update = {
        ...this.state.update,
        name: '',
        code: '',
        tags: [],
        comment: ''
      }
      this.setState({ update });
  }


  // tag management functions

  // update active tag on input text
  // in SearchTag component
  updatetag = (text) => {
    this.setState({
      searchingTag: text
    }, () => {
      this.filtertagsonsearch(this.state.searchingTag);
    }
    )
  };

  // return matching tags when typing on search
  filtertagsonsearch = (search) => {

    const tagsobj = this.state.data;

    let filteredsingle = [];
    let filtered = [];

    const filter = tagsobj.map(item => {
      item.tags.filter(tag => {
        if (tag.includes(search)) {
          let t = {};
          t.tag = tag;
          // if the tag still isn't in the array, add it
          if (!(filteredsingle.includes(tag))) {
            t.num = 1;
            filteredsingle.push(tag);
            filtered.push(t);
          } else {
            let tagadd = filtered.filter(item => item.tag === tag);
            tagadd[0]['num'] = tagadd[0]['num'] + 1;
          }
        }
      })

      // return filter;
      this.setState({
        filteredTags: filtered
      })
    })
  }

  // reset inputs on search
  resetInput = () => {
    this.setState({
      searchingTag: '',
      filteredTags: [],
      tagName: '',
    })
  }

  // filter data by tags
  filtercode = (dataToFilter, fltr) => {

    // reset codeFiltered every time
    // the function is called
    codeFiltered = [];

    dataToFilter.map(item => {
      item.tags.filter(item2 => {
        if (item2 == fltr) {
          codeFiltered.push(item);
        }
      });
    })
  }

  // callback from FilteredTags Component  with clicked tag
  updateActiveTag = (newTagName) => {
    this.setState({
      tagName: newTagName
    })
  }

  // control toggle open for all shown items
  toggleOpen = () => {
    this.setState(prevState => ({ open: !prevState.open }))
  }

  sortOrder = (a, b) => {
    return a - b;
  }

  arrayDuplicates = (array) => {
    // console.clear();
    let singles = [];
    let duplicates = [];

    for (let i = 0; i < array.length; i++) {

      if (!(singles.includes(array[i].id))) {

        singles.push(array[i].id);
        singles.sort(this.sortOrder);

      } else {
        duplicates.push(array[i].id);
        duplicates.sort(this.sortOrder);
        console.log('duplicates', duplicates);
      }
    }
  }

  // search by id
  searchById = (id) => {
    this.setState({
      searchById: id
    })
    let dataById = this.state.data.filter(item => item.id == id);
    console.clear();
    console.log(dataById);
  }
}

export default App
