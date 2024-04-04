import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import userRoute from './routes/users.js';
import authRoute from './routes/auth.js';
import docRoute from './routes/doctor.js';
import equipRoute from './routes/equipments.js'
import feedRoute from './routes/feedback.js'
import hospitalRouter from './routes/hospital.js'


dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());

app.use('/api/v1/users', userRoute);
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/doctor', docRoute);
app.use('/api/v1/equipments', equipRoute);
app.use('/api/v1/feedback', feedRoute);
app.use('/api/v1/hospitals', hospitalRouter);


// Database connection
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB database connected');
  } catch (err) {
    console.error('MongoDB database connection failed');
    process.exit(1); 
  }
};

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Internal Server Error' });
});

app.listen(port, () => {
  connect();
  console.log('Server listening on port', port);
});
