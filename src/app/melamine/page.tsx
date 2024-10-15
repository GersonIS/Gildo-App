import React from "react";
import Proyectos from "../components/Proyectos";

const melamine = {
  melamine: {
    title: "Proyectos de Melamine",
    description:
      "Diseño y fabricación de muebles en melamine de alta calidad, con acabados personalizados y soluciones a medida.",
  },
};

const melamineProjects = {
  melamine: [
    {
      id: 1,
      name: "Fabricación de muebles de cocina",
      description:
        "Diseño y fabricación de muebles de cocina a medida en melamine.",
      imageUrl: "/images/servicios.jpg",
      slug: "/melamine/muebles-cocina",
    },
    {
      id: 2,
      name: "Closets de melamine personalizados",
      description: "Armarios personalizados para dormitorios.",
      imageUrl: "/images/servicios.jpg",
      slug: "/melamine/closets-personalizados",
    },
    {
      id: 3,
      name: "Muebles para oficinas en melamine",
      description: "Mobiliario moderno para oficinas.",
      imageUrl: "/images/servicios.jpg",
      slug: "/melamine/muebles-oficinas",
    },
    {
      id: 4,
      name: "Estanterías modulares",
      description: "Estanterías versátiles y modulares en melamine.",
      imageUrl: "/images/servicios.jpg",
      slug: "/melamine/estanterias-modulares",
    },
    {
      id: 5,
      name: "Muebles de entretenimiento en melamine",
      description: "Centros de entretenimiento y estanterías para televisores.",
      imageUrl: "/images/servicios.jpg",
      slug: "/melamine/muebles-entretenimiento",
    },
    {
      id: 6,
      name: "Mesas de trabajo personalizadas",
      description: "Mesas de trabajo duraderas para oficinas y estudios.",
      imageUrl: "/images/servicios.jpg",
      slug: "/melamine/mesas-trabajo",
    },
    {
      id: 7,
      name: "Muebles para recepción en melamine",
      description: "Muebles funcionales y elegantes para áreas de recepción.",
      imageUrl: "/images/servicios.jpg",
      slug: "/melamine/muebles-recepcion",
    },
  ],
};

const Page = () => {
  return (
    <div>
      <Proyectos
        title={melamine.melamine.title}
        description={melamine.melamine.description}
        projects={melamineProjects.melamine}
      />
    </div>
  );
};

export default Page;
