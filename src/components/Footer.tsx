
import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-6">
              <span className="text-gold-500">Fiesta</span>
              <span className="text-purple-400">Planner</span>
            </h3>
            <p className="text-gray-400 mb-6">
              Transformamos tus sueños en eventos inolvidables, cuidando cada detalle para crear experiencias únicas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Servicios</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">Sobre Nosotros</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonios</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contacto</a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Nuestros Servicios</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Bodas</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Eventos Corporativos</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Fiestas Privadas</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Eventos Sociales</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Lanzamientos</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Experiencias Temáticas</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">Dirección:</span>
                <span className="text-gray-400">Av. Insurgentes Sur 1602, Ciudad de México, CDMX 03940</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">Email:</span>
                <a href="mailto:info@fiestaplanner.com" className="text-gray-400 hover:text-white transition-colors">
                  info@fiestaplanner.com
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">Teléfono:</span>
                <a href="tel:+525512345678" className="text-gray-400 hover:text-white transition-colors">
                  +52 (55) 1234 5678
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">Horario:</span>
                <span className="text-gray-400">Lun - Vie: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="text-center">
            <p className="text-gray-500">
              &copy; {new Date().getFullYear()} Fiesta Planner. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
