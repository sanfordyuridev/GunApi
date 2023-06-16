import express from "express";
import Consts from "../Utils/Consts.js";
import WeaponRouter from "./WeaponRoutes.js";
import AmmoRouter from "./AmmoRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(Consts.OK).send({titulo: Consts.DEFAULT_ROUTE_MSG});
    });

    app.use(
        express.json(),
        WeaponRouter,
        AmmoRouter
    )
}

export default routes;