import express, {
  Express,
  Response,
  Request,
} from 'express';
import dotenv from 'dotenv';

//Instantiate express app
const app: Express = express();
dotenv.config();

//Define server port
const port = process.env.PORT;

//Create a default route

app.get('/', (req: Request, res: Response) => {
  res.send('Hello  from typescript project');
});

// Start Listening to the request on the defined port

app.listen(port);
