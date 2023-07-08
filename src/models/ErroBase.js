import { Error } from 'mongoose';

class ErroBase extends Error {
  constructor(mensagem, codigo) {
    super(mensagem).statusCode = codigo;
    this.mensagem = mensagem;
    this.codigo = codigo;
  }
}

export default ErroBase;