import express from 'express';
import { addUser } from '../controller/Controller.js';

const router = express.Router();
// routes are diplayed here by its methods

router.post('/signup', addUser);


{
    /*exporting the routers */
}
export default router;