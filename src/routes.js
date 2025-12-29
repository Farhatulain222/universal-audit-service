/**
 * @file routes.js
 * @description Main routing file for Universal-Audit-Service
 */

const express = require('express');
const router = express.Router();

// Test route (temporary)
router.get('/', (req, res) => {
  res.send('Universal-Audit-Service is running');
});

module.exports = router;
