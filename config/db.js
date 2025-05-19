const mongoose = require('mongoose');
require('dotenv').config();


const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const dbName = mongoose.connection.name;
    console.log(`🔗 MongoDB conectado com sucesso ao banco: ${dbName}`);
  } catch (error) {
    console.error('💀 Erro ao conectar ao MongoDB: ', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;