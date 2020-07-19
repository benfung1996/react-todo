import React, { Component } from 'react';
import Header from "../Header/Header";
import List from '../List/List';
import AddTodo from '../AddTodo/AddTodo';
export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
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
        this.setState({ items: [...this.state.items.filter(item => item.id !== id)] })
    }

    //Add Todo
    addTodo = (title) => {
        const newTodo = {
            id: 4,
            title,
            completed: false
        }
        this.setState({ items: [...this.state.items, newTodo] })
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
