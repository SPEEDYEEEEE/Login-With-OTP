import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import connect from './database/conn.js';
import router from './router/route.js';

const app = express();

/** Middlewares */
app.use(express.json());
app.use(cors()); // Move the cors middleware here
app.use(morgan('tiny'));
app.disable('x-powered-by'); // Less information about your stack

/** API Routes */
app.use('/api', router);

const port = 8080;

/** HTTP GET Request */
app.get('/', (_req, res) => {
    res.status(201).json("Home GET Request");
});

/** Start the server only when there's a valid database connection */
connect()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server connected to http://localhost:${port}`);
        });
    })
    .catch(error => {
        console.log("Invalid database connection...!");
    });
