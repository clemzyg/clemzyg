const userControls = require("../controls/userControl");
var express = require('express');
var router = express.Router();
const {Update} = userControls

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.put("/update",Update)

module.exports = router;
