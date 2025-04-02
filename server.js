// backend/server.js
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './config/db.js';


const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// Database connection
connectDB();

// Routes



// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
