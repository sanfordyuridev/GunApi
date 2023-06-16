import mongoose from "mongoose";
import Consts from "../Utils/Consts.js";

const WeaponSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        marca: {type: String, required: true},
        acabamento: {type: String, required: true},
        numeroDeTiros: {type: Number, required: true},
        quantidadeDeCanos: {type: Number, required: true},
        municao: {type: mongoose.Schema.Types.ObjectId, ref: 'Ammo', required: true}
    }
);

const Weapon = mongoose.model(Consts.COLLECTION_WEAPON, WeaponSchema);

export default Weapon;