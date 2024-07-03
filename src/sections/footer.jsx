import React from 'react';
import logo from '../assets/banner/logo.png';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt  } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className="py-8 bg-gray-800 text-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between">
          <div className="flex flex-col md:w-1/2">
            <img src={logo} alt="Logo da Empresa" className="w-40 h-auto mb-4" />
            <h2 className="font-semibold mb-2">Canais de Atendimento</h2>
            <div className="mb-2 flex items-center">
              <FaPhoneAlt className="mr-2" />
              <span>14 2109-3633</span>
            </div>
            <div className="mb-2 flex items-center">
              <FaPhoneAlt className="mr-2" />
              <span>14 2109-3633</span>
            </div>
            <div className="mb-2 flex items-center">
              <FaEnvelope className="mr-2" />
              <span>suporte@condfy.com.br</span>
            </div>
            <div className="mb-2 flex items-center">
              <span className="mr-2">CNPJ:</span>
              <span>32.849.537/0001-17</span>
            </div>
            <div className="mb-2 flex items-center">
              <FaMapMarkerAlt className="mr-2" />
              <span>Rua José Antônio Braga 3-82, 17018-540 - Vila Aviação, Bauru - SP</span>
            </div>
          </div>
          <div className="flex flex-col md:w-1/4 md:ml-auto mt-4 md:mt-0">
            <h2 className="font-semibold mb-2">Redes Sociais</h2>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                <FaFacebookF />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                <FaLinkedinIn />
              </a>
            </div>
            <h2 className="font-semibold mt-4 mb-2">LGPD</h2>
            <a href="mailto:lgpd@condfy.com.br" className="text-white hover:text-gray-400">
              Política de privacidade
            </a>
          </div>
        </div>
      </footer>
    );
  };

      export default Footer;