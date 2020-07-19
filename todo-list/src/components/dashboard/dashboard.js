import React, { Component } from 'react';
import List from '../List/List';

export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userInput: "",
            items: [
                {
                    id: 1,
                    title: "Test1",
                    completed: false
                },
                {
                    id: 2,
                    title: "Test2",
                    completed: true
                },
                {
                    id: 3,
                    title: "Test3",
                    completed: false
                },
            ]
        };
    }

    onChange = (event) => {
        this.setState({ userInput: event.target.vaule });
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            userInput: "",
            items: [...this.state.items, this.state.userInput]
        });
    }

    //Toggle Complete
    markComplete = (id) => {
        this.setState({
            items: this.state.items.map(item => {
                if(item.id === id) {
                    item.completed = !item.completed
                }
                return item;
            })
        })
    }


    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input value={this.state.userInput} onChange={this.onChange} />
                    <button>Submit</button>
                </form>
                <List items={this.state.items} markComplete={this.markComplete} />
            </div>
        )
    }
}
