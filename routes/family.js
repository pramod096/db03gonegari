var express = require('express');
const family_controlers= require('../controllers/family');
var router = express.Router();
/* GET familys */
router.get('/', family_controlers.family_view_all_Page );
module.exports = router;
/* GET detail family page */
router.get('/detail', family_controlers.family_view_one_Page);



// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
    if (req.user){
     return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }
/* GET create family page */
router.get('/create', secured, family_controlers.family_create_Page);    
/* GET create update page */
router.get('/update', secured, family_controlers.family_update_Page);
/* GET create family page */
router.get('/delete', secured, family_controlers.family_delete_Page);





