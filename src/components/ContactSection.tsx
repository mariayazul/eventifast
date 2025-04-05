
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
import { MapPin, Mail, Phone } from "lucide-react";

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
    }, 1500);
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
