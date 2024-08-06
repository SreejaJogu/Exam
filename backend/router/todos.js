const express = require('express');
const router = express.Router();
const ToDo = require('../models/todo');


//GET /todos
router.get('/', async (req, res) =>{
    try{
        const todos = await ToDo.find();
        res.json(todos);
    }catch (err){
        res.status(500).json({
            message:err.message
        });
    }
});

//POST /todos
router.post('/', async (req, res) =>{
    const todo = new ToDo({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const newTodo = await todo.save();
        res.status(201).json(newTodo);

    } catch (err) {
        res.status(400).json({
            message: err.message
        });
    }
});

module.exports = router;