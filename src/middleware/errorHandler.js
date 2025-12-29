/**
 * @file errorHandler.js
 * @description Centralized error handling middleware
 */

const stackTrace = require('stack-trace');

/**
 * Advanced error middleware
 * @param {Object} err - Error object
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware
 */
const errorHandler = (err, req, res, next) => {
  // Extract stack trace info
  const trace = stackTrace.parse(err)[0]; // first line of stack

  const errorInfo = {
    message: err.message,
    function: trace ? trace.getFunctionName() || 'anonymous' : 'unknown',
    file: trace ? trace.getFileName() : 'unknown',
    line: trace ? trace.getLineNumber() : 'unknown',
    stack: err.stack,
    ip: req.clientIp || 'unknown',
    userAgent: req.userAgent || 'unknown',
    timestamp: new Date().toISOString(),
  };

  // Log to console (later you can log to DB/file)
  console.error(errorInfo);

  // Send safe response
  res.status(500).json({
    success: false,
    message: 'Internal Server Error',
  });
};

module.exports = errorHandler;
