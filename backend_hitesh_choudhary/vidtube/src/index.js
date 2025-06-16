/*
 > For structuring src folder the commands are : 
    npm i prettier 
 
    touch src
    mkdir src
    cd src
    mkdir contorllers middlewares db models routes utils
    touch app.js index.js constants.js .env .env.sample readme.md
    
    touch db/index.js 

    cd models
    touch comment.model.js like.model.js playlist.model.js subscriber.model.js video.model.js tweet.model.js user.model.js view.model.js

    cd .. ..
    npm i express mongoose morgan winston

    npm i cors
    npm i -D nodemon
 */

import app from './app.js';

import dotenv from 'dotenv';
import connectDB from './db/index.js';
dotenv.config();

const PORT = process.env.PORT || 3001;

connectDB()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}.../`);
    });
})
.catch((error) => console.log("Error in connecting to database2: ", error.message));