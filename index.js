import express from 'express'; // import express
import logger from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes/index';


const app = express(); // initialize express

app.use(logger('dev')); // Log requests to the console

app.use(cors()); // enable all cors requests

// setup body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false,
}));

app.use(routes);

// serve our frontend 
app.use(express.static(__dirname + '/public'));

// setup server && port
const port = process.env.PORT || 3000;
const hostname = 'localhost';

app.listen(port, () => {
    console.log(`server listening on host: ${hostname} port: ${port}`);
});

export default app;