"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const clientes = [
  { id: 1, name: "Empresa A", logoUrl: "/images/logo.jpg" },
  { id: 2, name: "Empresa B", logoUrl: "/images/logo.jpg" },
  { id: 3, name: "Empresa C", logoUrl: "/images/logo.jpg" },
  { id: 4, name: "Empresa D", logoUrl: "/images/logo.jpg" },
  { id: 5, name: "Empresa E", logoUrl: "/images/logo.jpg" },
  { id: 6, name: "Empresa F", logoUrl: "/images/logo.jpg" },
  { id: 7, name: "Empresa G", logoUrl: "/images/logo.jpg" },
  { id: 8, name: "Empresa H", logoUrl: "/images/logo.jpg" },
];

export default function Clientes() {
  return (
    <motion.section
      id="clientes"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="py-20 bg-gray-900 text-white"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 lg:px-12 text-center"
      >
        <h2 className="text-4xl font-bold mb-10 text-blue-500">
          Nuestros Clientes
        </h2>
        <p className="text-lg text-gray-300 mb-14">
          Confían en nosotros empresas líderes en sus sectores, quienes valoran
          nuestra dedicación y compromiso con la calidad.
        </p>

        {/* Contenedor de logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 items-center">
          {clientes.map((cliente) => (
            <motion.div
              key={cliente.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: cliente.id * 0.1 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={cliente.logoUrl}
                alt={cliente.name}
                className="mx-auto h-16 w-auto object-contain"
                height={64}
                width={64}
              />
              <p className="mt-4 text-sm text-gray-400">{cliente.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
