import React, { Component } from "react"
import ContentEditable from 'react-contenteditable'
import { faEdit,faTrash, faCaretDown  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from '@material-ui/core/Button';

class ListItems extends Component {

    constructor(props) {
        super(props);        
        this.contentEditable = React.createRef();
        this.state = {
            id : this.props.id,
            title : this.props.title,
            content : this.props.content,
            comment : this.props.comment,
            tags : this.props.tags,
            onClickProp : this.props.onClickProp,
            idToUpdate : this.props.idToUpdate,
            html : this.props.title,
            open : this.props.open 
        }

    }

    deleteThis = e => {
        let idDelete = e.target.id;
        this.state.onClickProp(idDelete);
    }

    updateId = e => {
        let idupdate = e.target.id;
        idupdate[0] && this.state.idToUpdate(idupdate);
    }

    handleChange = e => {
        this.setState({html : e.target.value});
    };

    toggleOpen = e => {
        this.setState(prevState => ({open: !prevState.open }))
    }

    TagCallback = e => {
        const newTagName = e.target.name.trim();
        this.props.clickTag ( newTagName );
    };


    render(){
        return (
            <li className="item" key={this.state.id}>
                <div className="row">
                    <div className="col-12 sticky-top sticky-2 d-flex">
                                <div className="d-flex space-between bg-dark mx-3 w-100">
                                    <Button 
                                        className={`action-icon action-icon__${
                                            this.state.open || this.props.open === true ? 
                                            "open" : 
                                            "close"} 
                                        mr-2`}  
                                        variant="rounded" 
                                        color="primary"
                                        id={this.state.id} 
                                        onClick={e => this.toggleOpen(e)}
                                    >
                                        <FontAwesomeIcon icon={faCaretDown} className="text-white" />
                                    </Button>
                                    <ContentEditable 
                                        className="mb-3 item-title mr-auto"
                                        name="title" 
                                        onChange={this.handleChange} 
                                        innerRef={this.contentEditable}
                                        disabled={false} 
                                        html={this.state.title}
                                        value={this.state.title}
                                    />
                                    <div>id: {this.state.id}</div>
                                    <Button 
                                        className="action-icon ml-2" 
                                        id={this.state.id} 
                                        variant="contained" 
                                        color="info"
                                        onClick={e => this.deleteThis(e)}
                                    >
                                        <FontAwesomeIcon icon={faTrash} id={this.state.id}/>
                                    </Button> 

                                    <Button 
                                        className="mr-2 action-icon ml-2" 
                                        id={this.state.id} 
                                        onClick={e => this.updateId(e)}
                                        variant="contained" 
                                        color="secondary"
                                    >
                                        <FontAwesomeIcon icon={faEdit} />
                                    </Button>
                                </div>
                    </div>
                    <div className="col-12 col-lg-8 pl-5">

                            <div className="content line-break" name="content">
                                {this.props.open === true || this.state.open ? this.state.content : ""}
                            </div>
                            <div className="mt-2 text-secondary">
                                {this.props.open || this.state.open === true ? this.state.comment : ""}
                            </div>
                            <span className="id"> id: {this.state.id} </span>

                    </div>
                    <div className="col-12 col-lg-4 ">
                            <ul className="taglist px-3 sticky-top sticky-6">
                                {this.state.tags.map(tag => (
                                    <li className="taglist tag d-inline" key={`${this.state.id}${tag}`} name="tags">
                                        <button className="tagbutton mb-2 mr-2 px-3" name={tag.trim()} onClick={(e) => this.TagCallback(e)}>
                                        {tag.trim()}
                                        </button>
                                    </li>
                                ))} 
                            </ul>
                        </div>
                    </div>
            </li>
        );
    }
}

export default ListItems;
