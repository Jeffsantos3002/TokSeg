import React from 'react';
import icone from '../assets/icones/icone.png';
import icone2 from '../assets/icones/icone2.png';
import icone3 from '../assets/icones/icone3.png';


const Container = () => {
  return (
  <div className="block bg-pretoTokSeg border-none mx-auto mb-0 rounded-none w-full  relative flex flex-col justify-center items-center">
    <div className="flex flex-col justify-center items-center h-full px-4 py-24 w-full max-w-[1256px]">
      <div className="flex justify-between lg:flex-row flex-col items-center">
        <div className="flex flex-col items-center">
          <div className='flex flex-col justify-center items-center h-48 w-28'>
            <img src={icone} alt="Ícone 1" className="mb-4" />
          </div>
          <span className="text-white font-lato font-medium text-[24px] text-center">
            Funcionalidades que se adaptam à rotina do morador
          </span>
        </div>
        <div className="flex flex-col items-center">
        <div className='flex flex-col justify-center items-center h-48 w-28'>
          <img src={icone2} alt="Ícone 2" className="mb-4" />
        </div>
          <span className="text-white font-lato font-medium text-[24px] text-center">
            Autonomia para liberar acesso via videochamada
          </span>
        </div>
        <div className="flex flex-col items-center">
         <div className='flex flex-col justify-center items-center h-48 w-28'>
          <img src={icone3} alt="Ícone 3" className="mb-4" />
          </div>
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
