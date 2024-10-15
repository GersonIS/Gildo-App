import React from "react";
import Proyectos from "../components/Proyectos";

const vidrieria = {
  vidrieria: {
    title: "Proyectos de Vidriería",
    description:
      "Fabricación e instalación de vidrios y ventanales para interiores y exteriores, con soluciones personalizadas para cada espacio.",
  },
};

const vidrieriaProjects = {
  vidrieria: [
    {
      id: 1,
      name: "Instalación de mamparas de vidrio",
      description: "Mamparas de vidrio templado para espacios residenciales.",
      imageUrl: "/images/servicios.jpg",
      slug: "/vidrieria/mamparas-vidrio",
    },
    {
      id: 2,
      name: "Divisiones de oficina en vidrio",
      description: "Divisiones de vidrio templado para oficinas modernas.",
      imageUrl: "/images/servicios.jpg",
      slug: "/vidrieria/divisiones-oficinas",
    },
    {
      id: 3,
      name: "Instalación de ventanas de seguridad",
      description: "Ventanas de vidrio laminado para seguridad en edificios.",
      imageUrl: "/images/servicios.jpg",
      slug: "/vidrieria/ventanas-seguridad",
    },
    {
      id: 4,
      name: "Puertas de vidrio templado",
      description: "Puertas de vidrio para acceso a áreas comunes.",
      imageUrl: "/images/servicios.jpg",
      slug: "/vidrieria/puertas-templadas",
    },
    {
      id: 5,
      name: "Espejos decorativos a medida",
      description: "Espejos personalizados para decoración de interiores.",
      imageUrl: "/images/servicios.jpg",
      slug: "/vidrieria/espejos-decorativos",
    },
    {
      id: 6,
      name: "Barandas de vidrio",
      description: "Barandas de vidrio templado para escaleras y balcones.",
      imageUrl: "/images/servicios.jpg",
      slug: "/vidrieria/barandas-vidrio",
    },
    {
      id: 7,
      name: "Vidrios blindados para seguridad",
      description:
        "Instalación de vidrios blindados para proteger locales comerciales.",
      imageUrl: "/images/servicios.jpg",
      slug: "/vidrieria/vidrios-blindados",
    },
  ],
};

const Page = () => {
  return (
    <div>
      <Proyectos
        title={vidrieria.vidrieria.title}
        description={vidrieria.vidrieria.description}
        projects={vidrieriaProjects.vidrieria}
      />
    </div>
  );
};

export default Page;
