import React from 'react';
import logotokseg from '../assets/banner/logotokseg.png';
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="pt-14 pb-24 sm:pb-8 bg-dark text-white border-t border-white/5">

      <div className="mx-auto w-full max-w-[1256px] px-4">
        <div className="grid gap-10 md:grid-cols-3 items-start text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-4">
            <img src={logotokseg} alt="Logo TokSeg" className="w-48 h-auto" />
            <p className="text-sm text-white/60 max-w-xs">Portaria inteligente, monitoramento e tecnologia para o seu condomínio.</p>
          </div>

          <div className="flex flex-col items-center md:items-start gap-3 text-sm text-white/80">
            <h2 className="font-bold text-base text-white mb-1">Canais de Atendimento</h2>
            <a href="tel:+5579999609197" className="flex items-center gap-2 hover:text-verdeFosco">
              <FaPhoneAlt className="text-verdeTokSeg" /> 79 99960-9197
            </a>
            <a href="tel:+557932512318" className="flex items-center gap-2 hover:text-verdeFosco">
              <FaPhoneAlt className="text-verdeTokSeg" /> 79 3251-2318
            </a>
            <a href="mailto:suportetokseg@gmail.com" className="flex items-center gap-2 hover:text-verdeFosco">
              <FaEnvelope className="text-verdeTokSeg" /> suportetokseg@gmail.com
            </a>
            <p className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-verdeTokSeg mt-0.5 shrink-0" />
              <span>Rua Zoroastro Rodrigues Santos, 125 - Orlando Dantas, Aracaju - SE</span>
            </p>
            <p><span className="text-white/60">CNPJ:</span> 46.564.393/0001-67</p>
          </div>

          <div className="flex flex-col items-center md:items-start gap-3">
            <h2 className="font-bold text-base">Redes Sociais</h2>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/toksegseguracaeletronicaetecnologia/" target="_blank" rel="noopener noreferrer"
                aria-label="Facebook" className="w-10 h-10 rounded-full bg-dark2 border border-white/10 flex items-center justify-center hover:bg-verdeTokSeg transition">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/toksegoficial/" target="_blank" rel="noopener noreferrer"
                aria-label="Instagram" className="w-10 h-10 rounded-full bg-dark2 border border-white/10 flex items-center justify-center hover:bg-verdeTokSeg transition">
                <FaInstagram />
              </a>
            </div>
            <h2 className="font-bold text-base mt-4">LGPD</h2>
            <button type="button" className="underline text-sm text-white/80 hover:text-verdeFosco"
              onClick={() => document.getElementById('my_modal_3').showModal()}>
              Política de Privacidade e Termos de Uso
            </button>
          </div>
        </div>
        <div className="border-t border-white/10 mt-10 pt-6">
          <p className="text-center text-sm text-white/60">© {new Date().getFullYear()} TokSeg. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
