import { Ammo } from '../models/index.js';
import ErroBase from '../models/ErroBase.js';
import Consts from '../Utils/Consts.js';

class AmmoController {

  static obterTodasAsMunicoes = async (req, res, next) => {
    try {
      const municoes = await Ammo.find({}); 
      res.status(Consts.OK).json(municoes);
    } catch (error) {
      next(error);
    }
  };

  static obterMunicaoPorId = async (req, res, next) => {
    try {
      const municao = await Ammo.findById(req.params.id); 
      if(municao !== null) {
        res.status(Consts.OK).json(municao);
      } else {
        const erro = new ErroBase(`Munição de ID = ${req.params.id} não foi encontrada`, Consts.NOT_FOUND);
        next(erro);
      }
    } catch (error) {
      next(error);
    }
  };

  static cadastrarMunicao = async (req, res, next) => {
    try {
      const municao = new Ammo(req.body);
      await municao.save();
      res.status(Consts.CREATED).json(municao);
    } catch (error) {
      next(error);
    }
  };

  static atualizarMunicao = async (req, res, next) => {
    try {
      const updatedAmmo = await Ammo.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
      if(updatedAmmo != null) {
        res.status(Consts.OK).send({ message: `${Consts.AMMO_UPDATE_SUCCESS}`, ammo: updatedAmmo });
      } else {
        const erro = new ErroBase(`Munição de ID = ${req.params.id} não foi encontrada`, Consts.NOT_FOUND);
        next(erro);
      }
    } catch (error) {
      next(error);
    }
  };

  static deletarArma = async (req, res, next) => {
    try {
      await Ammo.findByIdAndDelete(req.params.id);
      res.status(Consts.OK).send({ message: `${Consts.AMMO_DELETE_SUCCESS}`});
    } catch (error) {
      next(error);
    }
  };

  static obterMunicaoPorFiltro = async (req, res, next) => {
    try {
      const { calibre, coeficienteBalistico } = req.query;

      const busca = {};

      if(calibre) busca.calibre = { $regex: calibre, $options: 'i' };
      if(coeficienteBalistico) busca.coeficienteBalistico = { $regex: coeficienteBalistico, $options: 'i' };

      const municoes = await Ammo.find(busca);

      await res.status(Consts.OK).json(municoes);
    } catch (error) {
      next(error);
    }
  };

}

export default AmmoController;