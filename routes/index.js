import express from 'express';

const router = express.Router();

router.get('/', (request, response) => {
   response.render('inicio');
});

router.get('/nosotros', (request, response) => {
   const viajes = 'Viaje a Alemania';

   response.render('nosotros', { viajes });
});

export default router;
