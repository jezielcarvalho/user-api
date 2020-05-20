import mongoose from 'mongoose';

/**
  CLASSE DE CONEXÃO À BASE DE DADOS
 */
class Database {
  constructor() {
    this.mongo();
  }

  /**
    MÉTODO DE CONEXÃO AO MONGODB
   */
  async mongo() {
    this.mongoConnection = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    });
  }
}

/**
  EXPORTA UMA NOVA INSTÂNCIA DA CLASSE
 */
export default new Database();
