import mongoose from 'mongoose';
import Consts from '../Utils/Consts.js';

const WeaponSchema = new mongoose.Schema(
  {
    id: {type: String},
    nome: {type: String, required: [true, 'O campo `nome` é obrigatório']},
    marca: {type: String, required: [true, 'O campo `marca` é obrigatório']},
    acabamento: {type: String, required:  [true, 'O campo `acabamento` é obrigatório']},
    numeroDeTiros: {type: Number, required:  [true, 'O campo `numero de tiros` é obrigatório'], min: [0, 'O campo `numero de tiros` precisa ser um valor positivo']},
    quantidadeDeCanos: {type: Number, required:  [true, 'O campo `quantidade de canos` é obrigatório'], min: [0, 'O campo `quantidade de canos` precisa ser um valor positivo']},
    municao: {type: mongoose.Schema.Types.ObjectId, ref: 'Ammo', required:  [true, 'O campo `municao` é obrigatório']}
  }
);

const Weapon = mongoose.model(Consts.COLLECTION_WEAPON, WeaponSchema);

export default Weapon;