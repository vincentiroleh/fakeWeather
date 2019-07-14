import express from 'express'; // import express
import logger from 'morgan';



const app = express(); // initialize express

app.use(logger('dev'));

app.get('/hello', (req, res) => {
    res.status(200).send({
        message: 'Hello World!'
    });
});

// serve our frontend 
app.use(express.static(__dirname + '/public'));

// setup server && port
const port = process.env.PORT || 3000;
const hostname = 'localhost';
app.listen(port, ()=> {
    console.log(`server listening on host: ${hostname} port: ${port}`);
});