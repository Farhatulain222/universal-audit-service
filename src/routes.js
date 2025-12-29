/**
 * @file routes.js
 * @description Main routing file for Universal-Audit-Service
 */

const express = require('express');
const router = express.Router();

const { createLog } = require('./controllers/logController');
const validateLog = require('./middleware/logValidator');

router.post('/logs', validateLog, createLog);

module.exports = router;
