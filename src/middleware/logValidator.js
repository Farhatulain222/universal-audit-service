/**
 * @file logValidator.js
 * @description Validation middleware for /logs
 */

const Joi = require('joi');

const logSchema = Joi.object({
  service: Joi.string().required(),
  level: Joi.string().valid('info', 'warn', 'error').required(),
  message: Joi.string().required(),
  metadata: Joi.object().optional(),
});

const validateLog = (req, res, next) => {
  const { error } = logSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ success: false, message: error.details[0].message });
  }
  next();
};

module.exports = validateLog;
