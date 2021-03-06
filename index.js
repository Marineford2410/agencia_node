import express from 'express';

const app = express();
const port = process.env.PORT || 4000;    // Definicion del puerto

app.get('/', (request, response) => {
   response.send('Hola Mundo');
});

app.listen(port, () => {
   console.log(`El servidor esta funcionando en el puerto ${port}`);
})

