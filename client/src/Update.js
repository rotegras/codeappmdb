import React, { Component } from "react";
import Button from '@material-ui/core/Button'

class Update extends Component {

  constructor(props) {
    super(props);
    this.state = {
      update: this.props.update,
    }

    this.modifyN = this.modifyN.bind(this);
    this.triggerUpdate = this.triggerUpdate.bind(this);
    this.modifyValueTags = this.modifyValueTags.bind(this);
  }

  componentWillReceiveProps(nextProps){
        if(nextProps.update !== this.props.update){
            this.setState({update:nextProps.update});
        }
    }

  modifyN(e) {
    const { target: { name, value } } = e;
    this.setState({
      update: {
        [name]: value
      }
    })
  }

  triggerUpdate(e) {
    this.props.onClickModify(e);
  }

  modifyValueTags(e) {
    let value = e.target.value;
    this.props.modifyTags(value);
  }

  render() {
    return (
      <div>
        <h5 className="label">MODIFY</h5>
        <form>
          <input
            type="text"
            onChange={e => this.modifyN(e)}
            placeholder="modify title"
            value={this.state.update.name}
            name="title"
          />

          <textarea
            type="text"
            onChange={e => this.modifyN(e)}
            placeholder="modify content"
            value={this.state.update.code}
            name="code"
          />

          <input
            type="text"
            onChange={e => this.modifyN(e)}
            placeholder="modify tags"
            value={this.state.update.tags}
          />

          <input
            type="text"
            onChange={e => this.modifyN(e)}
            placeholder="modify cooment"
            value={this.state.update.comment}
            name="comment"
          />
          <div>{this.props.id}</div>
          <Button
            color="primary"
            variant="contained"
            name="UPDATE"
            onClick={e => this.triggerUpdate(e)}
          >
            update
    </Button>
        </form>
      </div>
    );
  }
}

export default Update
