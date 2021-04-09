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
exports.family_detail = async function(req, res) {
    console.log("detail"  + req.params.id)
    try {
        result = await family.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle family create on POST.

    exports.family_create_post = async function(req, res) {
    console.log(req.body)
    let document = new family();
    // We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"familytype":"goat", "cost":12, "size":"large"}
document.lastName = req.body.lastName;
document.address = req.body.address;
document.phoneNumber = req.body.phoneNumber;
try{
let result = await document.save();
res.send(result);
}
catch(err){
res.error(500,`{"error": ${err}}`);
}
};


// Handle family delete form on DELETE.
exports.family_delete = function(req, res) {
res.send('NOT IMPLEMENTED: family delete DELETE ' + req.params.id);
};
// Handle family update form on PUT.
exports.family_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await family.findById( req.params.id)
        // Do updates of properties
        if(req.body.lastName) toUpdate.lastName = req.body.lastName;
        if(req.body.address) toUpdate.address = req.body.address;
        if(req.body.phoneNumber) toUpdate.phoneNumber = req.body.phoneNumber;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
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