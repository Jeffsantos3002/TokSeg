import React from 'react';
import icone1 from '../assets/icones-container/icone1.svg';
import icone2 from '../assets/icones-container/icone2.png';
import icone3 from '../assets/icones-container/icone3.svg';


const Container = () => {
  return (
    <div className="bg-dark">
      <div className="flex flex-col justify-center items-center h-full px-4 py-24 mx-auto  max-w-[1256px] space-y-4 px-4">
        <div className="flex justify-between md:flex-row flex-col items-center w-full space-x-4 md:space-y-0 space-y-5">
          <div className="flex flex-col items-center text-center md:w-1/3">
            <div className='flex justify-center items-center h-32 w-32 mb-4'>
              <img src={icone1} alt="Ícone 1" className="h-full w-full object-contain" />
            </div>
            <span className="text-white font-lato font-medium text-[20px]">
              Disponibiliza a visualização das câmeras em tempo real via app, defina os canais liberados por grupos de perfis.
            </span>
          </div>
          <div className="flex flex-col items-center text-center md:w-1/3">
            <div className='flex justify-center items-center h-32 w-32 mb-4'>
              <img src={icone2} alt="Ícone 2" className="" />
            </div>
            <span className="text-white font-lato font-medium text-[20px] text-center">
              O convite facial via Whatsapp agiliza o acesso seguro sem contato, reforçando a segurança com reconhecimento facial.
            </span>
          </div>
          <div className="flex flex-col items-center text-center md:w-1/3">
            <div className='flex justify-center items-center h-32 w-32 mb-4'>
              <img src={icone3} alt="Ícone 3" className="" />
            </div>
            <span className="text-white font-lato font-medium text-[20px] text-center">
              Receba notificações PUSH em tempo real em seu celular, da entrada e da saída de pessoas e veículos do condomínio.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Container;
