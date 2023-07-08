import Consts from '../Utils/Consts.js';
import ErroBase from '../models/ErroBase.js';

function ManipuladorNotFound(req, res, next) {
  const error = new ErroBase('Página não encontrada', Consts.NOT_FOUND);
  next(error);
}

export default ManipuladorNotFound;