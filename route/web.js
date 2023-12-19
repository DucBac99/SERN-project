import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRouters = (app) => {
    router.get('/', (req, res) => {
        return res.send("hello admin");
    });

    router.get('/test', homeController.getHomePage);

    return app.use("/", router)
}

module.exports = initWebRouters