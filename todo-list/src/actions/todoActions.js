import { GET_TODOLIST, POST_TODO } from './types';
import axios from 'axios';

//Get Todolist
export default getTodolist = () => dispatch => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => dispatch({
        type: GET_TODOLIST,
        payload: res
    }));
};

//Post Todo Item
export default postTodo = todoData => dispatch => {
    axios.post('https://jsonplaceholder.typicode.com/posts')
    .then(res => dispatch({
        type: POST_TODO,
        payload: res
    }));
};


