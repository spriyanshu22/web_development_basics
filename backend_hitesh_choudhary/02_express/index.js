import express from 'express';
const app = express();
let port = 3000;

// app.get('/', (req, res) => {
//     res.send('Hello Fro m Priyanshu');
// });
// app.get('/ice-tea', (req, res) => {
//     res.send('Hello From Priyanshu');
// });

import logger from "./logger.js";
import morgan from "morgan";

const morganFormat = ":method :url :status :response-time ms";

app.use(
    morgan(morganFormat, {
      stream: {
        write: (message) => {
          const logObject = {
            method: message.split(" ")[0],
            url: message.split(" ")[1],
            status: message.split(" ")[2],
            responseTime: message.split(" ")[3],
          };
          logger.info(JSON.stringify(logObject));
        },
      },
    })
  );


/*
 > app is an instance of Express. We create it using the express() function. This instance is used to configure the server and define routes.
 > app.get() is a method in Express to handle GET requests. It takes two arguments: the path of the route and a callback function. The callback function takes two arguments: the request object and the response object. The request object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on. The response object represents the HTTP response that the server sends back to the client.
 > However we may also need to need to
 */


// Now we will how to access data from the request object in form of json
app.use(express.json());  // This is a middleware that parses the incoming request with JSON payloads. It is based on body-parser. It is used to parse the incoming request body in JSON format.
// This middleware parses incoming requests with a JSON payload and makes req.body available.
let teaData = []
let index = 1;

// to add a new tea
app.post('/add-tea', (req, res) => {
    
    // LOGGER CAN BE USED TO LOG THE REQUEST BODY
    //logger.info("Request Body: ", req.body);
    
    // let {name, flavor} = req.body; => directly destructuring the object
    
    let newTea = {
        id: index,
        name: req.body.name,
        price: req.body.price,
    }
    teaData.push(newTea);
    index++;
    res.status(201).send(newTea);
});

// to get the list of all the teas 
app.get('/ice-tea', (req, res) => {
    res.status(200).send(teaData);
});

// in case nothing is found
app.get('', (req, res) => {
    res.status(200).send('Hello From Priyanshu');
});

// for finding a tea by id
app.get('/ice-tea/:id', (req,res) => {

    //console.log("Request Params: ", req.params.id);

    let myTea = teaData.find((t) => {
        // console.log("t.id: ", t.id);
        // console.log("req.params.id: ", req.params.id);

        // // printing the data types of both the values
        // console.log("Type of t.id: ", typeof(t.id));
        // console.log("Type of req.params.id: ", typeof(Number(req.params.id)));

        return t.id === Number(req.params.id);

    })

    if(myTea){
        res.status(200).send(myTea);
    }
    else{
        res.status(404).send('Tea Not Found');
    }
});


// for updating a tea by id
app.put('/ice-tea/:id', (req, res) => {
    
    // co nsole.log("Request update Params: ", req.params.id);
    
    let updated = false;
    teaData = teaData.map((t) => {
        if(t.id === Number(req.params.id)){
            t.name = req.body.name;
            t.price = req.body.price;
            updated = true;
            return t;
        }
        else{
            return t;
        }
    })

    if(updated){
        res.status(200).send('Tea Updated');
    }
    else{
        res.status(404).send('Tea Could Not Be Updated');
    }
})


/*
> npm i -D nodemon: Nodemon is a utility that will monitor for any changes in your source and automatically restart your server. Perfect for development. Install it using npm. Also -D flag is used to save it as a dev dependency, which means it will not be included in the production build, as it is a helper tool for development and is a heavy package. Also add the corresponding script in the package.json file : "dev": "nodemon index.js"
*/


// now this is ok but if we enter port like this then during deployment we will have to change the port number in the code. So we can use environment variables to set the port number.
// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}.../`);
// });

import dotenv from 'dotenv';
dotenv.config();

port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}.../`);
});

