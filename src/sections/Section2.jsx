import React from 'react';
import icone from '../assets/icones/icone.png';
import icone2 from '../assets/icones/icone2.png';
import icone3 from '../assets/icones/icone3.png';


export default function Section2  () {
  return (
    <div className="block bg-pretoTokSeg border-none mx-auto mb-0 rounded-none w-full  relative flex flex-col justify-center items-center">
      <div className="flex flex-col lg:flex-row justify-between items-center h-full px-4 py-24 w-full max-w-[1256px] space-y-8 lg:space-y-0">
        <div className="flex flex-col items-center">
          <div className='flex flex-col justify-center items-center h-48 w-28'>
            <img src={icone} alt="Ícone 1" className="mb-4" />
          </div>
          <span className="text-white font-medium text-2xl text-center">
            Funcionalidades que se <br/> adaptam à rotina do morador
          </span>
        </div>
        <div className="flex flex-col items-center">
          <div className='flex flex-col justify-center items-center h-48 w-28'>
            <img src={icone2} alt="Ícone 2" className="mb-4" />
          </div>
          <span className="text-white font-medium text-2xl text-center">
            Autonomia para liberar <br/> acesso via videochamada
          </span>
        </div>
        <div className="flex flex-col items-center">
          <div className='flex flex-col justify-center items-center h-48 w-28'>
            <img src={icone3} alt="Ícone 3" className="mb-4 w-[146px] max-w-[146px]" />
          </div>
          <span className="text-white font-medium text-2xl text-center">
            Tecnologia própria e <br/> reconhecimento facial
          </span>
        </div>

      </div>
    </div>
  );
};
