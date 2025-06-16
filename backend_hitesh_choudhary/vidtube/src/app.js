import express from 'express';
import cors from 'cors';


const app = express();
export default app; // exporting the app so that it can be used in other files


// CORS: Cross-Origin Resource Sharing is a mechanism that uses additional HTTP headers to tell browsers to give a web application running at one origin, access to selected resources from a different origin, enhancing the web application's security.
app.use(
    cors({
        origin: process.env.CORS_ORIGIN || "*",
        credentials: true,
    })
);


// Parse JSON bodies (as sent by API clients): This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.json({ limit: "50mb" }));
// Parse URL-encoded bodies (as sent by HTML forms): This is a built-in middleware function in Express. It parses incoming requests with URL-encoded payloads and is based on body-parser.
app.use(express.urlencoded({ extended: true }));
// Serving static files: This is a built-in middleware function in Express. It serves static files and is based on serve-static.
app.use(express.static("public"));
