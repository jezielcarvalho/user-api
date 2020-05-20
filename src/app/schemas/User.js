import mongoose from 'mongoose';
/**
  CRIA O ESQUEMA DOS DADOS DA APLICAÇÃO
 */
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('User', UserSchema);
