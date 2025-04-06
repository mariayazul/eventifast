
import React from 'react';
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" 
                alt="Equipo de planificadores de eventos" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-purple-100 rounded-lg z-0"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-gold-100 rounded-lg z-0"></div>
          </div>
          
          {/* Content Column */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Sobre Nosotros
            </h2>
            <div className="w-20 h-1 bg-purple-600 mb-8"></div>
            
            <p className="text-lg text-gray-600 mb-8">
              Somos un equipo encargado de crear eventos memorables.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-sm">
                <Calendar className="text-purple-600 mb-4 h-10 w-10" />
                <h3 className="text-xl font-semibold mb-2">+500 Eventos</h3>
                <p className="text-center text-gray-600">Eventos exitosos realizados</p>
              </div>
              
              <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-sm">
                <Clock className="text-purple-600 mb-4 h-10 w-10" />
                <h3 className="text-xl font-semibold mb-2">24/7 Soporte</h3>
                <p className="text-center text-gray-600">Siempre disponibles para ti</p>
              </div>
            </div>
            
            <p className="text-lg text-gray-600 mb-8">
              Nuestra misión es transformar tus ideas en experiencias extraordinarias, adaptándonos a tus necesidades y superando tus expectativas en cada evento.
            </p>
            
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              Conoce a Nuestro Equipo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
