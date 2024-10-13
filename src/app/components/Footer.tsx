"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 text-white py-8"
    >
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-4">
        {/* Descripción de la empresa */}
        <div>
          <h3 className="text-2xl font-bold">Nuestra Empresa</h3>
          <p className="text-gray-400 text-sm mt-2">
            Con más de 10 años de experiencia en el diseño y fabricación de
            muebles, carpintería, gasfitería, pintura y drywall, ofrecemos
            soluciones personalizadas para cada cliente con calidad y
            profesionalismo.
          </p>
        </div>

        {/* Enlaces rápidos */}
        <div>
          <h4 className="text-lg font-semibold">Enlaces</h4>
          <ul className="text-gray-400 text-sm mt-2">
            <li>
              <Link href="/#inicio" className="hover:text-gray-200">
                Drywall
              </Link>
            </li>
            <li>
              <Link href="/#servicios" className="hover:text-gray-200">
                Melamine
              </Link>
            </li>
            <li>
              <Link href="/#nosotros" className="hover:text-gray-200">
                Estructuras Metalicas
              </Link>
            </li>
            <li>
              <Link href="/#contacto" className="hover:text-gray-200">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div>
          <h4 className="text-lg font-semibold">Síguenos</h4>
          <div className="flex space-x-4 mt-2">
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-200 transition-colors"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
            </Link>
            <Link
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-200 transition-colors"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-200 transition-colors"
            >
              <FontAwesomeIcon icon={faGithub} className="text-2xl" />
            </Link>
          </div>
        </div>
      </div>

      {/* Línea divisoria */}
      <div className="border-t border-gray-700 mt-6 pt-4">
        <div className="text-center text-gray-400 text-sm">
          <p>
            &copy; 2024 Todos los derechos reservados - Software Cybersecurity
            Group (SCG)
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
