import React from 'react';
import entrega from '../assets/banner/entrega.png'; 

const Entregas = () => {
  return (
    <section className="py-12 bg-verdeTokSeg text-gray-900 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-6xl font-bold mb-24 text-center">
          Não é só uma encomenda, é o seu pedido seguro na Porter Entregas
        </h2>
        
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="md:w-1/2">
            <h2 className="text-5xl font-bold mb-12 text-center md:text-left">Descubra o futuro com o Porter Entregas</h2>
            
            <div className="mb-12">
              <h3 className="text-4xl font-semibold mb-4 ">Comodidade para os moradores:</h3>
              <p className="text-2xl text-left mb-4 p-2">
                Assim que a encomenda é colocada na caixa, o morador recebe uma notificação no celular, com imagens do momento da entrega.
                Quando chegar em casa, sem pressa, o morador pode se dirigir à guarita de recebimento e retirar sua encomenda.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-4xl font-semibold mb-4">Facilidade para entregadores:</h3>
              <p className="text-2xl text-left mb-4 p-2">
                Mitiga complicações, como restrições de horários, dificuldade de acesso ao local da entrega e encomendas deixadas em locais impróprios.
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
            <img src={entrega} alt="Imagem de entrega" className="w-120 ml-36 mb-24" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Entregas;
