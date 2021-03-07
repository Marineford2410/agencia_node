import { Viaje } from '../models/Viaje.js';

const paginaInicio = (request, response) => {
   response.render('inicio', {
      pagina : 'Inicio'
   });
};

const paginaNosotros = (request, response) => {
   response.render('nosotros', { 
      pagina : 'Nosotros'
   });
};

const paginaViajes = async (request, response) => {
   // Consultar BD
   const viajes = await Viaje.findAll();
   
   response.render('viajes', { 
      pagina : 'Próximos Viajes',
      viajes
   });
};

const paginaTestimoniales = (request, response) => {
   response.render('testimoniales', { 
      pagina : 'Testimoniales'
   });
};

// Muestra un viaje segun el slug
const paginaDetalleViaje = async (request, response) => {
   const { slug } = request.params;

   try {
      const viaje = await Viaje.findOne({ where : { slug } });
      response.render('viaje', {
         pagina : 'Información Viaje',
         viaje 
      });
   } catch (e) {
      console.log(e)
   }
}

export {
   paginaInicio,
   paginaNosotros,
   paginaViajes,
   paginaTestimoniales,
   paginaDetalleViaje
}