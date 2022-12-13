const { CustomAPIError } = require('../errors');
const { StatusCodes } = require('http-status-codes');

const errorHandlerMiddleware = (err, req, res, next) => {
  // Handle in jobs.mongo.js: mongoose.Types.ObjectId.isValid() + overwrite _id
  if (err.name === 'CastError') {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: `Invalid ${err.path}: ${err.value}` });
  }
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err: err.message });
}

module.exports = errorHandlerMiddleware;
