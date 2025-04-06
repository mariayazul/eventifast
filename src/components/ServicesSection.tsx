
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight, Info } from "lucide-react";

const services = [
  {
    title: "Bodas",
    description: "Planificación completa de bodas, desde la ceremonia hasta la recepción, con atención personalizada a cada detalle.",
    image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    packages: [
      {
        name: "Paquete Básico",
        price: "$35,000 MXN",
        features: [
          "Coordinación del día del evento",
          "Selección de 3 proveedores por categoría",
          "Ayuda con presupuesto",
          "Lista de invitados",
          "1 reunión mensual",
        ],
      },
      {
        name: "Paquete Premium",
        price: "$75,000 MXN",
        features: [
          "Todo lo del paquete básico",
          "Diseño integral del evento",
          "Coordinación de ceremonia y recepción",
          "Selección de 5 proveedores por categoría",
          "Visitas a locaciones",
          "Gestión de proveedores",
          "2 reuniones mensuales",
          "Asistencia en selección de invitaciones",
        ],
      },
      {
        name: "Paquete Lujo",
        price: "$120,000 MXN",
        features: [
          "Todo lo del paquete premium",
          "Planificación completa y detallada",
          "Diseño personalizado de decoración",
          "Selección ilimitada de proveedores",
          "Coordinación de eventos pre y post boda",
          "Asistencia 24/7",
          "Equipo completo de coordinadores",
          "Gestión de hospedaje para invitados",
          "Transporte de invitados",
        ],
      },
    ],
  },
  {
    title: "Eventos Corporativos",
    description: "Organizamos eventos empresariales profesionales, conferencias, presentaciones y team buildings que potenciarán tu marca.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    packages: [
      {
        name: "Paquete Ejecutivo",
        price: "$45,000 MXN",
        features: [
          "Planificación de evento hasta 50 personas",
          "Selección de venue",
          "Coordinación logística básica",
          "Equipamiento audiovisual estándar",
          "Catering básico",
        ],
      },
      {
        name: "Paquete Empresarial",
        price: "$95,000 MXN",
        features: [
          "Planificación de evento hasta 150 personas",
          "Selección y negociación con proveedores",
          "Diseño personalizado del espacio",
          "Equipamiento audiovisual avanzado",
          "Catering premium",
          "Gestión de inscripciones",
          "Coordinación día del evento",
        ],
      },
      {
        name: "Paquete Corporativo Premium",
        price: "$180,000 MXN",
        features: [
          "Planificación de evento para +200 personas",
          "Gestión integral de proveedores",
          "Diseño personalizado con marca corporativa",
          "Soluciones tecnológicas avanzadas",
          "Catering gourmet personalizado",
          "Actividades de team building",
          "Gestión de hospedaje y transporte",
          "Análisis post-evento",
        ],
      },
    ],
  },
  {
    title: "Fiestas Privadas",
    description: "Celebraciones únicas para cumpleaños, aniversarios y ocasiones especiales con servicios a medida para cada cliente.",
    image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    packages: [
      {
        name: "Paquete Celebración",
        price: "$18,000 MXN",
        features: [
          "Planificación para 30-50 invitados",
          "Selección de tema y decoración básica",
          "Recomendación de proveedores",
          "Gestión de catering",
          "Coordinación día del evento (6 horas)",
        ],
      },
      {
        name: "Paquete Festejo Premium",
        price: "$35,000 MXN",
        features: [
          "Planificación para 50-100 invitados",
          "Diseño temático personalizado",
          "Selección y coordinación de proveedores",
          "Decoración premium",
          "DJ y entretenimiento",
          "Catering personalizado",
          "Coordinación completa (8 horas)",
        ],
      },
      {
        name: "Paquete Exclusivo",
        price: "$65,000 MXN",
        features: [
          "Planificación para +100 invitados",
          "Diseño temático exclusivo",
          "Proveedores de lujo",
          "Decoración de alto nivel",
          "Entretenimiento personalizado",
          "Catering gourmet",
          "Barra de bebidas premium",
          "Fotografía y video profesional",
          "Coordinación completa (10 horas)",
        ],
      },
    ],
  },
  {
    title: "Eventos Sociales",
    description: "Organizamos galas, cenas de beneficencia y eventos sociales con un toque de elegancia y sofisticación.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    packages: [
      {
        name: "Paquete Social",
        price: "$50,000 MXN",
        features: [
          "Organización para 50-100 invitados",
          "Selección de venue",
          "Coordinación básica con proveedores",
          "Decoración elegante estándar",
          "Menú de 3 tiempos",
          "Música ambiental",
        ],
      },
      {
        name: "Paquete Gala",
        price: "$95,000 MXN",
        features: [
          "Organización para 100-200 invitados",
          "Selección y negociación de venue exclusivo",
          "Coordinación completa de proveedores",
          "Decoración personalizada de alto nivel",
          "Menú gourmet de 4 tiempos",
          "Entretenimiento en vivo",
          "Área VIP",
          "Servicio de valet parking",
        ],
      },
      {
        name: "Paquete Beneficencia Exclusivo",
        price: "$180,000 MXN",
        features: [
          "Organización para +200 invitados",
          "Venue de lujo",
          "Gestión de patrocinadores",
          "Diseño de evento exclusivo",
          "Decoración de lujo",
          "Menú gourmet de 5 tiempos con maridaje",
          "Entretenimiento premium",
          "Subasta benéfica",
          "Fotografía y video profesional",
          "Gestión de donaciones y recaudación",
        ],
      },
    ],
  }
];

