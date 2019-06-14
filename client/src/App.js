// /client/App.js
//
import React, { Component } from "react";
import update from 'react-addons-update';
import axios from "axios";
import Create from "./Create";
import FilteredTags from './FilteredTags';
import ListItems from './ListItems';
import SearchTag from './SearchTag';
import TagDisplay from './TagDisplay';
import Update from "./Update";
import "./app.css";


let codeFiltered = [];

class App extends Component {
    constructor() {
        super();

        // initialize our state 
        this.state = {
            data: [],
            id: 0,
            title: "",
            titleupdate: "",
            code: "",
            codeupdate: "",
            comment: "",
            commentupdate: "",
            intervalIsSet: false,
            idToDelete: "",
            idToUpdate: "",
            objectToUpdate: "",
            objectToDelete: "",
            tags: [],
            tagsupdate: [],
            tagsList: [],
            updateToApply: {},
            tagName: "",
            searchingTag:'',
            filteredTags:[]
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

    // just a note, here, in the front end, we use the id key of our data object 
    // in order to identify which we want to Update or delete.
    // for our back end, we use the object id assigned by MongoDB to modify 
    // data base entries

    // our first get method that uses our backend api to 
    // fetch data from our data base
    getDataFromDb = () => {
        fetch("/api/getData")
            .then(data => data.json())
            .then(res => this.setState({ data: res.data }
            ));
    };

    // our put method that uses our backend api
    // to create new query into our data base
    putDataToDB = ( title, code, comment, tags ) => {
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


    // our delete method that uses our backend api 
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

        this.state.data.forEach(dat => {

            if (dat.id == idToUpdate) {

                this.setState({
                    idToUpdate: dat._id
                }, () => {
                    axios.post("/api/updateData", {
                        id: { _id: dat._id },
                        update: { 
                            "name": update.name,
                            "code": update.content,
                            "comment": update.comment,
                            "tags": update.tags,
                        } 
                    }).then((response)=>{
                        console.log(response);
                        console.log(response.data);
                    })
                        .catch((error)=>{
                            console.log(error);
                        });
                })
            }
        });
    };


    // here is our UI
    // it is easy to understand their functions when you 
    // see them render into our screen
    render() {

        this.filtercode(this.state.data, this.state.tagName);

        const { data } = this.state;

        return (
            <div className="container-fluid">

            <div className="row">

            <div className="col-12">
            <h5 className="w-50 app-title p-2">Code Library</h5>
            </div>

            <div className="col-3 sticky-top">

            <div className="c_tagdisplay">
            <h5 className="label mt-3">Selected Tag</h5>
            <TagDisplay
            title={this.state.tagName}
            /> 
            </div>

            <div className="c_searchtag mt-3">
            <SearchTag
            keyDown={this.updatetag}
            input={this.state.searchingTag}
            reset={this.resetInput} 
            />      
            </div>

            <div className="c_filteredtags">
            <h5 className="label mt-5">Matching Tags</h5>
                <FilteredTags
                    tags={this.state.filteredTags}
                    clickTag={this.updateActiveTag}
                />
            </div>
            </div>

            <div className="col-6">

            <div className="c_listitems mt-3">
            <ul>
            {data.length <= 0
                ? "NO DB ENTRIES YET"
                : codeFiltered.map(dat => (
                    <ListItems
                    key={dat.id}
                    id={dat.id}
                    title={dat.name}
                    content={dat.code}
                    comment={dat.comment}
                    tags={dat.tags}
                    onClickProp={this.deleteThis}
                    idToUpdate={this.updateId}
                    />
                ))}
            </ul>
            </div>
            </div>
            <div className="col-3">

            <div className="c_create"> 
            <Create
            title={this.state.title}
            code={this.state.code}
            comment={this.state.comment}
            tags={this.state.tags}                
            addTitle={this.addTitle}
            addContent={this.addContent}
            addComment={this.addComment}
            addTags={this.addTags}
            onClickCreate={this.createNew}
            />
            </div>

            <div className="c_update  mt-5"> 
            <Update
            id={this.state.idToUpdate}
            data={this.state.objectToUpdate}
            title={this.state.titleupdate}
            content={this.state.codeupdate}
            comment={this.state.commentupdate}
            tags={this.state.tagsupdate}
            idToUpdate={this.state.idToUpdate}
            changeId={this.updateId}
            modifyName={this.modifyName}
            modifyComment={this.modifyComment}
            modifyTags={this.modifyTags}
            onClickModify={this.modifyEntry}
            />

            </div>
            </div>
            </div>
            </div>
        );
    }

    // functions

    //add
    addTitle = data => {
        this.setState({ title: data });
    } 

    addContent = code => {
        this.setState({ code: code });
    } 

    addComment = code => {
        this.setState({ comment: code });
    } 

    addTags = tags => {
        const tagsArray = tags.split(',').map(item => { return item.trim() }); 
        this.setState({ tags: tagsArray });
    } 

    createNew = () => {
        this.putDataToDB(this.state.title, this.state.code, this.state.comment, this.state.tags);
        this.setState({
            title: "",
            code: "",
            comment: ""
        })
        this.setState({
            tags: []
        })
    }

    // get item to delete and trigger delete from db
    deleteThis = iddelete => {
        this.setState({ idToDelete: iddelete }, () =>{
            this.deleteFromDB(this.state.idToDelete)
        })       
    }

    //update
    updateId = id => {
        this.setState({
            idToUpdate: id 
        }, () => {
            this.updateUpdate(id);
        })
    }

    updateUpdate = id => {
        const dataFilter1 = this.state.data.filter(item => item.id == this.state.idToUpdate);
        const dataFilter=dataFilter1[0];

        this.setState({
            idToUpdate: id, 
            objectToUpdate: dataFilter,
            titleupdate: dataFilter.name,
            codeupdate: dataFilter.code,
            commentupdate: dataFilter.comment,
            tagsupdate: dataFilter.tags
        })
    }

    updateValue = value => {
        this.setState({
            updateToApply: value 
        })
    }

    modifyValue = (value, name) => {
        this.setState({
            updateToApply: {
                title: this.state.titleupdate,
                code: this.state.codeupdate,
                comment: this.state.commentupdate,
                tags: this.state.tagsupdate,
            } 
        })
    }

    modifyName = (idn, name, value) => {
        const $id = idn.id;
        const nameupdate = `${name}update`;

        // find index of item on data to change state
        const $data = this.state.data;
        let $item = $data.filter(dat =>  dat.id == $id);
        let $order = $data.indexOf($item[0]);
        this.setState({
            [nameupdate] : value,
            data: update(this.state.data, {[$order]: {[name]: {$set: [value]}}})
        }, () => 

            this.filtercode(this.state.data, this.state.tagName)
            , () => console.log([$order], this.state.data[$order].title))
        console.clear();
        console.log($order, this.state.data[$order].tags);

    }

    modifyTags = (value) => {
        const tagsArray = value.split(','); 
        // const tagsArray = value.split(',').map(item => { return item.trim() }); 
        this.setState({
            tagsupdate: tagsArray 
        })
    }

    modifyEntry = e => {
        this.setState({
            updateToApply: {
                name: this.state.titleupdate,
                content: this.state.codeupdate,
                comment: this.state.commentupdate,
                tags: this.state.tagsupdate,
            }
        }, () => {
            this.updateDB(this.state.idToUpdate, this.state.updateToApply);
            this.setState({
                titleupdate: "",
                codeupdate: "",
                commentupdate: "",
                tagsupdate: ""
            })
        })
    }


    // tag management functions 

    // update active tag on input text 
    // in SearchTag component
    updatetag = ( text ) => {
        this.setState({
            searchingTag: text
        }, () => {
            this.filtertagsonsearch(this.state.searchingTag);
        }
        )
    };

    // return matching tags when typing on search
    filtertagsonsearch = ( search ) => {

        const tagsobj = this.state.data; 

        let filtered = [];

        const filter = tagsobj.map(item => {
            item.tags.filter(tag => {
                if ( tag.includes(search) ) {
                    filtered.push(tag); 
                }
            })
            filtered = [...new Set(filtered)];
        })

        // return filter;
        this.setState({
            filteredTags: filtered
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

    // search filter
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
    updateActiveTag = ( newTagName ) => {
        this.setState({
            tagName: newTagName
        })
    }

}

export default App
