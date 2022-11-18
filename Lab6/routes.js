const express = require("express");
const router = express.Router();
const receiverController = require('./controllers/receiverController');

router.get('/', receiverController.getUsers);

module.exports = router;
