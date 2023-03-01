import express, {
  Express,
  Response,
  Request,
} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { DataSource } from 'typeorm';
import bodyParser from 'body-parser';
import { Task } from './src/tasks/tasks.entity';

//Instantiate express app
const app: Express = express();
dotenv.config();

//parse the request body
app.use(bodyParser.json());

//use cors install types
app.use(cors());

//Create Database Connection

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  entities: [Task],
  synchronize: true,
});

//Define server port
const port = process.env.PORT;

//Create a default route

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello  from typescript project');
});
AppDataSource.initialize()
  .then(() => {
    // Start Listening to the request on the defined port
    app.listen(port);
    console.log('datasource has been initialized');
  })
  .catch(() => {
    console.log('Error during data source');
  });
