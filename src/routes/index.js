import express from 'express';
import userRoute from './user.route.js'; 


const router = express.Router();

router.use('', userRoute); 
export default router;
