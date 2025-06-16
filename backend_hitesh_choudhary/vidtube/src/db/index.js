import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

/*
 > NOTE
 > 1) Always use try-catch block to handle errors in database connection as the connection may fail due to various reasons like wrong URL, wrong credentials, etc.
 > 2) For database always use async-await as it is a better way to handle asynchronous operations as the database takes time to connect.
 */

const connectDB = async () => {
    // console.log("call db")
    try {
        // console.log("inside try")
        const connectionInstance = await mongoose.connect(`mongodb+srv://andibandishandi:andibandishandi@practicecluster.wojcp.mongodb.net/practiceCluster`)

        console.log(`Database connected with host: ${connectionInstance.connection.host}`);
    }
    catch (error) {
        console.log("Error in connecting to database: ", error.message);
        process.exit(1);
    }
}

export default connectDB;