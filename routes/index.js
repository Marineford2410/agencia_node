import express from 'express';

const router = express.Router();

router.get('/', (request, response) => {
   response.send('Inicio');
});

router.get('/nosotros', (request, response) => {
   response.render('nosotros');
});

export default router;
