import dotenv from 'dotenv';
dotenv.config();
import express, { Express } from 'express';
import { AppDataSource } from './data-source';



const PORT = process.env.PORT;
const server: Express = express();

const initServer = async () => {
    try {
        await AppDataSource.initialize();
        console.log('> Database is connected!');
        server.listen(PORT, () => {
            console.log(`> Server has started!\n> Port: ${PORT}`);
        });
    } catch (err) {
        console.log(err);
    }
};

initServer();