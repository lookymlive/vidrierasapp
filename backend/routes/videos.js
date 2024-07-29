import express from 'express';
import { uploadVideo, getVideos } from '../controllers/videoController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/upload', authMiddleware, uploadVideo);
router.get('/', getVideos);

export default router;
