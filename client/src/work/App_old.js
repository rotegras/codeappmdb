import React, { Component } from 'react';
import axios from 'axios';
import ListItems from './ListItems';
import TagDisplay from './TagDisplay';
import SearchTag from './SearchTag';
import FilteredTags from './FilteredTags';
import './App.css';

let codeFiltered = [];

class App extends Component {
    constructor() {
        super();
        // Setting up initial state
        this.state = {
            code:[],
            tags:[],
            tagId:'',
            tagName:'',
            searchingTag:'',
            filteredTags:[]
        };

        this.filtercode = this.filtercode.bind(this);
        this.updatetag = this.updatetag.bind(this);
        this.filtertagsonsearch = this.filtertagsonsearch.bind(this);
        this.resetInput = this.resetInput.bind(this);
        this.getNodes = this.getNodes.bind(this);
        this.getTags = this.getTags.bind(this);
    }


    // calling the componentDidMount() method after a component is rendered for the first time
    componentDidMount() {
        const codeview = `${this.props.source}/codecontent/?per_page=100`;
        const tagview = `${this.props.source}/tags/?per_page=100`;

        this.getNodes(codeview);
        this.getTags(tagview);
    }

    // callback from FilteredTags Component  with clicked tag
    updateActiveTag = ( newTagName, newTagId ) => {
        this.setState({
            tagId: parseInt(newTagId),
            tagName: newTagName,
            searchingTag: '',
        })
    }

    // calling the componentWillUnmount() method immediately before a component
    // is unmounted from the DOM
    componentWillUnount() {
        this.serverRequest.abort(); 
    }

    render() {

        this.filtercode(this.state.code, this.state.tagId);
        
        return(
            <div className="container-fluid mt-2">
            <div className="row bg-grey">
                <div className="col-12 col-lg-2 py-2 text-lg-right">
                    <div className="position-fixed">
                        <h4 className="mb-0">Code Library</h4>
                        <h6>v 0.1</h6>
                    </div>
                </div>
                <div className="col-12 col-sm-6  col-lg-6 pb-2">
                    <ul className="px-0">
                    {codeFiltered.map( code => { 
                        return( 
                        <ListItems
                        key={code.title.rendered} 
                        title={code.title.rendered} 
                        body={code.content.rendered} 
                        tags={code.tags} 
                        tagnames={this.state.tags}
                        created={code.date}
                        modified={code.modified}
                        />
                        )
                        })} 
                    </ul>
                </div>
                <div className="col-12 col-sm-3 col-lg-3 py-2">
                    <div className="position-fixed">
                        <div className="c_tagdisplay">
                            <h3>Selected Tag</h3>
                            <TagDisplay
                            key={this.state.tagId.toString}
                            id={this.state.tagId}
                            title={this.state.tagName}
                            /> 
                        </div>
                        <div className="c_searchtag">
                            <h3>Search Tag</h3>
                              <SearchTag
                                 keyDown={this.updatetag}
                                 input={this.state.searchingTag}
                                 reset={this.resetInput} 
                            />      
                        </div>
                        <div className="c_filteredtags">
                            <h5 className="mt-3">Matching Tags</h5>
                                {this.state.filteredTags.map(tag => {
                                return(
                                    <FilteredTags
                                    key={tag.index}
                                    id={tag.id}
                                    name={tag.name} 
                                    active={this.state.tagName}
                                    clickTag={this.updateActiveTag}
                                    />
                                ) 
                            })} 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }

    // update active tag on input text 
    // in SearchTag component
    updatetag = ( text ) => {
        this.setState({
            searchingTag: text}, () => {
                this.filtertagsonsearch(this.state.searchingTag);
            }
        )
    };

    // return coincidents tags when typing on search
    filtertagsonsearch = ( search ) => {
        const tagsobj = this.state.tags;
        const filter = tagsobj.filter(tagItem => {
            let name = tagItem.name;
            return name.includes(search);
        })
        // return filter;
        this.setState({
            filteredTags: filter 
        }) 
    }


    resetInput = () => {
        this.setState({
            searchingTag: '',
            filteredTags: [] 
        }) 
    }

        // const getCode = () => {
            // return axios.get(codeview);
        // };

        // const getTags = () => {
            // return axios.get(tagview);
        // };

        // axios requests together
        // const self = this; 
        // this.serverRequest = axios.all([getCode],[getTags])
        //     .then(axios.spread(function (codedata, tagdata)  {
        //         console.log(tagdata[0].data);
        //         self.setState({
        //             code: codedata.data,
        //             tags: tagdata.data,
        //         }).catch(error => {
        //             console.log(error);
        //         }); 
        //     }));
    
    getNodes(term) { 
        axios.get(term)
        .then( codedata => {
            this.setState({
                code: codedata.data
            }).catch(error => {
                console.log(error);
            }); 
        });
    }

    getTags(term) {
        axios.get(term)
        .then( codetags => {
            this.setState({
                tags: codetags.data
            }).catch(error => {
                console.log(error);
            }); 
        });
    }

    filtercode = (data, fltr) => {
        
        codeFiltered = [];

        data.map(item => {
            item.tags.filter(item2 => {
                if (item2 === fltr) {
                    codeFiltered.push(item);
                }
            }); 
            return codeFiltered;
        })
    }
};

export default App;
