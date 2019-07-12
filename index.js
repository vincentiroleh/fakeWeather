const express = require('express'); // import express
const app = express(); // initialize express


app.get('/', (req, res) => {
    res.status(200).send({
        message: 'Hello World!'
    });
});

// server our frontend 
app.use(express.static(__dirname + '/public'));

// setup server && port
const port = process.env.PORT || 3000;
const hostname = 'localhost';
app.listen(port, ()=> {
    console.log(`server listening on host: ${hostname} port: ${port}`);
});