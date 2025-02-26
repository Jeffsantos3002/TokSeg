import React, { useState, useEffect } from 'react';

export default function Header() {
  const [headerColor, setHeaderColor] = useState('bg-inherit');

  // Função que será chamada quando houver scroll na tela
  const handleScroll = () => {
    if (window.scrollY > 50) { // 50px de scroll para baixo
      setHeaderColor('bg-white shadow'); // Defina a cor que deseja quando o scroll passa de 50px
      console.log("foi")
    } else {
      setHeaderColor('bg-inherit'); // Cor original quando o scroll está no topo
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Limpar o evento de scroll quando o componente for desmontado
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full `}>
      <div className={`navbar flex justify-end md:px-8 py-4 ${headerColor} `}>
        <div className="navbar-end space-x-6">
          <a className="btn rounded bg-gray border-none shadow-none text-dark px-8" href="https://tokseg.acesso.app.br/login" target='_blank' >Acessar</a>
          <a className="btn btn-success px-8 rounded border-none text-white"  href= "https://wa.me/557932512318"  target='_blank'>Quero conhecer</a>
        </div>
      </div>
    </header>
  );
}
