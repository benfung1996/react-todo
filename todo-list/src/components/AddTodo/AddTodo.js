import React, { Component } from 'react'

export class AddTodo extends Component {

    state = {
        title: '',
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({
            title: ""
        });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input style={{ flex: '10', padding: '5px' }} type="text" name="title" placeholder="Add Todo..."
                    value={this.state.title} onChange={this.onChange} />
                <input type="submit" value="Submit" className="btn" style={{ flex: '1' }} />
            </form>
        )
    }
}

export default AddTodo