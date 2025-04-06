
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  MapPin, 
  Mail, 
  Phone, 
  Facebook, 
  Instagram, 
  TiktokIcon, 
  MessageSquare,
  User
} from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isRequestingPersonalContact, setIsRequestingPersonalContact] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Mensaje Enviado",
        description: "Gracias por contactarnos, te responderemos pronto.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        message: ''
      });
      setIsRequestingPersonalContact(false);
    }, 1500);
  };

  const togglePersonalContact = () => {
    setIsRequestingPersonalContact(!isRequestingPersonalContact);
    if (!isRequestingPersonalContact) {
      setFormData(prev => ({
        ...prev,
        message: prev.message + "\n\nSolicito contacto personal con un encargado."
      }));
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contacta Con Nosotros
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aquí para ayudarte a planificar tu próximo evento. Envíanos un mensaje y nos pondremos en contacto contigo muy pronto.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information Cards */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-white shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
              <CardContent className="p-6 flex items-start">
                <MapPin className="text-purple-600 mr-4 h-6 w-6 flex-shrink-0" />
                <div>
                  <CardTitle className="text-lg mb-2">Dirección</CardTitle>
                  <CardDescription>
                    Av. Insurgentes Sur 1602
                    <br />
                    Ciudad de México, CDMX 03940
                  </CardDescription>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
              <CardContent className="p-6 flex items-start">
                <Mail className="text-purple-600 mr-4 h-6 w-6 flex-shrink-0" />
                <div>
                  <CardTitle className="text-lg mb-2">Email</CardTitle>
                  <CardDescription>
                    info@fiestaplanner.com
                    <br />
                    eventos@fiestaplanner.com
                  </CardDescription>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
              <CardContent className="p-6 flex items-start">
                <Phone className="text-purple-600 mr-4 h-6 w-6 flex-shrink-0" />
                <div>
                  <CardTitle className="text-lg mb-2">Teléfono</CardTitle>
                  <CardDescription>
                    +52 (55) 1234 5678
                    <br />
                    +52 (55) 8765 4321
                  </CardDescription>
                </div>
              </CardContent>
            </Card>

            {/* Social Media Cards */}
            <Card className="bg-white shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
              <CardContent className="p-6">
                <CardTitle className="text-lg mb-4">Síguenos en Redes Sociales</CardTitle>
                <div className="grid grid-cols-2 gap-4">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                    className="flex items-center p-3 rounded-md hover:bg-purple-50 transition-colors">
                    <Facebook className="text-blue-600 mr-2 h-5 w-5" />
                    <span className="text-sm">Facebook</span>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                    className="flex items-center p-3 rounded-md hover:bg-purple-50 transition-colors">
                    <Instagram className="text-pink-600 mr-2 h-5 w-5" />
                    <span className="text-sm">Instagram</span>
                  </a>
                  <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" 
                    className="flex items-center p-3 rounded-md hover:bg-purple-50 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black mr-2 h-5 w-5">
                      <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>
                      <path d="M16 8v8"/>
                      <path d="M16 12h-3"/>
                      <path d="M21 8c0-5-4-5-4-5C7 3 7 9 7 9v7"/>
                    </svg>
                    <span className="text-sm">TikTok</span>
                  </a>
                  <a href="https://wa.me/525512345678" target="_blank" rel="noopener noreferrer" 
                    className="flex items-center p-3 rounded-md hover:bg-purple-50 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 mr-2 h-5 w-5">
                      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/>
                      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1z"/>
                    </svg>
                    <span className="text-sm">WhatsApp</span>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Personal Contact Card */}
            <Card className="bg-purple-50 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border-purple-200">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <User className="text-purple-600 mb-3 h-8 w-8" />
                <CardTitle className="text-lg mb-2">Contacto Personal</CardTitle>
                <CardDescription className="mb-4">
                  ¿Prefieres hablar directamente con un encargado de eventos? Solicita un contacto personal.
                </CardDescription>
                <Button 
                  variant="outline" 
                  className="border-purple-600 text-purple-600 hover:bg-purple-100 w-full"
                  onClick={togglePersonalContact}
                >
                  {isRequestingPersonalContact ? "Solicitado ✓" : "Solicitar Contacto Personal"}
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg bg-white border-none overflow-hidden">
              <CardHeader className="bg-purple-600 text-white">
                <CardTitle className="text-xl font-serif">Solicita una Consulta Gratuita</CardTitle>
                <CardDescription className="text-white/80">
                  Cuéntanos sobre tu evento y te ayudaremos a hacerlo realidad
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">
                        Nombre Completo
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                        Teléfono
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Tu número de teléfono"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="eventType" className="text-sm font-medium text-gray-700">
                        Tipo de Evento
                      </label>
                      <select
                        id="eventType"
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        required
                      >
                        <option value="" disabled>Selecciona el tipo de evento</option>
                        <option value="wedding">Boda</option>
                        <option value="corporate">Evento Corporativo</option>
                        <option value="birthday">Cumpleaños</option>
                        <option value="social">Evento Social</option>
                        <option value="other">Otro</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Cuéntanos más sobre tu evento..."
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-6"
                    disabled={isLoading}
                  >
                    {isLoading ? "Enviando..." : "Enviar Mensaje"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
