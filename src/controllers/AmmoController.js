import Ammo from "../models/Ammo.js"
import Consts from "../Utils/Consts.js";

class AmmoController {

    static obterTodasAsMunicoes = async (req, res) => {
        try {
            const municoes = await Ammo.find({}); 
            res.status(Consts.OK).json(municoes);
        } catch (error) {
            res.status(Consts.ERR).send({error: `${Consts.ERR_GET_ALL_AMMO} - ${error.message}`})
        }
    }

    static obterMunicaoPorId = async (req, res) => {
        try {
            const municao = await Ammo.findById(req.params.id); 
            res.status(Consts.OK).json(municao);
        } catch (error) {
            res.status(Consts.ERR).send({error: `${Consts.ERR_GET_AMMO_BY_ID} - ${error.message}`})
        }
    }

    static cadastrarMunicao = async (req, res) => {
        try {
            const municao = new Ammo(req.body);
            municao.save();
            res.status(Consts.CREATED).json(municao);
        } catch (error) {
            res.status(Consts.ERR).send({error: `${Consts.ERR_POST_AMMO} - ${error.message}`})
        }
    }

    static atualizarMunicao = async (req, res) => {
        try {
            const updatedAmmo = await Ammo.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
            res.status(Consts.OK).send({ message: `${Consts.AMMO_UPDATE_SUCCESS}`, ammo: updatedAmmo });
        } catch (error) {
            res.status(Consts.ERR).send({ error: `${Consts.ERR_POST_AMMO} - ${error.message}` });
        }
    }

    static deletarArma = async (req, res) => {
        try {
            await Ammo.findByIdAndDelete(req.params.id);
            res.status(Consts.OK).send({ message: `${Consts.AMMO_DELETE_SUCCESS}`});
        } catch (error) {
            res.status(Consts.ERR).send({ error: `${Consts.ERR_DELETE_AMMO} - ${error.message}` });
        }
    }

}

export default AmmoController;