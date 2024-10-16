import express from 'express';
import dotenv from 'dotenv';
import Route from './routes/index.js'; 
import database from './config/database.js'; 

dotenv.config();

const app = express();

app.use(express.json());

database();
app.use('/api', Route);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});