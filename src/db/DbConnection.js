import mongoose from "mongoose";
import Consts from "../Utils/Consts.js";

mongoose.connect(Consts.URL_DB + Consts.COLLECTION);

const db = mongoose.connection;

export default db;