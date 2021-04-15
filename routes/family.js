var express = require('express');
const family_controlers= require('../controllers/family');
var router = express.Router();
/* GET familys */
router.get('/', family_controlers.family_view_all_Page );
module.exports = router;
/* GET detail family page */
router.get('/detail', family_controlers.family_view_one_Page);
/* GET create family page */
router.get('/create', family_controlers.family_create_Page);
/* GET create family page */
router.get('/create', family_controlers.family_create_Page);
/* GET create update page */
router.get('/update', family_controlers.family_update_Page);
/* GET create family page */
router.get('/delete', family_controlers.family_delete_Page);





