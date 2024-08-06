const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const todoRoutes = require('./router/todos');
//const {connectToDatabase } = require('./db/mongobd')

const app = express();
app.use(cors());
app.use(express.json());
app.use('/todos', todoRoutes);

mongoose.connect('mongodb://localhost:27017/todo-db', {
   useNewUrlParser: true,
    useUnifiedTopology: true
    }
    )
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.listen(3000, () => 
    console.log('Server running on port 3000'));
