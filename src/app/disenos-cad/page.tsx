import React from "react";
import Proyectos from "../components/Proyectos";

const diseño = {
  disenos_cad: {
    title: "Proyectos de Diseño CAD",
    description:
      "Diseños personalizados en CAD para la planificación y visualización detallada de proyectos arquitectónicos y de ingeniería.",
  },
};

const diseñoProjects = {
  disenosCad: [
    {
      id: 1,
      name: "Diseño de planos arquitectónicos",
      description:
        "Generación de planos detallados para proyectos de construcción.",
      imageUrl: "/images/servicios.jpg",
      slug: "/disenos-cad/planos-arquitectonicos",
    },
    {
      id: 2,
      name: "Modelado 3D para interiores",
      description:
        "Modelos 3D para diseño de interiores con detalles realistas.",
      imageUrl: "/images/servicios.jpg",
      slug: "/disenos-cad/modelado-3d-interiores",
    },
    {
      id: 3,
      name: "Prototipos industriales",
      description: "Diseño de prototipos para producción en masa.",
      imageUrl: "/images/servicios.jpg",
      slug: "/disenos-cad/prototipos-industriales",
    },
    {
      id: 4,
      name: "Diseño de mobiliario a medida",
      description: "Planos y modelos 3D para la fabricación de muebles.",
      imageUrl: "/images/servicios.jpg",
      slug: "/disenos-cad/mobiliario-medida",
    },
    {
      id: 5,
      name: "Diseño de infraestructura urbana",
      description: "Modelos CAD para proyectos de urbanización.",
      imageUrl: "/images/servicios.jpg",
      slug: "/disenos-cad/infraestructura-urbana",
    },
    {
      id: 6,
      name: "Modelos CAD para sistemas mecánicos",
      description: "Diseño de sistemas mecánicos para industrias.",
      imageUrl: "/images/servicios.jpg",
      slug: "/disenos-cad/sistemas-mecanicos",
    },
    {
      id: 7,
      name: "Proyectos de ingeniería estructural",
      description: "Modelos estructurales detallados para edificaciones.",
      imageUrl: "/images/servicios.jpg",
      slug: "/disenos-cad/ingenieria-estructural",
    },
  ],
};

const Page = () => {
  return (
    <div>
      <Proyectos
        title={diseño.disenos_cad.title}
        description={diseño.disenos_cad.description}
        projects={diseñoProjects.disenosCad}
      />
    </div>
  );
};

export default Page;
