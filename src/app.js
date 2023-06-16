import Consts from "./Utils/Consts.js";
import db from "./db/DbConnection.js";
import express from "express";
import routes from "./routes/index.js";

const app = express();

db.on("error", console.log.bind(console, Consts.MSG_ERR_CONNECTION));

db.once('open', () => {
    console.log(Consts.SUCCESS_CONNECTION);
});

routes(app);

export default app;