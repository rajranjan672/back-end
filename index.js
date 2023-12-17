const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyparser = require('body-parser');
const path = require('path');
const createError = require('http-errors')
const cookies = require("cookie-parser")
const app = express();

// importing routes


 const MongoStore = require('connect-mongo');

//mongodb connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/courses', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database connected sucessfully ')

    },
    error => {
        console.log("couldn't connected to db: " + error)
    }
)


// port
const port = 3001;


app.use(cors({
    origin:'http://localhost:3000', credentials:true
}));
app.use(bodyparser.json());

    
app.use(cookies())


//routes
app.use('/api/user' , require('./router/Login'));


app.get('/', (req,res) => {
    res.send("Hello")
})

app.listen(port, () => {
    console.log("server is running on port "+port)
});