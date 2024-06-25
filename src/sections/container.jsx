import React from 'react';
import icone from '../assets/icones/icone.png';
import icone2 from '../assets/icones/icone2.png';
import icone3 from '../assets/icones/icone3.png';


const Container = () => {
  return (
    <div className="block bg-red-500 border-none mx-auto mb-0 rounded-none w-full h-[401px] relative">
    <div className="flex flex-col justify-center items-center h-full px-4">
      <div className="flex justify-between items-center w-full mt-8">
        <div className="flex flex-col items-center">
          <img src={icone} alt="Ícone 1" className="mb-4" />
          <span className="text-white font-lato font-medium text-[24px] text-center">
            Funcionalidades que se adaptam à rotina do morador
          </span>
        </div>
        <div className="flex flex-col items-center">
          <img src={icone2} alt="Ícone 2" className="mb-4" />
          <span className="text-white font-lato font-medium text-[24px] text-center">
            Autonomia para liberar acesso via videochamada
          </span>
        </div>
        <div className="flex flex-col items-center">
          <img src={icone3} alt="Ícone 3" className="mb-4" />
          <span className="text-white font-lato font-medium text-[24px] text-center">
            Tecnologia própria e reconhecimento facial
          </span>
        </div>
      </div>
    </div>
  </div>
);
};
    export default Container;
