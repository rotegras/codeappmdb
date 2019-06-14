import React, { Component } from "react"
import ContentEditable from 'react-contenteditable'

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
            open : false
        }
        
    }

    deleteThis = e => {
        let idDelete = e.target.id;
        this.state.onClickProp(idDelete);
    }

    updateId = e => {
        let idupdate = e.target.id;
        this.state.idToUpdate(idupdate);
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
                    <div className="col-12 sticky-top d-flex space-between">
                        <ContentEditable 
                            className="mb-3 item-title mr-auto bg-dark px-3"
                            name="title" 
                            onChange={this.handleChange} 
                            innerRef={this.contentEditable}
                            disabled={false} 
                            html={this.state.title}
                            value={this.state.title}
                        />
                        <button className={`action-icon action-icon__${this.state.open === true ? "open" : "close"}`}  id={this.state.id} onClick={e => this.toggleOpen(e)}>
                        </button>
                        <button className="action-icon action-icon__trash" id={this.state.id} onClick={e => this.deleteThis(e)}>
                        </button> 
                        <button className="action-icon action-icon__edit" id={this.state.id} onClick={e => this.updateId(e)}>
                        </button>
                    </div>

                    <div className="col-12">

                        <div className="content line-break" name="content">
                            {this.state.open === true ? this.state.content : ""}
                        </div>
                        <ul className="taglist">
                            {this.state.tags.map(tag => (
                                <li className="taglist tag d-inline" key={tag.index} name="tags">
                                    <button className="tagbutton mb-2 mr-2 px-3" name={tag.trim()} onClick={(e) => this.TagCallback(e)}>
                                    {tag.trim()}
                                    </button>
                                </li>
                            ))} 
                        </ul>
                        <div>
                            {this.state.comment}
                        </div>
                        <span className="id"> id: {this.state.id} </span>
                    </div>
                </div>
            </li>
        );
    }
}

export default ListItems;
