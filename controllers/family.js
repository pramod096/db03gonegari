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
// Handle family delete on DELETE.
exports.family_delete = async function(req, res) {
    console.log("delete "  + req.params.id)
    try {
        result = await family.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
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
// Handle a show one view with id specified by query
exports.family_view_one_Page = async function(req, res) {
    console.log("single view for id "  + req.query.id)
    try{
        result = await family.findById( req.query.id)
        res.render('familydetail', 
{ title: 'family Detail', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for creating a family.
// No body, no in path parameter, no query.
// Does not need to be async
exports.family_create_Page =  function(req, res) {
    console.log("create view")
    try{
        res.render('familycreate', { title: 'family Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for updating a family.
// query provides the id
exports.family_update_Page =  async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
        let result = await family.findById(req.query.id)
        res.render('familyupdate', { title: 'family Update', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle a delete one view with id from query
exports.family_delete_Page = async function(req, res) {
    console.log("Delete view for id "  + req.query.id)
    try{
        result = await family.findById(req.query.id)
        res.render('familydelete', { title: 'family Delete', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
