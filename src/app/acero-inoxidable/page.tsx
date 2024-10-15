import React from "react";
import Proyectos from "../components/Proyectos";

const acero = {
  acero_inoxidable: {
    title: "Proyectos de Acero Inoxidable",
    description:
      "Fabricación de estructuras en acero inoxidable de alta durabilidad, adaptadas a las exigencias de cada cliente.",
  },
};

const aceroProjects = {
  aceroInoxidable: [
    {
      id: 1,
      name: "Fabricación de barandas en acero inoxidable",
      description: "Barandas personalizadas para escaleras y balcones.",
      imageUrl: "/images/servicios.jpg",
      slug: "/acero-inoxidable/barandas-escaleras",
    },
    {
      id: 2,
      name: "Estructuras industriales de acero inoxidable",
      description: "Construcción de estructuras robustas para industrias.",
      imageUrl: "/images/servicios.jpg",
      slug: "/acero-inoxidable/estructuras-industriales",
    },
    {
      id: 3,
      name: "Muebles de cocina en acero inoxidable",
      description:
        "Muebles duraderos y fáciles de limpiar para cocinas industriales.",
      imageUrl: "/images/servicios.jpg",
      slug: "/acero-inoxidable/muebles-de-cocina",
    },
    {
      id: 4,
      name: "Escaleras de acero inoxidable",
      description: "Escaleras modernas y resistentes en acero inoxidable.",
      imageUrl: "/images/servicios.jpg",
      slug: "/acero-inoxidable/escaleras",
    },
    {
      id: 5,
      name: "Carpintería metálica en acero inoxidable",
      description: "Puertas y ventanas con acabado metálico duradero.",
      imageUrl: "/images/servicios.jpg",
      slug: "/acero-inoxidable/carpinteria-metalica",
    },
    {
      id: 6,
      name: "Cerramientos en acero inoxidable",
      description:
        "Instalación de cerramientos seguros para áreas industriales.",
      imageUrl: "/images/servicios.jpg",
      slug: "/acero-inoxidable/cerramientos",
    },
    {
      id: 7,
      name: "Decoración en acero inoxidable",
      description:
        "Elementos decorativos modernos y duraderos en acero inoxidable.",
      imageUrl: "/images/servicios.jpg",
      slug: "/acero-inoxidable/decoracion",
    },
  ],
};

const Page = () => {
  return (
    <div>
      <Proyectos
        title={acero.acero_inoxidable.title}
        description={acero.acero_inoxidable.description}
        projects={aceroProjects.aceroInoxidable}
      />
    </div>
  );
};

export default Page;
