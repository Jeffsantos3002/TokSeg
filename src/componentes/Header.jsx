import { useState, useEffect } from 'react';
import logo from '../assets/banner/logo.webp';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Ativa o fundo branco do header após 50px de scroll
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-[1256px] flex items-center justify-between gap-4 px-4 py-3">
        <a href="#" aria-label="Voltar ao topo"
          className={`transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <img src={logo} alt="TokSeg" className="h-9 sm:h-11 w-auto object-contain" />
        </a>
        <nav className="flex items-center gap-2 sm:gap-4">
          <a className="btn btn-sm sm:btn-md rounded-full bg-gray hover:bg-verdeFosco border-none shadow-none text-dark px-4 sm:px-8"
            href="https://tokseg.acesso.app.br/login" target="_blank" rel="noopener noreferrer">
            Acessar
          </a>
          <a className="btn btn-sm sm:btn-md btn-success rounded-full border-none text-white px-4 sm:px-8"
            href="https://wa.me/557932512318" target="_blank" rel="noopener noreferrer">
            Quero conhecer
          </a>
        </nav>
      </div>
    </header>
  );
}
