import express from 'express';
import router from './routes/index.js';

const app = express();
const port = process.env.PORT || 4000;    // Definicion del puerto

app.use('/', router);                     // Estableciendo rutas
app.set('view engine', 'pug');            // Habilitando PUG
app.use(express.static('public'));        // Definir la carpeta publica

app.listen(port, () => {
   console.log(`El servidor esta funcionando en el puerto ${port}`);
})

