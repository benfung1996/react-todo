import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    getStyle= () => {
        if(this.props.item.completed) {
            return {
                textDecoration: 'line-through'
            }
        } else {
            return {
                textDecoration: 'none'
            }
        }
    }

    render() {
        return (
            <div style={this.getStyle()}>
                <li>{this.props.item.title}</li>
            </div>
        )
    }
}

//PropTypes
TodoItem.propTypes = {
    item: PropTypes.object.isRequired
}

const itemStyles = {
    backgroundColor: '#f4f4f4'
}

export default TodoItem
