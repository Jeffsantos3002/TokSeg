export default function Section4 (){
  return(
    <div className="w-full flex justify-center items-center bg-pretoTokSeg py-12 px-4">
      <div className="w-full max-w-[1256px] flex lg:flex-row flex-col justify-center items-center lg:space-x-12 ">
        <h1 className="text-4xl text-white flex lg:hidden lg:text-start text-center font-bold max-w-[578px] w-full">Portaria Porter é credibilidade e eficiência por meio das nossas soluções</h1>
        <div className="lg:w-1/2 lg:p-0 p-4 w-full space-y-8 flex flex-col items-center lg:items-start">
          <h1 className="hidden lg:flex text-4xl text-white lg:text-start text-center font-bold max-w-[578px] w-full">Portaria Porter é credibilidade e eficiência por meio das nossas soluções</h1>
          <iframe className="lg:flex hidden max-w-[600px] w-full max-h-[315px]"  height="315" src="https://www.youtube.com/embed/8oFcjJi7mp8?si=WsW84p_DaYi59hWX" title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>   
          </iframe>
          <iframe className="lg:hidden flex"  height="179" width="340" src="https://www.youtube.com/embed/8oFcjJi7mp8?si=WsW84p_DaYi59hWX" title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>   
          </iframe>
          <a href="#form" className='w-full max-w-[600px] flex items-center justify-center '>
            <button className='btn btn-success rounded-full border-none text-white  w-full max-w-[356px]'>
            Orçamento sem compromisso
            </button>
          </a>
        </div>
        <div className="w-2/5 text-2xl text-center">
          <div>Aplicativo exclusivo</div>
          <div>Reconhecimento facial</div>
          <div>Gestão e controle de acessos</div>
          <div>Solução para entregas</div>
          <div>Envio de chaves virtuais</div>
          <div className="flex space-x-4">
            <div>Lorem Ipsum</div>
            <div>Lorem Ipsum</div>
          </div>
          <div className="flex space-x-4">
            <div>Lorem Ipsum</div>
            <div>Lorem Ipsum</div>
          </div>
        </div>
      </div>
    </div>
  )
}