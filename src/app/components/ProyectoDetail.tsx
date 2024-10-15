"use client";
import { motion } from "framer-motion";
import Image from "next/image";

type ProjectDetailProps = {
  title: string;
  projectName: string;
  images: string[];
};

export default function ProjectDetail({
  title,
  projectName,
  images,
}: ProjectDetailProps) {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 lg:px-8"
      >
        <h2 className="text-3xl font-bold text-center mb-4">{title}</h2>
        <h3 className="text-2xl text-center mb-8">{projectName}</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={image}
                alt={`Imagen del proyecto ${projectName}`}
                className="w-full h-64 object-cover"
                height={256}
                width={256}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
