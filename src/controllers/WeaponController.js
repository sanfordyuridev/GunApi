import Weapon from "../models/Weapon.js";
import Consts from "../Utils/Consts.js";

class WeaponController {

    static obterTodasAsArmas = async (req, res) => {
        try {
            const weapons = await Weapon.find({})
                .populate('municao')
                .exec();
            res.status(Consts.OK).json(weapons);
        } catch (error) {
            res.status(Consts.ERR).send({ error: `${Consts.ERR_GET_ALL_WEAPON} - ${error.message}` });
        }
    }

    static obterArmaPorId = async (req, res) => {
        try {
            const weapon = await Weapon.findById(req.params.id)
            .populate('municao', 'calibre')
            .exec();
            res.status(Consts.OK).json(weapon);
        } catch (error) {
            res.status(Consts.ERR).send({ error: `${Consts.ERR_GET_WEAPON_BY_ID} ${req.params.id} - ${error.message}` });
        }
    }

    static cadastrarArma = async (req, res) => {
        try {
            const weapon = new Weapon(req.body);
            weapon.save();
            res.status(Consts.CREATED).json(weapon);
        } catch (error) {
            res.status(Consts.ERR).send({ error: `${Consts.ERR_POST_WEAPON} - ${error.message}` });
        }
    }


    static atualizarArma = async (req, res) => {
        try {
            const updatedWeapon = await Weapon.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
            res.status(Consts.OK).send({ message: `${Consts.WEAPON_UPDATE_SUCCESS}`, weapon: updatedWeapon });
        } catch (error) {
            res.status(Consts.ERR).send({ error: `${Consts.ERR_POST_WEAPON} - ${error.message}` });
        }
    }

    static deletarArma = async (req, res) => {
        try {
            await Weapon.findByIdAndDelete(req.params.id);
            res.status(Consts.OK).send({ message: `${Consts.WEAPON_DELETE_SUCCESS}` });
        } catch (error) {
            res.status(Consts.ERR).send({ error: `${Consts.ERR_DELETE_WEAPON} - ${error.message}` });
        }
    }

    static obterArmasPorMarca = async (req, res) => {
        try {
            const armas = await Weapon.find({marca: req.query.marca});
            res.status(Consts.OK).json(armas);
        } catch (error) {
            res.status(Consts.ERR).send({ error: `${Consts.ERR_GET_GUN_BY_MARCA} - ${error.message}` });
        }
    }

}

export default WeaponController;