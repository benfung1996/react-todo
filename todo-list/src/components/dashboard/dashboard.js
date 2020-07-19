import React, { Component } from 'react';
import Header from "../Header/Header";
import List from '../List/List';
import AddTodo from '../AddTodo/AddTodo';
import { v4 as uuidv4 } from 'uuid';

export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: uuidv4(),
                    title: "Test1",
                    completed: false
                },
                {
                    id: uuidv4(),
                    title: "Test2",
                    completed: true
                },
                {
                    id: uuidv4(),
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
        console.log(id)
        this.setState({ items: [...this.state.items.filter(item => item.id !== id)] })
    }

    //Add Todo
    addTodo = (title) => {
        const newTodo = {
            id: uuidv4(),
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
