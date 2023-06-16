import express from "express";
import WeaponController from "../controllers/WeaponController.js";

const WeaponRouter = express.Router();

WeaponRouter.get('/Weapon', WeaponController.obterTodasAsArmas);
WeaponRouter.get('/Weapon/busca', WeaponController.obterArmasPorMarca);
WeaponRouter.get('/Weapon/:id', WeaponController.obterArmaPorId);

WeaponRouter.post('/Weapon', WeaponController.cadastrarArma);
WeaponRouter.put('/Weapon/:id', WeaponController.atualizarArma);

WeaponRouter.delete('/Weapon/:id', WeaponController.deletarArma);

export default WeaponRouter;