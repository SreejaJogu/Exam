import React, { useState } from 'react';
import axios from 'axios';
import { response } from 'express';

function AddTodo(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.post('http://localhost:3000/todos', { title, description})
        .then(response => {
            setTitle('');
            setDescription('');
            alert('To-Do added!');
        })
        .catch(error =>console.log(error));
    };

    return(
        <div>
            <h2>Add New To-Do</h2>
            <form onSumbit = {handleSubmit}>
                <label>
                    Title:
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </label>
                <label>
                    Description:
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
                </label>
                <button type="submit">Add To-Do</button>

            </form>
        </div>
    );
}
export default AddTodo;