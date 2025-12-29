/**
 * @file logController.js
 * @description Controller for handling log requests
 */

const Log = require('../database/models/log');

/**
 * Handle POST /logs
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware
 */
const createLog = async (req, res, next) => {
  try {
    const { service, level, message, metadata } = req.body;

    const log = new Log({
      service,
      level,
      message,
      metadata: metadata || {},
    });

    await log.save();

    res.status(201).json({
      success: true,
      message: 'Log saved successfully',
      data: log,
    });
  } catch (error) {
    next(error); // Pass error to centralized error middleware
  }
};

module.exports = { createLog };
