/**
 * @file requestMetadata.js
 * @description Middleware to capture IP address and User-Agent for each request
 */

const requestMetadata = (req, res, next) => {
  // Capture IP
  req.clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

  // Capture User-Agent
  req.userAgent = req.headers['user-agent'] || 'unknown';

  // Continue to next middleware/controller
  next();
};

module.exports = requestMetadata;
