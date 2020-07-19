import React, { Component } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import PropTypes from 'prop-types';

export default class List extends Component {
    render() {
        return this.props.items.map((item) => (
            <TodoItem key={item.id} item={item} markComplete={this.props.markComplete} delItem={this.props.delItem} />
        ));
    }
}

//PropTypes
List.propTypes = {
    items: PropTypes.array.isRequired
}
