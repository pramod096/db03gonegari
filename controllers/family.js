var family = require('../models/family');
// List of all familys
exports.family_list = async function(req, res) {
    try{
    thefamily = await family.find();
    res.send(thefamily);
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
    };


// for a specific family.
exports.family_detail = function(req, res) {
res.send('NOT IMPLEMENTED: family detail: ' + req.params.id);
};
// Handle family create on POST.
exports.family_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: family create POST');
};
// Handle family delete form on DELETE.
exports.family_delete = function(req, res) {
res.send('NOT IMPLEMENTED: family delete DELETE ' + req.params.id);
};
// Handle family update form on PUT.
exports.family_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: family update PUT' + req.params.id);
};
// VIEWS
// Handle a show all view
exports.family_view_all_Page = async function(req, res) {
    try{
    thefamily = await family.find();
    res.render('family', { title: 'family Search Results', results: thefamily });
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
    };