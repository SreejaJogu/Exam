import React, {useState, useEffect } from 'react';
import axios from 'axios';
import todo from '../../../backend/models/todo';

function TodoList(){
    const [todos, setTodos] = useState([]);

    useEffect(() =>{
        axios.get('http://localhost:3000/todos')
        .then(response => setTodos(response.data)) 
        .catch(error => console.log(error)); 
    }, []);

    return(
        <div>
            <h1>To-Do-List</h1>
            <ul>
                {
                    todos.map(todo => (
                        <li key={todo._id}>
                            <h3>{todo.title}</h3>
                            <p>{todo.description}</p>
                            <p>completed: {todo.completed ? 'Yes' : 'No'}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}
export default TodoList;