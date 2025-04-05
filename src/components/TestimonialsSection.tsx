
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "María López",
    role: "Novia",
    quote: "¡Fiesta Planner hizo que mi boda fuera un sueño hecho realidad! Cada detalle fue perfecto y no tuve que preocuparme por nada. ¡Los recomiendo 100%!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
  },
  {
    name: "Carlos Rodríguez",
    role: "Director de Marketing",
    quote: "Contratamos a Fiesta Planner para nuestro evento corporativo anual y superaron todas nuestras expectativas. Su profesionalismo y atención al detalle son incomparables.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
  },
  {
    name: "Sofia Martínez",
    role: "Organizadora de Gala Benéfica",
    quote: "Gracias a Fiesta Planner, nuestra gala benéfica recaudó más fondos que nunca. Su equipo es increíblemente creativo y eficiente. ¡Ya estamos planeando nuestro próximo evento con ellos!",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80"
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-purple-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-32 h-32 bg-purple-200 rounded-full opacity-70 -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold-200 rounded-full opacity-50 translate-x-24 translate-y-24"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestro compromiso es la satisfacción total de cada cliente. Estas son algunas de las experiencias de quienes han confiado en nosotros.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border-none relative h-full">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="mb-6">
                  <svg className="h-10 w-10 text-purple-400" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                
                <p className="text-gray-700 mb-8 flex-grow">"{testimonial.quote}"</p>
                
                <div className="flex items-center mt-auto">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
