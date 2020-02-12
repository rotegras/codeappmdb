import React, { Component } from "react"
import ContentEditable from 'react-contenteditable'
import PropTypes from 'prop-types'
import { faEdit, faTrash, faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ActionButton from './ActionButton'

import './listitems.css'

class ListItems extends Component {

  constructor(props) {
    super(props);

    this.contentEditable = React.createRef();

    this.state = {
      data: this.props.data,
      html: this.props.data.name,
      open: this.props.open
    }

    this.deleteThis = this.deleteThis.bind(this);
    this.updateId = this.updateId.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
    this.TagCallback = this.TagCallback.bind(this);

  }

  deleteThis(e) {
    let idDelete = e.target.id;
    this.props.onClickProp(idDelete);
  }

  updateId(e) {
      this.props.idToUpdate(this.props.data.id, this.props.data.name, this.props.data.code, this.props.data.tags, this.props.data.comment);
  }

  handleChange(e) {
    this.setState({ html: e.target.value });
  };

  toggleOpen(e) {
    this.setState(prevState => ({ open: !prevState.open }))
  }

  TagCallback(e) {
    const newTagName = e.target.name.trim();
    this.props.clickTag(newTagName);
  };

  render() {
    let $open = this.state.open || this.props.open === true ? 'open' : 'close';
    return (
      <li className="item" key={this.props.data._id}>
        <div className="row">
          <div className="item__header col-12 sticky-top sticky-2 d-flex">
            <div className="d-flex space-between bg-dark mx-3 w-100">
              <div>
                <ActionButton
                  className={'action-icon action-icon__' + $open + ' mr-2'}
                  id={this.props.data.id}
                  onClick={e => this.toggleOpen(e)}
                >
                  <FontAwesomeIcon icon={faCaretDown} />
                </ActionButton>
              </div>
              <ContentEditable
                className="mb-3 item-title mr-auto"
                name="title"
                onChange={this.handleChange}
                innerRef={this.contentEditable}
                disabled={false}
                html={this.props.data.name}
                value={this.props.data.name}
              />
              <div>
                <ActionButton
                  className="action-icon ml-2"
                  id={this.props.data.id}
                  variant="round"
                  color="secondary"
                  onClick={e => this.deleteThis(e)}
                >
                  <FontAwesomeIcon icon={faTrash} id={this.props.data.id} />
                </ActionButton>
              </div>
              <div>
                <ActionButton
                  className="action-icon mr-2   ml-2"
                  id={this.props.data.id}
                  onClick={e => this.updateId(e)}
                  variant="round"
                  color="primary"
                >
                  <FontAwesomeIcon icon={faEdit} />
                </ActionButton>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-8 pl-5">

            <span className="mr-2 text-success">
              id: {this.props.data.id}
            </span>
            <div className="content line-break" name="content">
              {this.props.open || this.state.open === true ? this.props.data.code : `${this.props.data.code.substring(0,100)} `}
            </div>
              { this.props.open === false || this.state.open === false && this.props.data.code.length >= 100
                ? '[...]'
                : ''}
            <div className="mt-2 text-secondary">
              {this.props.open || this.state.open === true ? this.props.data.comment : ""}
            </div>
            <span className="id"> id: {this.props.data.id} </span>

          </div>
          <div className="col-12 col-lg-4 ">
            <ul className="taglist px-3 sticky-top sticky-6">
              {this.props.data.tags.map(tag => (
                <li className="taglist tag d-inline" key={`tag${tag}${this.props.data._id}`} name="tags">
                  <button className="tagbutton mb-2 mr-2 px-1 py-1" name={tag.trim()} onClick={(e) => this.TagCallback(e)}>
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

ListItems.propTypes = {
  data: PropTypes.object.isRequired
}

ListItems.defaultProps = {
  open: false,
  data: {
    name: 'default',
    cdde: 'default code',
    tags: ['default', 'tags'],
    comment: 'default comment'
  }
}

export default ListItems;