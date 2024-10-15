import React from "react";
import Proyectos from "../components/Proyectos";

const climatizacion = {
  climatizacion: {
    title: "Proyectos de Climatización",
    description:
      "Instalación de sistemas de climatización para garantizar confort térmico en espacios residenciales e industriales.",
  },
};

const climatizacionProjects = {
  climatizacion: [
    {
      id: 1,
      name: "Instalación de aire acondicionado en oficinas",
      description: "Sistema de climatización para edificios corporativos.",
      imageUrl: "/images/servicios.jpg",
      slug: "/climatizacion/aire-acondicionado-oficinas",
    },
    {
      id: 2,
      name: "Sistemas de ventilación industrial",
      description: "Instalación de ventilación para plantas industriales.",
      imageUrl: "/images/servicios.jpg",
      slug: "/climatizacion/ventilacion-industrial",
    },
    {
      id: 3,
      name: "Mantenimiento de sistemas de climatización",
      description:
        "Servicio de mantenimiento preventivo para sistemas de climatización.",
      imageUrl: "/images/servicios.jpg",
      slug: "/climatizacion/mantenimiento-climatizacion",
    },
    {
      id: 4,
      name: "Instalación de calefacción en viviendas",
      description: "Sistemas de calefacción para hogares modernos.",
      imageUrl: "/images/servicios.jpg",
      slug: "/climatizacion/instalacion-calefaccion",
    },
    {
      id: 5,
      name: "Climatización para centros comerciales",
      description:
        "Proyectos de climatización para grandes centros comerciales.",
      imageUrl: "/images/servicios.jpg",
      slug: "/climatizacion/centros-comerciales",
    },
    {
      id: 6,
      name: "Sistemas de ventilación para hospitales",
      description:
        "Instalación de sistemas de ventilación en áreas hospitalarias.",
      imageUrl: "/images/servicios.jpg",
      slug: "/climatizacion/ventilacion-hospitales",
    },
    {
      id: 7,
      name: "Control de humedad en almacenes",
      description: "Sistemas de climatización especializados para almacenes.",
      imageUrl: "/images/servicios.jpg",
      slug: "/climatizacion/control-humedad-almacenes",
    },
  ],
};

const Page = () => {
  return (
    <div>
      <Proyectos
        title={climatizacion.climatizacion.title}
        description={climatizacion.climatizacion.description}
        projects={climatizacionProjects.climatizacion}
      />
    </div>
  );
};

export default Page;
