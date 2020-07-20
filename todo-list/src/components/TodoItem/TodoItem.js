import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.item.completed ?
                'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.item;
        return (
            <div style={this.getStyle()}>
                <ul>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
                    {title}
                    <button onClick={this.props.delItem.bind(this, id)} style={btnStyle}>x</button>
                </ul>
            </div>
        )
    }
}

//PropTypes
TodoItem.propTypes = {
    item: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delItem: PropTypes.func.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5p 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem
