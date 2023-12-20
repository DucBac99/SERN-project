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

module.exports = {
    getHomePage: getHomePage,
    getCRUD: getCRUD,
    postCRUD: postCRUD
}