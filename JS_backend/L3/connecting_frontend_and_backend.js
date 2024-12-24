// creating backend server
// npm init -y
// npm install express
// create a file server.js and write the following code
// const express = require('express');
// const app = express();
// app.get('/', (req, res) => {
//     res.send('Hello World');
// });
// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });
// ....


/*
CREATING FRONTEND 

npm create vite@latest . (dot makes the project in the current directory)
npm i  (to install the dependencies)
npm run dev (to run the server)

NOW CONNECTING FRONTEND AND BACKEND (using AXIOS)
npm install axios  (could also use fetch but axios is easier to use)

NOW using use state and use effect to get the data from the backend 
However the backend is not running on the same port as the frontend so it will show CORS (control allow origin) error


NOW to solve this error we will use proxy in vite.config.js
server:{
    proxy: {
      '/api' : 'http://localhost:3003',
      // In '/api' 'http://localhost:3003' will be appended and also server will think that the request is coming from the same server
      // hence CORS error will not be there
    },
  },

    NOW we can use axios to get the data from the backend  as this makes the server think that the request is coming from the same server

    THIS problem is also solved by using static files in the backend server but this is not a good practice as it will make the server slow and after making changes in the frontend we will have to recreate the static files and copy them to the backend server again

*/
