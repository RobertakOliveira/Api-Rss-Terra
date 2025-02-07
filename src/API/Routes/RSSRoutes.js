import express from 'express';
import RSSController from '../Controller/RSSController.js';

const router = express.Router();

router.post('/upload', RSSController.uploadFileToS3);

export default router;
