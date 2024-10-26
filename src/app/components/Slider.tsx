"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/images/prueba.jpg",
  "/images/vidrieria.jpg",
  "/images/slider1.jpg",
  "/images/vidrieria.jpg",
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Función para ir a la imagen anterior
  const handlePrev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  };

  // Función para ir a la siguiente imagen
  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  // Resetear la transición después de que la animación se complete
  const handleAnimationComplete = () => {
    setIsTransitioning(false);
  };

  return (
    <div className="relative w-full">
      {/* Slider */}
      <motion.div
        className="overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          key={currentIndex}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          onAnimationComplete={handleAnimationComplete}
        >
          <Image
            src={images[currentIndex]}
            alt={`Producto ${currentIndex + 1}`}
            className="w-full h-[500px] object-cover" // Ajustar altura aquí
            height={500} // Altura de la imagen
            width={600} // Ancho de la imagen, ajusta si es necesario
          />
        </motion.div>
      </motion.div>

      {/* Botón Prev con animación */}
      <motion.button
        onClick={handlePrev}
        aria-label="Anterior"
        className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-black bg-opacity-50 text-white p-3 rounded-full focus:outline-none hover:scale-110"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </motion.button>

      {/* Botón Next con animación */}
      <motion.button
        onClick={handleNext}
        aria-label="Siguiente"
        className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-black bg-opacity-50 text-white p-3 rounded-full focus:outline-none hover:scale-110"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </motion.button>

      {/* Indicadores con barras horizontales */}
      <motion.div
        className="flex justify-center space-x-2"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {images.map((_, index) => (
          <motion.span
            key={index}
            className={`block h-1 w-12 mt-[-30px] transition-all duration-300 ${
              index === currentIndex ? "bg-black bg-opacity-50" : "bg-gray-300"
            }`}
            whileHover={{ scale: 1.2 }}
            onClick={() => setCurrentIndex(index)}
          ></motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default Slider;
