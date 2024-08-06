import React from 'react';
import { BrowserRouter  as Router, Route, Routes} from 'react-router-dom';
import TodoList from './components/todolist';
import AddTodo from './components/AddTodo';

function App(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<TodoList />}/>
                <Route path="/add" element={<AddTodo />} />
            </Routes>
        </Router>
    );
}

export default App;