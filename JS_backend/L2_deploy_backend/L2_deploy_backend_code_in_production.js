// computer/mobile  <-> server
// -> send request to server
// <- server will send response

// this will be handled by express.js


// npm init -y -> This will create a package.json file
// in the script add: "start": "node index.js" -> This will run the index.js file when we run npm start

// npm install express -> This will install the express package

/*
    Deploying a backend code in production

-> Push the code to the github repository.
 (Note that files like node_modules, .env, .gitignore should not be pushed to the repository) for this we can add these files to the .gitignore file
-> From any cloud provider like AWS, Azure, Heroku, etc. create an account and create a new project
-> Connect the github repository with the cloud provider
-> Provide the necessary details like the port number, etc. (basically the details that are in the .env file)
-> Deploy the code 
-> You will get a URL which can be used to access the server

*/
