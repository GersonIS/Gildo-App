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
    <section id="proyectos" className="py-16 bg-gray-900 text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 lg:px-8"
      >
        <h2 className="text-3xl font-bold text-center mb-4">{title}</h2>
        <p className="text-center text-gray-400 mb-8">{description}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: project.id * 0.1 }}
              className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg group transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
            >
              <Link href={project.slug} className="block relative">
                <motion.img
                  src={project.imageUrl}
                  alt={project.name}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-all duration-300"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <span className="text-blue-500 hover:underline">
                    Ver detalles
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition duration-300"
          >
            Cotizar
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
