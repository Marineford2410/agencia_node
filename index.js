import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';
import { config } from 'dotenv';


const app = express();
config({ path : 'variables.env' });

// Conectar a la base de datos
db.authenticate()
   .then( () => console.log('Base de Datos conectada'))
   .catch( error => console.log(error));

const host = process.env.HOST || '0.0.0.0';    // Definicion del puerto
const port = process.env.PORT || 4000;    // Definicion del puerto

app.set('view engine', 'pug');            // Habilitando PUG

app.use( (request, response, next) => {
   const year = new Date();
   response.locals.actualYear = year.getFullYear();
   response.locals.nombreSitio = 'Agencia de Viajes';
   next();
});

app.use(express.urlencoded({ extended: true }));   // Agregar body parser para leer los datos del formulario

app.use(express.static('public'));        // Definir la carpeta publica
app.use('/', router);                     // Estableciendo rutas

app.listen(port, host, () => {
   console.log(`El servidor esta funcionando en el puerto ${port}`);
})

