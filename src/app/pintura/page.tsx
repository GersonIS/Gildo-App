import React from "react";
import Proyectos from "../components/Proyectos";

const pintura = {
  pintura: {
    title: "Proyectos de Pintura",
    description:
      "Aplicamos pintura en interiores y exteriores, utilizando productos de alta calidad para acabados duraderos y estéticos.",
  },
};

const pinturaProjects = {
  pintura: [
    {
      id: 1,
      name: "Pintura de interiores residenciales",
      description: "Acabados en pintura para viviendas y departamentos.",
      imageUrl: "/images/servicios.jpg",
      slug: "/pintura/pintura-interiores",
    },
    {
      id: 2,
      name: "Pintura de fachadas",
      description:
        "Renovación de fachadas para edificios residenciales y comerciales.",
      imageUrl: "/images/servicios.jpg",
      slug: "/pintura/pintura-fachadas",
    },
    {
      id: 3,
      name: "Pintura decorativa en oficinas",
      description: "Diseños decorativos para oficinas y espacios de trabajo.",
      imageUrl: "/images/servicios.jpg",
      slug: "/pintura/pintura-decorativa-oficinas",
    },
    {
      id: 4,
      name: "Impermeabilización con pintura",
      description: "Pintura impermeabilizante para techos y terrazas.",
      imageUrl: "/images/servicios.jpg",
      slug: "/pintura/pintura-impermeabilizante",
    },
    {
      id: 5,
      name: "Pintura en estructuras metálicas",
      description:
        "Pintura protectora para estructuras de acero en exteriores.",
      imageUrl: "/images/servicios.jpg",
      slug: "/pintura/pintura-estructuras-metalicas",
    },
    {
      id: 6,
      name: "Pintura epoxi para pisos industriales",
      description: "Revestimiento epoxi para pisos de alto tráfico.",
      imageUrl: "/images/servicios.jpg",
      slug: "/pintura/pintura-epoxi",
    },
    {
      id: 7,
      name: "Pintura decorativa en locales comerciales",
      description: "Diseños modernos para locales comerciales y tiendas.",
      imageUrl: "/images/servicios.jpg",
      slug: "/pintura/pintura-decorativa-comercial",
    },
  ],
};

const Page = () => {
  return (
    <div>
      <Proyectos
        title={pintura.pintura.title}
        description={pintura.pintura.description}
        projects={pinturaProjects.pintura}
      />
    </div>
  );
};

export default Page;
