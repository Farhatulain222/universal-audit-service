/**
 * @file logSeeder.js
 * @description Seed script to populate dummy logs
 */

require('dotenv').config();
const mongoose = require('mongoose');
const Log = require('../models/log');

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected for seeding'))
  .catch(err => {
    console.error('MongoDB connection failed:', err);
    process.exit(1);
  });

const dummyLogs = [
  { service: 'Lahoriya', level: 'info', message: 'User logged in', metadata: { userId: '123' } },
  { service: 'Homezze', level: 'warn', message: 'Image upload failed', metadata: { imageId: 'img001' } },
  { service: 'Lahoriya', level: 'error', message: 'Database connection error', metadata: {} },
];

const seedLogs = async () => {
  try {
    await Log.insertMany(dummyLogs);
    console.log('Dummy logs inserted');
    process.exit(0);
  } catch (err) {
    console.error('Seeding failed:', err);
    process.exit(1);
  }
};

seedLogs();
