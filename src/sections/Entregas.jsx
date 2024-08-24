import React from 'react';
import entrega from '../assets/banner/entrega.png'; 

const Entregas = () => {
  return (
    <section className="py-12 bg-verdeTokSeg text-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-6xl font-bold mb-24 text-center">
          Não é apenas uma encomenda com a Tokseg, é a segurança e a confiança que sua encomenda merece.
        </h2>
        
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="lg:w-1/2 lg:order-first order-last">
            <h2 className="text-5xl font-bold mb-12 text-center lg:text-left">Descubra o novo jeito de receber suas entregas!</h2>
            
            <div className="mb-12">
              <h3 className="text-4xl font-semibold mb-4 ">Comodidade para os moradores:</h3>
              <p className="text-2xl text-left mb-4">
                Contamos com um sistema de armários compartilhados.
                Assim que a encomenda é recebida, o morador recebe uma notificação no celular.
                Quando chegar em casa, sem pressa, o morador pode se dirigir à portaria  e retirar sua encomenda.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-4xl font-semibold mb-4">Facilidade para entregadores:</h3>
              <p className="text-2xl text-left mb-4">
              A Tokseg previne complicações como o não recebimento, dificuldade de acesso ao local da entrega e encomendas deixadas em locais impróprios.
              </p>
            </div>

            <div className="mb-8 flex justify-center">
              <button className='btn bg-white rounded-full max-w-80 w-full text-center text-base'>
                <a href="#form" className="scroll-smooth">Orçamento sem compromisso</a>
              </button>
            </div>

          </div>

          <div className="lg:w-1/2 lg:order-last order-first flex items-center justify-center pb-12">
            <img src={entrega} alt="Imagem de entrega" className="w-3/4 md:size-4/5 h-auto mb-25 rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};



export default Entregas;
