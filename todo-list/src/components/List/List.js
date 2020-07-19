import React, { Component } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import PropTypes from 'prop-types';

export default class List extends Component {
    render() {
        return this.props.items.map((item) => (
            <TodoItem key={item.id} item={item} />
        ));
    }
}

//PropTypes
List.propTypes = {
    items: PropTypes.array.isRequired
}
