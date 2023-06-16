import mongoose from "mongoose";
import Consts from "../Utils/Consts.js";

const AmmoSchema = new mongoose.Schema(
    {
        id: { type: String },
        calibre: { type: String, required: true },
        peso: { type: Number, required: true },
        coeficienteBalistico: { type: Number, required: true }
    }
);

const Ammo = mongoose.model(Consts.COLLECTION_AMMO, AmmoSchema);

export default Ammo;