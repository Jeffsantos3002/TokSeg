import React from 'react';
import ico1 from '../assets/diferencial/ico1.svg';
import ico2 from '../assets/diferencial/ico2.png';
import ico3 from '../assets/diferencial/ico3.svg';
import ico4 from '../assets/diferencial/ico4.png';
import ico5 from '../assets/diferencial/ico5.svg';
import ico6 from '../assets/diferencial/ico6.svg';
import ico7 from '../assets/diferencial/ico7.svg';
import ico8 from '../assets/diferencial/ico8.svg';



const Diferencial = () => {
    return (
                <section className="bg-verdeTokSeg py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-8">
                            <p className="text-2xl md:text-4xl font-bold mb-24 text-center text-gray-800">Portaria Tokseg é muito mais do que uma empresa de tecnologia, para condomínios.</p>
                        </div>
                        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                            <div className="flex flex-col items-center mb-16">
                                <img src={ico1} alt="Ícone 1" className="w-32 h-auto mb-2" />
                                <p className=" text-lg text-center text-gray-800">Moldamos nossas soluções para atender as demandas do seu condominio.</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <img src={ico2} alt="Ícone 2" className="w-32 h-auto mb-2" />
                                <p className="text-lg text-center text-gray-800">Temos soluções tecnológicas para cada demanda.</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <img src={ico3} alt="Ícone 3" className="w-32 h-auto mb-2" />
                                <p className=" text-lg text-center text-gray-800">Contamos com fornecedores homologados.</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <img src={ico4} alt="Ícone 4" className="w-32 h-auto mb-2" />
                                <p className=" text-lg text-center text-gray-800">Referencia em portaria remota e segurança condominial.</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <img src={ico5} alt="Ícone 5" className="w-32 h-auto mb-2" />
                                <p className="text-lg text-center text-gray-800">Estamos em constante evolução para atender melhor novas necessidades.</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <img src={ico6} alt="Ícone 6" className="w-32 h-auto mb-2" />
                                <p className="text-lg text-center text-gray-800">Fornecemos treinamento personalizado para os gestores, sindicos e porteiros.</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <img src={ico7} alt="Ícone 7" className="w-32 h-auto mb-2" />
                                <p className="text-lg text-center text-gray-800">Ao escolher a solução Tokseg, você garante economia significativa e otimização dos recursos do seu condomínio.</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <img src={ico8} alt="Ícone 8" className="w-32 h-auto mb-2" />
                                <p className="text-lg text-center text-gray-800">Oferecemos suporte físico e remoto para o seu condominio.</p>
                            </div>
                        </div>
                        <div className="flex justify-center">
                           <button className='btn btn-success rounded-full max-w-80 w-full text-white text-center text-base mt-24'>
                                <a href="#form" className="scroll-smooth">Falar com especialista</a>
                            </button>
                        </div>
                    </div>
                </section>
            );
        }
        
        export default Diferencial;