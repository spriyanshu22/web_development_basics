import express from 'express';
// ***
// this gives error so either use require or change the type of module in package.json

import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to Backend Development");
});

// get a list of 5 jokes wtih title and body
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            title: "Programming Joke",
            body: "Why do programmers prefer dark mode? Because light attracts bugs."
        },
        {
            title: "Bar Joke",
            body: "I told my wife she should embrace her mistakes. She gave me a hug."
        },
        {
            title: "Math Joke",
            body: "Parallel lines have so much in common. It’s a shame they’ll never meet."
        },
        {
            title: "Science Joke",
            body: "I told my wife she should embrace her mistakes. She gave me a hug."
        },
        {
            title: "Dad Joke",
            body: "I used to play piano by ear, but now I use my hands."
        }
    ];
    res.send(jokes);
});

const port = process.env.PORT || 3100;

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});