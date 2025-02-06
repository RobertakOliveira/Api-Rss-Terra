const express = require('express');
const RSSController = require('../Controllers/RSSController');
const router = express.Router();

router.get('/upload', RSSController.uploadFileToS3);

module.exports = router;