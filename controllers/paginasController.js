import { Viaje } from '../models/Viaje.js';
import { Testimonial } from '../models/Testimoniales.js';

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

const paginaTestimoniales = async (request, response) => {
   try {
      const testimoniales = await Testimonial.findAll();
      response.render('testimoniales', { 
         pagina : 'Testimoniales',
         testimoniales
      });
   } catch (error) {
      
   }
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