import { Viaje } from '../models/Viaje.js';
import { Testimonial } from '../models/Testimoniales.js';

const paginaInicio = async (request, response) => {
   
   const promiseDB = [];
   
   // Consultar 3 viajes del modelo
   promiseDB.push( Viaje.findAll({ limit : 3 }) );

   // Consultar 3 testimoniales
   promiseDB.push( Testimonial.findAll({ limit: 3 }) );

   
   try {
      const resultado = await Promise.all(promiseDB);
      response.render('inicio', {
         pagina : 'Inicio',
         clase : 'home',
         viajes : resultado[0],
         testimoniales : resultado[1]
      });
   } catch (error) {
      console.log(error);
   }
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