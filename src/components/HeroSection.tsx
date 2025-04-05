
import React from 'react';
import { Button } from "@/components/ui/button";
import RegistrationDialog from './RegistrationDialog';

const HeroSection = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 to-purple-600/80 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1498&q=80')",
          filter: "brightness(0.7)"
        }}
      />
      
      <div className="container-custom relative z-20 text-center md:text-left">
        <div className="max-w-3xl mx-auto md:mx-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Convertimos Tus Sueños en Eventos Inolvidables
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto md:mx-0">
            Planificamos cada detalle para que tu evento sea perfecto. Desde bodas y cumpleaños hasta eventos corporativos.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white border-2 border-purple-600 hover:border-purple-700 px-8 py-6 text-lg">
              Nuestros Servicios
            </Button>
            <RegistrationDialog 
              buttonText="Regístrate para Bodas y Fiestas" 
              buttonClassName="bg-transparent text-white border-2 border-white hover:bg-white/10 px-8 py-6 text-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
