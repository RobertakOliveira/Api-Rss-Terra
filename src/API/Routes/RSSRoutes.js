import express from 'express';
import RSSController from '../Controller/RSSController.js';

const router = express.Router();

router.post('/upload', RSSController.uploadFileToS3);
router.get('/download', RSSController.downloadFileFromS3);

export default router;
