import React from 'react';
import logotokseg from '../assets/banner/logotokseg.png';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt  } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className="py-8 bg-gray-800 text-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between">
          <div className="flex flex-col md:w-1/2">
            <img src={logotokseg} alt="Logo da Empresa" className="w-40 h-auto mb-4" />
            <h2 className="font-semibold mb-2">Canais de Atendimento</h2>
            <div className="mb-2 flex items-center">
              <FaPhoneAlt className="mr-2" />
              <span>79 999609197</span>
            </div>
            <div className="mb-2 flex items-center">
              <FaPhoneAlt className="mr-2" />
              <span>79 32512318</span>
            </div>
            <div className="mb-2 flex items-center">
              <FaEnvelope className="mr-2" />
              <span>suportetokseg@gmail.com</span>
            </div>
            <div className="mb-2 flex items-center">
              <span className="mr-2">CNPJ:</span>
              <span>46564.393.0001/67</span>
            </div>
            <div className="mb-2 flex items-center">
              <FaMapMarkerAlt className="mr-2" />
              <span>Rua zoroastro Rodrigues  Santos 125 - Orlando Dantas, Aracaju - SE</span>
            </div>
          </div>
          <div className="flex flex-col md:w-1/4 md:ml-auto mt-4 md:mt-0">
            <h2 className="font-semibold mb-2">Redes Sociais</h2>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/toksegoficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
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