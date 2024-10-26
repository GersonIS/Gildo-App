"use client";
import { motion } from "framer-motion";
import Link from "next/link";

type ProjectProps = {
  title: string;
  description: string;
  projects: {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    slug: string;
  }[];
};

export default function Proyectos({
  title,
  description,
  projects,
}: ProjectProps) {
  return (
    <section id="proyectos" className="py-16 bg-gray-900 text-white relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 lg:px-8"
      >
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center mb-4 text-blue-500"
        >
          {title}
        </motion.h2>

        {/* Descripción */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-gray-400 mb-12 text-lg max-w-2xl mx-auto"
        >
          {description}
        </motion.p>

        {/* Proyectos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: project.id * 0.1 }}
              className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg group transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
            >
              <Link href={project.slug} className="block relative h-full">
                {/* Imagen del proyecto */}
                <motion.img
                  src={project.imageUrl}
                  alt={project.name}
                  className="w-full h-48 object-cover transition-all duration-300 transform group-hover:scale-110"
                />
                {/* Contenido del proyecto */}
                <div className="p-6 flex flex-col h-full justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      {project.name}
                    </h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Botón flotante */}
        <motion.div
          className="fixed bottom-8 right-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.a
            href="https://wa.me/948765692?text=Hola,%20quiero%20cotizar%20un%20servicio."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 15px rgba(0, 123, 255, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-500 transition-all duration-300"
          >
            Cotizar
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
