
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Logo from './Logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-4 px-6 bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <div>
          <a href="/" className="flex items-center">
            <Logo size="md" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-700 hover:text-purple-600 transition-colors">
            Inicio
          </a>
          <a href="#services" className="text-gray-700 hover:text-purple-600 transition-colors">
            Servicios
          </a>
          <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">
            Nosotros
          </a>
          <a href="#testimonials" className="text-gray-700 hover:text-purple-600 transition-colors">
            Testimonios
          </a>
          <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">
            Contacto
          </a>
        </div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Button variant="default" className="bg-purple-600 hover:bg-purple-700 text-white">
            Consulta Gratis
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-white shadow-md z-50">
          <div className="flex flex-col space-y-4 py-4 px-6">
            <a
              href="#home"
              className="text-gray-700 hover:text-purple-600 py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-purple-600 py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-purple-600 py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Nosotros
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-purple-600 py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonios
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-purple-600 py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </a>
            <Button
              variant="default"
              className="bg-purple-600 hover:bg-purple-700 text-white w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Consulta Gratis
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
