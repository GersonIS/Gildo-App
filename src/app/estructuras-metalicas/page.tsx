import React from "react";
import Proyectos from "../components/Proyectos";

const estructura = {
  estructuras_metalicas: {
    title: "Proyectos de Estructuras Metálicas",
    description:
      "Diseño y construcción de estructuras metálicas para proyectos industriales y comerciales, garantizando resistencia y durabilidad.",
  },
};

const estructuraProjects = {
  estructurasMetalicas: [
    {
      id: 1,
      name: "Construcción de naves industriales",
      description: "Estructuras metálicas para almacenes y fábricas.",
      imageUrl: "/images/servicios.jpg",
      slug: "/estructuras-metalicas/naves-industriales",
    },
    {
      id: 2,
      name: "Estructuras metálicas para edificios",
      description: "Estructuras de acero para construcciones de gran altura.",
      imageUrl: "/images/servicios.jpg",
      slug: "/estructuras-metalicas/estructuras-edificios",
    },
    {
      id: 3,
      name: "Coberturas metálicas",
      description: "Techos metálicos para fábricas y centros comerciales.",
      imageUrl: "/images/servicios.jpg",
      slug: "/estructuras-metalicas/coberturas-metalicas",
    },
    {
      id: 4,
      name: "Puentes y pasarelas metálicas",
      description: "Fabricación e instalación de puentes peatonales metálicos.",
      imageUrl: "/images/servicios.jpg",
      slug: "/estructuras-metalicas/puentes-pasarelas",
    },
    {
      id: 5,
      name: "Estructuras para paneles solares",
      description:
        "Montaje de estructuras para instalación de paneles solares.",
      imageUrl: "/images/servicios.jpg",
      slug: "/estructuras-metalicas/estructuras-paneles",
    },
    {
      id: 6,
      name: "Marquesinas metálicas",
      description:
        "Construcción de marquesinas metálicas para entradas de edificios.",
      imageUrl: "/images/servicios.jpg",
      slug: "/estructuras-metalicas/marquesinas",
    },
    {
      id: 7,
      name: "Cerramientos y rejas metálicas",
      description:
        "Fabricación de cerramientos y rejas en acero para protección.",
      imageUrl: "/images/servicios.jpg",
      slug: "/estructuras-metalicas/cerramientos-rejas",
    },
  ],
};

const Page = () => {
  return (
    <div>
      <Proyectos
        title={estructura.estructuras_metalicas.title}
        description={estructura.estructuras_metalicas.description}
        projects={estructuraProjects.estructurasMetalicas}
      />
    </div>
  );
};

export default Page;
