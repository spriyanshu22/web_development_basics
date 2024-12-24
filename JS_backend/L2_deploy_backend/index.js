console.log("Welcome to Backend Development");
// Hello world

require('dotenv').config();
const express = require('express');
//import express from 'express';
const app = express();

//const port = 3000;  // port number can be anything : decided port number for server
// details like port number can be stored in .env file

// '/' is the home route 
// req : request object : contains all the information about the request
// res : response object : contains all the information about the response
// Here it means that if the server is running at localhost:3000/ then it will send "Hello World" as response
app.get('/', (req, res) => {
    res.send("Hello World");
})

app.get('/about', (req, res) => {
    res.send("This is about page \n I am Priyanshu Kumar");
})

app.get('/login', (req, res) => {
    res.send("<h1>Please logIn<\h1>");
})


// getting the port number from the .env file
port = process.env.PORT || 3000; // if port number is not provided in .env file then it will run at port 3000
// This will start the server at port 3000 and listen to the requests from the port
app.listen(port, () => {
    console.log(`Server running at port ${port}`);
})