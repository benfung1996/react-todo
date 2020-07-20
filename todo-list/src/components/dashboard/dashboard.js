import React, { Component } from 'react';
import Header from "../Header/Header";
import List from '../List/List';
import AddTodo from '../AddTodo/AddTodo';
import axios from 'axios';

export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5")
            .then(res => {
                this.setState({ items: res.data })
            })
    }

    //Toggle Complete
    markComplete = (id) => {
        this.setState({
            items: this.state.items.map(item => {
                if (item.id === id) {
                    item.completed = !item.completed
                }
                return item;
            })
        })
    }

    //Delete Item
    delItem = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(res => {
                this.setState({
                    items: [...this.state.items.filter
                        (item => item.id !== id)]
                })
            })

    }

    //Add Todo
    addTodo = (title) => {
        axios.post("https://jsonplaceholder.typicode.com/todos", {
            title,
            completed: false
        })
            .then(res => this.setState({
                items: [...this.state.items, res.data]
            }))
    }


    render() {
        return (
            <div className="container">
                <Header />
                <AddTodo addTodo={this.addTodo} />
                <List items={this.state.items} markComplete={this.markComplete} delItem={this.delItem} />
            </div>
        )
    }
}
