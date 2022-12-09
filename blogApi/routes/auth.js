const userControls = require("../controls/userControl");
const express = require("express");
const router = express.Router()

const {Register,Login} = userControls


router.post("/register",Register)
router.post("/login",Login)


module.exports = router