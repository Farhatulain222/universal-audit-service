/**
 * @file server.js
 * @description Entry point for Universal-Audit-Service
 */

require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const routes = require('./src/routes');
const connectDB = require('./src/database/connection');
const requestMetadata = require('./src/middleware/requestMetadata');
const errorHandler = require('./src/middleware/errorHandler');

// Connect to MongoDB
connectDB();


const app = express();

// Middlewares
app.use(helmet());
app.use(express.json());
app.use(requestMetadata);   

// Routes
app.use('/', routes);


// Advanced error handling middleware (LAST)
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

