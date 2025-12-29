/**
 * @file log.js
 * @description Mongoose schema for storing logs in Universal-Audit-Service
 */

const mongoose = require('mongoose');

/**
 * Log Schema
 * @typedef {Object} Log
 * @property {String} service - Name of the service sending the log (required)
 * @property {String} level - Log level (info, warn, error) (required)
 * @property {String} message - Log message (required)
 * @property {Object} metadata - Optional metadata (JSON)
 * @property {Date} createdAt - Timestamp of log creation (default: now)
 */
const logSchema = new mongoose.Schema({
  service: {
    type: String,
    required: true,
    trim: true,
  },
  level: {
    type: String,
    enum: ['info', 'warn', 'error'],
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  metadata: {
    type: Object,
    default: {},
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Log', logSchema);