const ServicePackageCard = ({ pack }) => {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-xl text-purple-700">{pack.name}</CardTitle>
        <CardDescription className="text-xl font-bold">{pack.price}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-2">
          {pack.features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <ChevronRight className="h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-purple-600 hover:bg-purple-700">Solicitar Cotización</Button>
      </CardFooter>
    </Card>
  );
};

const ServicesSection = () => {
  const [openService, setOpenService] = useState(null);
  const [selectedTab, setSelectedTab] = useState("tab0");

  const handleOpenService = (service) => {
    setOpenService(service);
    setSelectedTab("tab0"); // Reset to first tab when opening dialog
  };

  const handleCloseService = () => {
    setOpenService(null);
  };

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <div className="w-20 h-0.5 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Con años de experiencia, ofrecemos una amplia gama de servicios de planificación y organización de eventos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="overflow-hidden transition-all duration-300 hover:shadow-lg border-none bg-white cursor-pointer"
              onClick={() => handleOpenService(service)}
            >
              <div className="h-60 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-serif text-purple-700">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="ghost" 
                  className="flex items-center text-purple-700 hover:text-purple-900 hover:bg-purple-50 ml-auto"
                >
                  <Info className="mr-2 h-4 w-4" />
                  Ver paquetes
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {openService && (
          <Dialog open={!!openService} onOpenChange={handleCloseService}>
            <DialogContent className="max-w-4xl h-auto max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl font-serif text-purple-700">{openService.title}</DialogTitle>
                <DialogDescription>{openService.description}</DialogDescription>
              </DialogHeader>
              
              <div className="py-4">
                <h3 className="text-lg font-medium mb-4">Nuestros Paquetes</h3>
                <Tabs defaultValue={selectedTab} onValueChange={setSelectedTab} className="w-full">
                  <TabsList className="grid grid-cols-3 mb-8">
                    {openService.packages.map((pack, i) => (
                      <TabsTrigger key={i} value={`tab${i}`} className="text-sm">
                        {pack.name}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  
                  {openService.packages.map((pack, i) => (
                    <TabsContent key={i} value={`tab${i}`} className="border-none p-0">
                      <ServicePackageCard pack={pack} />
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
              
              <DialogFooter className="flex flex-col sm:flex-row gap-3">
                <Button onClick={handleCloseService} variant="outline">Cerrar</Button>
                <Button onClick={handleCloseService}>Contactar ahora</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
