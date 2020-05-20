import 'dotenv/config';
import app from './app';

/**
  INICIA O APP NA PORTA 3000 
 */
app.listen(process.env.PORT, () => {
  console.log(`API running on port ${process.env.PORT}`);
});
