const express = require("express");
const router = express.Router();

const { sendCV, getCV } = require("./controllers/CvController");
const { getForm } = require("./controllers/FormController");
const fs = require("fs");

router.get("/create_cv", getForm);
router.post('/create_cv', getCV);

router.get("/", sendCV);


module.exports = router;
