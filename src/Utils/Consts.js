const Consts = {
    URL_DB: String(process.env.URL_CONEXAO_DB),
    COLLECTION_WEAPON: 'Weapons',
    COLLECTION_AMMO: 'Ammo',

    MSG_ERR_CONNECTION: 'Ocorreu um erro ao tentar se conectar com o banco.',
    SUCCESS_CONNECTION: 'Conexão com banco estabelecida com sucesso.',

    CONSOLE_LISTEN: 'Servidor escutando com sucesso.',

    OK: 200,
    ERR: 500,
    CREATED: 201,

    DEFAULT_ROUTE_MSG: 'Essa API irá te fornecer informações sobre armas.',

    ERR_GET_ALL_WEAPON: 'Ocorreu um erro ao buscar por todas as armas.',
    ERR_GET_WEAPON_BY_ID: 'Ocorreu um erro ao buscar pela arma de ID = ',
    ERR_POST_WEAPON: 'Ocorreu um erro ao tentar cadastrar a arma.',
    ERR_UPDATE_WEAPON: 'Não foi possível atualizar a arma.',
    ERR_DELETE_WEAPON: 'Não foi possível deletar a arma.',
    ERR_GET_GUN_BY_MARCA: 'Não foi possível buscar as armas pela marca.',

    ERR_GET_ALL_AMMO: 'Ocorreu um erro ao buscar por todas as munições.',
    ERR_GET_AMMO_BY_ID: 'Ocorreu um erro ao buscar pela munição de ID = ',
    ERR_POST_AMMO: 'Ocorreu um erro ao tentar cadastrar a munição.',
    ERR_UPDATE_AMMO: 'Não foi possível atualizar a munição.',
    ERR_DELETE_AMMO: 'Não foi possível deletar a munição.',

    WEAPON_UPDATE_SUCCESS: 'Arma atualizada com sucesso.',
    WEAPON_DELETE_SUCCESS: 'Arma deletada com sucesso.',    
    
    AMMO_UPDATE_SUCCESS: 'Munição atualizada com sucesso.',
    AMMO_DELETE_SUCCESS: 'Munição deletada com sucesso.'
};

export default Consts;