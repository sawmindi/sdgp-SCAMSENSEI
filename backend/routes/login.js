const express = require("express");
const router = express.Router();
const login = require("../controllers/logincontroller.js");
router.route("/").get(login.GetCart);

module.exports = router;