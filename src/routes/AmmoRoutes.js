import Express from 'express';
import AmmoController from '../controllers/AmmoController.js';

const AmmoRouter = Express.Router();

AmmoRouter.get('/Ammo', AmmoController.obterTodasAsMunicoes);
AmmoRouter.get('/Ammo/busca', AmmoController.obterMunicaoPorFiltro);
AmmoRouter.get('/Ammo/:id', AmmoController.obterMunicaoPorId);

AmmoRouter.post('/Ammo', AmmoController.cadastrarMunicao);
AmmoRouter.put('/Ammo/:id', AmmoController.atualizarMunicao);

AmmoRouter.delete('/Ammo/:id', AmmoController.deletarArma);

export default AmmoRouter;