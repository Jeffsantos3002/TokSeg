import React from 'react';
import entrega from '../assets/banner/entrega.png'; 

const Entregas = () => {
  return (
    <section className="py-12 bg-verdeTokSeg text-gray-900 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-6xl font-bold mb-24 text-center">
          Não é apenas uma encomenda com a Tokseg, é a segurança e a confiança que sua encomenda merece.
        </h2>
        
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="md:w-1/2">
            <h2 className="text-5xl font-bold mb-12 text-center md:text-left">Descubra o novo jeito de receber suas entregas!</h2>
            
            <div className="mb-12">
              <h3 className="text-4xl font-semibold mb-4 ">Comodidade para os moradores:</h3>
              <p className="text-2xl text-left mb-4 p-2">
                Contamos com um sistema de armários compartilhados.
                Assim que a encomenda é recebida, o morador recebe uma notificação no celular.
                Quando chegar em casa, sem pressa, o morador pode se dirigir à portaria  e retirar sua encomenda.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-4xl font-semibold mb-4">Facilidade para entregadores:</h3>
              <p className="text-2xl text-left mb-4 p-2">
              A Tokseg previne complicações como o não recebimento, dificuldade de acesso ao local da entrega e encomendas deixadas em locais impróprios.
              </p>
            </div>

            <div className="mb-8">
              <button className='btn btn-success rounded-full max-w-80 w-full text-white text-center text-base'
                
              >
                <a href="#form" className="scroll-smooth">Orçamento sem compromisso</a>
              </button>
            </div>

          </div>

          <div className="md:w-1/2 relative">
            <img src={entrega} alt="Imagem de entrega" className="w-3/4 md:w-full h-auto ml-40 mb-25 rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Entregas;
