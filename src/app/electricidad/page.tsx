import React from "react";
import Proyectos from "../components/Proyectos";

const electricidad = {
  electricidad: {
    title: "Proyectos de Electricidad",
    description:
      "Brindamos servicios integrales de instalación eléctrica y mantenimiento con los más altos estándares de seguridad.",
  },
};

const electricidadProjects = {
  electricidad: [
    {
      id: 1,
      name: "Instalación de sistemas eléctricos en oficinas",
      description:
        "Proyectos eléctricos completos para edificios corporativos.",
      imageUrl: "/images/servicios.jpg",
      slug: "/electricidad/sistemas-electricos-oficinas",
    },
    {
      id: 2,
      name: "Reparación de sistemas eléctricos en viviendas",
      description: "Reparación de fallas eléctricas en sistemas residenciales.",
      imageUrl: "/images/servicios.jpg",
      slug: "/electricidad/reparacion-sistemas-electricos",
    },
    {
      id: 3,
      name: "Instalación de paneles solares",
      description: "Proyectos de energías renovables con paneles solares.",
      imageUrl: "/images/servicios.jpg",
      slug: "/electricidad/instalacion-paneles-solares",
    },
    {
      id: 4,
      name: "Mantenimiento de redes eléctricas industriales",
      description:
        "Servicio de mantenimiento para redes eléctricas de alta demanda.",
      imageUrl: "/images/servicios.jpg",
      slug: "/electricidad/mantenimiento-redes-electricas",
    },
    {
      id: 5,
      name: "Instalación de iluminación LED",
      description: "Proyectos de ahorro energético con iluminación LED.",
      imageUrl: "/images/servicios.jpg",
      slug: "/electricidad/instalacion-iluminacion-led",
    },
    {
      id: 6,
      name: "Revisión y certificación de sistemas eléctricos",
      description:
        "Certificación de sistemas eléctricos para seguridad y eficiencia.",
      imageUrl: "/images/servicios.jpg",
      slug: "/electricidad/revision-certificacion",
    },
    {
      id: 7,
      name: "Instalación de cableado estructurado",
      description:
        "Instalación de sistemas de cableado estructurado para redes.",
      imageUrl: "/images/servicios.jpg",
      slug: "/electricidad/cableado-estructurado",
    },
  ],
};

const Page = () => {
  return (
    <div>
      <Proyectos
        title={electricidad.electricidad.title}
        description={electricidad.electricidad.description}
        projects={electricidadProjects.electricidad}
      />
    </div>
  );
};

export default Page;
