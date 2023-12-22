import db from "../models/index";
import CRUDServices from "../services/CRUDServices";

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        console.log('----------------------');
        console.log(data);
        return res.render("homepage.ejs", {data: JSON.stringify(data)});
    } catch (e) {
        console.log(e);
    }
}

let getCRUD = async (req, res) => {
    return res.render('crud.ejs');
}

let postCRUD = async (req, res) => {
    let message = await CRUDServices.createNewUser(req.body);
    console.log(message);
    return res.send('create');
}

let displayGetCRUD = async (req, res) => {
    let data = await CRUDServices.getAllUsers();
    console.log(data);
    return res.render('displayCRUD.ejs', {data: data});
}

let getEditCRUD = async (req, res) => {
    let userId = req.query.id;
    if (userId) {
        let userData = await CRUDServices.getUserInfoById(userId);
        return res.render('editCRUD.ejs', {userData: userData});
    } else {
        return res.send('User not found');
    }
}

let putCRUD = async (req, res) => {
    let data = req.body;
    await CRUDServices.updateUserData(data);
    return res.redirect('get-CRUD');
}

let deleteCRUD = async (req, res) => {
    let id = req.query.id;
    if (id) {
        await CRUDServices.deleteUserById(id);
    return res.send('delete user success');
    } else {
        return res.send('user not found');
    }
    
}

module.exports = {
    getHomePage: getHomePage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
    getEditCRUD: getEditCRUD,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD
}