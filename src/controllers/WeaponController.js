import ErroBase from '../models/ErroBase.js';
import { Ammo, Weapon } from '../models/index.js';
import Consts from '../Utils/Consts.js';

class WeaponController {

  static obterTodasAsArmas = async (req, res, next) => {
    try {
      const weapons = await Weapon.find({})
        .populate('municao')
        .exec();
      res.status(Consts.OK).json(weapons);
    } catch (error) {
      next(error);
    }
  };

  static obterArmaPorId = async (req, res, next) => {
    try {
      const weapon = await Weapon.findById(req.params.id)
        .populate('municao', 'calibre')
        .exec();
      if (weapon !== null) {
        res.status(Consts.OK).json(weapon);
      } else {
        const erro = new ErroBase(`Arma de ID = ${req.params.id} não foi encontrada`, Consts.NOT_FOUND);
        next(erro);
      }
    } catch (error) {
      next(error);
    }
  };

  static cadastrarArma = async (req, res, next) => {
    try {
      const weapon = new Weapon(req.body);
      await weapon.save();
      res.status(Consts.CREATED).json(weapon);
    } catch (error) {
      next(error);
    }
  };


  static atualizarArma = async (req, res, next) => {
    try {
      const updatedWeapon = await Weapon.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
      if(updatedWeapon != null) {
        res.status(Consts.OK).send({ message: `${Consts.WEAPON_UPDATE_SUCCESS}`, weapon: updatedWeapon }); 
      } else {
        const erro = new ErroBase(`Arma de ID = ${req.params.id} não foi encontrada`, Consts.NOT_FOUND);
        next(erro);
      }
    } catch (error) {
      next(error);
    }
  };

  static deletarArma = async (req, res, next) => {
    try {
      await Weapon.findByIdAndDelete(req.params.id);
      res.status(Consts.OK).send({ message: `${Consts.WEAPON_DELETE_SUCCESS}` });
    } catch (error) {
      next(error);
    }
  };

  static obterArmasPorFiltro = async (req, res, next) => {
    try {

      const busca = await processaBuscaPorFiltro(req);

      if(busca != null) {
        const armas = await Weapon
          .find(busca)
          .populate('municao');

        await res.status(Consts.OK).json(armas);
      } else {
        res.status(Consts.OK).send([]);
      }
    } catch (error) {
      next(error);
    }
  };

}

async function processaBuscaPorFiltro(req) {

  const { marca, nome, municao } = req.query;

  const busca = {};

  if(marca) busca.marca = { $regex: marca, $options: 'i' };
  if(nome) busca.nome = { $regex: nome, $options: 'i' };
  if(municao) {
    const ammo = await Ammo.findOne({calibre: { $regex: municao, $options: 'i' }});

    if(ammo != null) {
      busca.municao = ammo._id;
    } else {
      busca.municao = null;
    } 

  }

  return busca;
}

export default WeaponController;