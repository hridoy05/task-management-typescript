const express = require('express')


//Instantiate express app
const app = express()

//Define server port
const port  = 3200

//Create a default route

app.get('/', (req, res)=> {
    res.send("Hello  from typescript project")
})


// Start Listening to the request on the defined port

app.listen(port)