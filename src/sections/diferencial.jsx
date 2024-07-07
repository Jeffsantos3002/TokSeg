import React from 'react';
import ico1 from '../assets/diferencial/ico1.png';
import ico2 from '../assets/diferencial/ico2.png';
import ico3 from '../assets/diferencial/ico3.png';
import ico4 from '../assets/diferencial/ico4.png';
import ico5 from '../assets/diferencial/ico5.png';
import ico6 from '../assets/diferencial/ico6.png';
import ico7 from '../assets/diferencial/ico7.png';
import ico8 from '../assets/diferencial/ico8.png';



const Diferencial = () => {
    return (
                <section className="bg-gray-100 py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-8">
                            <p className="text-2xl md:text-4xl font-bold mb-24 text-center">Portaria Porter é muito mais do que uma empresa de tecnologia, para condomínios.</p>
                        </div>
                        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                            <div className="flex flex-col items-center mb-16">
                                <img src={ico1} alt="Ícone 1" className="w-18 h-18 mb-2" />
                                <p className=" text-lg text-center text-gray-800">A Porter constrói a solução e escuta o cliente </p>
                            </div>
                            <div className="flex flex-col items-center">
                                <img src={ico2} alt="Ícone 2" className="w-18 h-18 mb-2" />
                                <p className="text-lg text-center text-gray-800">Tem tecnologia integrada</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <img src={ico3} alt="Ícone 3" className="w-18 h-18 mb-2" />
                                <p className=" text-lg text-center text-gray-800">Fornecedores homologados</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <img src={ico4} alt="Ícone 4" className="w-18 h-18 mb-2" />
                                <p className=" text-lg text-center text-gray-800">É pioneiro em portaria remota</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <img src={ico5} alt="Ícone 5" className="w-18 h-18 mb-2" />
                                <p className="text-lg text-center text-gray-800">Está sempre em desenvolvimento e gosta de inovar</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <img src={ico6} alt="Ícone 6" className="w-18 h-18 mb-2" />
                                <p className="text-lg text-center text-gray-800">Investe na educação do síndico e no crescimento dos condomínios</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <img src={ico7} alt="Ícone 7" className="w-18 h-18 mb-2" />
                                <p className="text-lg text-center text-gray-800">Possui o maior evento do mercado condominial do País</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <img src={ico8} alt="Ícone 8" className="w-18 h-18 mb-2" />
                                <p className="text-lg text-center text-gray-800">Tem a maior base de atendimento da américa Latina</p>
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