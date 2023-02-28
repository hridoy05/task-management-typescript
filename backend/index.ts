import express, {Express, Response, Request} from 'express'


//Instantiate express app
const app: Express = express()

//Define server port
const port  = 3200

//Create a default route

app.get('/', (req: Request, res: Response)=> {
    res.send("Hello  from typescript project")
})


// Start Listening to the request on the defined port

app.listen(port)