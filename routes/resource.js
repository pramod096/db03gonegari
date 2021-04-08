var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var family_controller = require('../controllers/family');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Handbag ROUTES ///
// POST request for creating a Handbag.
router.post('/family', family_controller.family_create_post);
// DELETE request to delete Handbag.
router.delete('/family/:id', family_controller.family_delete);
// PUT request to update Handbag.
router.put('/family/:id', family_controller.family_update_put);
// GET request for one Handbag.
router.get('/family/:id', family_controller.family_detail);
// GET request for list of all Handbag.
router.get('/family', family_controller.family_list);
module.exports = router;