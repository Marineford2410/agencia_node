const express = require('express');
const app = express();
const port = process.env.PORT || 4000;    // Definicion del puerto

app.listen(port, () => {
   console.log(`El servidor esta funcionando en el puerto ${port}`);
})

