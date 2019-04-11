import mongoose from 'mongoose';
// Nomenclaturas usadas a partir dos requisitos repassados
module.exports = () => {
  const schema = new mongoose.Schema({
    id: {
      type: String,
      trim: true,
      required: true,
    },
    nome: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    senha: {
      type: String,
      required: true,
    },
    telefones: [],
    data_criacao: {
      type: Date,
      default: Date.now,
    },
    data_atualizacao: {
      type: Date,
      default: Date.now,
    },
    token: {
      type: String,
    },
    ultimo_login: {
      type: Date,
      default: Date.now,
    },
  });

  return mongoose.model('user', schema);
};
