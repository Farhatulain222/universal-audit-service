/**
 * @file server.js
 * @description Entry point for Universal-Audit-Service
 */

require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const routes = require('./src/routes');

const app = express();

// Middlewares
app.use(helmet());
app.use(express.json());

// Routes
app.use('/', routes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
