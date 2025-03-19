import express from 'express';
import { getBookById } from '../controllers/bookController.js';

const router = express.Router();

router.get('/:id', getBookById);

export default router;
