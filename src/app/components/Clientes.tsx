"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const clientes = [
  {
    id: 1,
    name: "Empresa A",
    logoUrl: "/images/logo.jpg",
  },
  {
    id: 2,
    name: "Empresa B",
    logoUrl: "/images/logo.jpg",
  },
  {
    id: 3,
    name: "Empresa C",
    logoUrl: "/images/logo.jpg",
  },
  {
    id: 4,
    name: "Empresa D",
    logoUrl: "/images/logo.jpg",
  },
  {
    id: 5,
    name: "Empresa E",
    logoUrl: "/images/logo.jpg",
  },
  {
    id: 6,
    name: "Empresa F",
    logoUrl: "/images/logo.jpg",
  },
  {
    id: 7,
    name: "Empresa A",
    logoUrl: "/images/logo.jpg",
  },
  {
    id: 8,
    name: "Empresa B",
    logoUrl: "/images/logo.jpg",
  },
  {
    id: 9,
    name: "Empresa C",
    logoUrl: "/images/logo.jpg",
  },
  {
    id: 10,
    name: "Empresa D",
    logoUrl: "/images/logo.jpg",
  },
  {
    id: 11,
    name: "Empresa E",
    logoUrl: "/images/logo.jpg",
  },
  {
    id: 12,
    name: "Empresa F",
    logoUrl: "/images/logo.jpg",
  },
  {
    id: 13,
    name: "Empresa E",
    logoUrl: "/images/logo.jpg",
  },
  {
    id: 14,
    name: "Empresa F",
    logoUrl: "/images/logo.jpg",
  },
];

export default function Clientes() {
  return (
    <section id="clientes" className="py-16 bg-gray-900 text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 lg:px-8"
      >
        <h2 className="text-3xl font-bold text-center mb-12">
          Nuestros Clientes
        </h2>

        {/* Contenedor para alinear los logos al centro */}
        <div className="flex justify-center flex-wrap gap-8">
          {clientes.map((cliente) => (
            <motion.div
              key={cliente.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: cliente.id * 0.1 }}
              className="flex justify-center items-center bg-gray-800 rounded-lg p-4"
            >
              <Image
                src={cliente.logoUrl}
                alt={cliente.name}
                className="h-16 object-contain"
                height={64}
                width={64}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
