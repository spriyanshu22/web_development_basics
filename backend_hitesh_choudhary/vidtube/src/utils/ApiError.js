

class ApiError extends Error {
    constructor(statusCode,
        message = "Something went wrong",
        error = [],
        stack = "") {
        super(message); // Calls the parent class constructor
        this.statusCode = statusCode;
        this.error = error;
        this.stack = stack;
        this.data = null;
        this.message = message;
        this.success = false;
    }
}