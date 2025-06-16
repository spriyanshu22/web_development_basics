
// Need : To handle the async function in the controller. Wrapping all the async functions in try-catch block is not a good practice. So, we can use this asyncHandler to handle the async functions in the controller.

// asyncHandler takes the requestHandler as an argument and returns a function that takes req, res, and next as arguments. The requestHandler is called with req, res, and next as arguments. If the requestHandler returns a promise, then the promise is resolved and if the promise is rejected, then the error is passed to the next middleware.

const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next))
        .catch((err) => {
            next(error);
        }
        )
    }
}

export default asyncHandler; 

