import React from "react";
import Proyectos from "../components/Proyectos";

const drywall = {
  drywall: {
    title: "Proyectos de Drywall",
    description:
      "Ofrecemos soluciones profesionales para la instalación y mantenimiento de estructuras en drywall, adaptadas a las necesidades de cada cliente.",
  },
};

const drywallProjects = {
  drywall: [
    {
      id: 1,
      name: "Instalación de paredes de Drywall en oficinas",
      description:
        "Proyecto de instalación de paredes divisorias en oficinas corporativas.",
      imageUrl: "/images/servicios.jpg",
      slug: "/drywall/instalacion-paredes-oficinas",
    },
    {
      id: 2,
      name: "Construcción de techos de Drywall",
      description: "Techos de drywall en viviendas residenciales.",
      imageUrl: "/images/servicios.jpg",
      slug: "/drywall/construccion-techos",
    },
    {
      id: 3,
      name: "Remodelación de tiendas comerciales con Drywall",
      description: "Remodelación de tiendas con instalaciones de drywall.",
      imageUrl: "/images/servicios.jpg",
      slug: "/drywall/remodelacion-tiendas",
    },
    {
      id: 4,
      name: "Aislamiento acústico con Drywall",
      description: "Implementación de paredes con propiedades acústicas.",
      imageUrl: "/images/servicios.jpg",
      slug: "/drywall/aislamiento-acustico",
    },
    {
      id: 5,
      name: "Reparación de techos con Drywall",
      description: "Servicio de reparación de techos dañados en drywall.",
      imageUrl: "/images/servicios.jpg",
      slug: "/drywall/reparacion-techos",
    },
    {
      id: 6,
      name: "Construcción de fachadas interiores con Drywall",
      description: "Fachadas interiores modernas con acabados en drywall.",
      imageUrl: "/images/servicios.jpg",
      slug: "/drywall/construccion-fachadas",
    },
    {
      id: 7,
      name: "Tabiques de Drywall para divisiones de ambientes",
      description:
        "Tabiques divisores para mejorar la distribución de espacios.",
      imageUrl: "/images/servicios.jpg",
      slug: "/drywall/tabiques-ambientales",
    },
  ],
};

const Page = () => {
  return (
    <div>
      <Proyectos
        title={drywall.drywall.title}
        description={drywall.drywall.description}
        projects={drywallProjects.drywall}
      />
    </div>
  );
};

export default Page;
