// eslint-disable-next-line no-unused-vars
function ManipuladorDeErros(erro, req, res, next) {
  const statusCode = erro.statusCode || 500;
  res.status(statusCode).send({message: `A API retornou um erro: ${erro.message}`, status: statusCode});
}

export default ManipuladorDeErros;