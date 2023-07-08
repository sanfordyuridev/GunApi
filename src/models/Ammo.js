import mongoose from 'mongoose';
import Consts from '../Utils/Consts.js';

const AmmoSchema = new mongoose.Schema(
  {
    id: { type: String },
    calibre: { type: String, required: [true, 'O campo `calibre` é obrigatório'] },
    peso: { type: Number, required: [true, 'O campo `peso` é obrigatório'], min: [0, 'O campo `peso` precisa ser um valor positivo']},
    coeficienteBalistico: { type: Number, required: [true, 'O campo `coeficiente balístico` é obrigatório'], min: [0, 'O campo `coeficiente balístico` precisa ser um valor positivo'] }
  }
);

const Ammo = mongoose.model(Consts.COLLECTION_AMMO, AmmoSchema);

export default Ammo;