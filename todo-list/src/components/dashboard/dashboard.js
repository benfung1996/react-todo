import React, { Component } from 'react'

export default class dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userInput: "",
            items: []
        };
    }

    onChange = (event) => {
        this.setState({userInput: event.target.vaule});
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            userInput: "",
            items: [...this.state.items, this.state.userInput]
        });
    }

    
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input value={this.state.userInput} onChange={this.onChange} />
                    <button>Submit</button>
                </form>

            <input value={this.state.userInput} onChange={this.onChange} />
            </div>
        )
    }
}
