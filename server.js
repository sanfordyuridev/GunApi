import 'dotenv/config';
import Consts from './src/Utils/Consts.js';
import app from './src/app.js';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => { 
  console.log(Consts.CONSOLE_LISTEN);
});