import express from 'express';
import {createConnection} from "typeorm";
import {Article} from "./Entities/Article";
import {User} from "./Entities/User";

const app = express();

app.get('/', (req, res) => {
    res.send("Hello World");
})

async function start() {
    await createConnection({
        type: 'postgres',
        username: 'conduit',
        password: 'conduit',
        entities: [Article, User],
        synchronize: true,
        dropSchema: true,
        logging: true,
        logger: "advanced-console"
    })
    app.listen(3000, () => {
        console.log('Server started on http://localhost:3000');
    })
}

start()