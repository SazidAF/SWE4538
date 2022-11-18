const express = require("express");
const router = express.Router();
const receiverController = require('./controllers/receiverController');
const messageController = require('./controllers/messageController');

router.get('/', receiverController.getUsers );
router.post('/send',receiverController.postMessage);

module.exports = router;
