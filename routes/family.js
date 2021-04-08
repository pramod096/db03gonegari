var express = require('express');
const family_controlers= require('../controllers/family');
var router = express.Router();
/* GET familys */
router.get('/', family_controlers.family_view_all_Page );
module.exports = router;
