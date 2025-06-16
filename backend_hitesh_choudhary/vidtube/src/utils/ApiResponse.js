// This file is used to send the response in a standard format.

class ApiResponse {
    constructor(statusCode, message="Success", data) {
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
        this.success = statusCose < 400; 
    }
}