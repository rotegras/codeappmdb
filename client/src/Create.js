import React, { Component } from "react";
import Button from '@material-ui/core/Button';

class Create extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            code: '',
            tags: '',
            comment: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.triggerAdd = this.triggerAdd.bind(this);
    }

    handleChange (e) {
        const { target: { name, value } } = e;
        this.setState ({
            [name]: value
        })
    }

    triggerAdd (e) {
        e.preventDefault();
        const { title, code, tags, comment } = this.state;
        const { onClickCreate } = this.props;
        onClickCreate(title, code, tags, comment);
        this.setState({
            title: '',
            code: '',
            tags: '',
            comment: ''
        })
    }

    render() {
        return (
            <div>
                <h5 className="label">Add content</h5>

                <input
                    type="text"
                    onChange={e => this.handleChange(e)}
                    placeholder="add title"
                    value={this.state.title}
                    name="title"
                />

                <textarea
                    row="3"
                    type="text"
                    onChange={e => this.handleChange(e)}
                    placeholder="add content"
                    value={this.state.code}
                    name="code"
                />

                <input
                    type="text"
                    onChange={e => this.handleChange(e)}
                    placeholder="add tags separated by comma"
                    value={this.state.tags}
                    name="tags"
                />

                <input
                    type="text"
                    onChange={e => this.handleChange(e)}
                    placeholder="add comment"
                    value={this.state.comment}
                    name="comment"
                />

                <Button
                    color="secondary"
                    variant="contained"
                    name="ADD ITEM"
                    onClick={e => this.triggerAdd(e)}
                >
                    ADD ITEM
        </Button>

            </div>
        )
    }
}

export default Create;
