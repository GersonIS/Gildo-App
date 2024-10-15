import React from "react";
import Proyectos from "../components/Proyectos";

const gasfiteria = {
  gasfiteria: {
    title: "Proyectos de Gasfitería",
    description:
      "Brindamos servicios completos de gasfitería, incluyendo instalación y reparación de tuberías, grifos y otros sistemas de agua.",
  },
};

const gasfiteriaProjects = {
  gasfiteria: [
    {
      id: 1,
      name: "Instalación de redes de agua",
      description: "Diseño e instalación de redes de agua para viviendas.",
      imageUrl: "/images/servicios.jpg",
      slug: "/gasfiteria/instalacion-agua",
    },
    {
      id: 2,
      name: "Mantenimiento de tuberías",
      description: "Reparación y mantenimiento de tuberías en edificios.",
      imageUrl: "/images/servicios.jpg",
      slug: "/gasfiteria/mantenimiento-tuberias",
    },
    {
      id: 3,
      name: "Instalación de baños completos",
      description: "Montaje de baños con griferías y tuberías en residencias.",
      imageUrl: "/images/servicios.jpg",
      slug: "/gasfiteria/instalacion-banos",
    },
    {
      id: 4,
      name: "Reparación de fugas de agua",
      description:
        "Detección y reparación de fugas en sistemas de agua potable.",
      imageUrl: "/images/servicios.jpg",
      slug: "/gasfiteria/reparacion-fugas",
    },
    {
      id: 5,
      name: "Instalación de sistemas de agua caliente",
      description:
        "Sistemas de agua caliente para uso residencial e industrial.",
      imageUrl: "/images/servicios.jpg",
      slug: "/gasfiteria/sistemas-agua-caliente",
    },
    {
      id: 6,
      name: "Instalación de tanques elevados",
      description: "Montaje de tanques de agua para edificaciones.",
      imageUrl: "/images/servicios.jpg",
      slug: "/gasfiteria/instalacion-tanques",
    },
    {
      id: 7,
      name: "Redes de gas domiciliarias",
      description: "Diseño y ejecución de instalaciones de gas para viviendas.",
      imageUrl: "/images/servicios.jpg",
      slug: "/gasfiteria/redes-gas",
    },
  ],
};

const Page = () => {
  return (
    <div>
      <Proyectos
        title={gasfiteria.gasfiteria.title}
        description={gasfiteria.gasfiteria.description}
        projects={gasfiteriaProjects.gasfiteria}
      />
    </div>
  );
};

export default Page;
