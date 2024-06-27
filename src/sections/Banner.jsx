import logo from '../assets/banner/logo.png'
import banner from '../assets/banner/banner.png'

export default function Banner (){
  return(
    <div className='w-full flex justify-center p-4 bg-white'>
      <div className=" w-full flex flex-col lg:flex-row justify-center items-center w-full max-w-[1256px] ">
        <div className='flex flex-col items-center lg:items-start' >
          <img src= { logo } alt='logo' title='logo-tokseg' className='w-64 mb-12'/>
          <div className='flex flex-col items-center lg:items-start space-y-12 w-11/12	lg:w-full'>
            <h1 className='text-pretoTokSeg text-7xl text-center lg:text-start font-semibold '>Não é só Portaria Remota; É Portaria Porter.</h1>
            <p className='text-pretoHover text-2xl	'>A única solução que se adapta ao dia a dia do seu condomínio.</p>
            <button className='hidden lg:flex btn btn-success rounded-full border-none text-white w-full max-w-[356px]'><a href="#form" className='scroll-smooth'>Orçamento sem compromisso</a></button>
          </div>
        </div>
        <img src={banner} alt='image-banner' title='image-banner' className='w-full max-w-[484px]'/>
        <div className='w-full flex lg:hidden justify-center'>
          <button className='btn btn-success rounded-full border-none  text-white w-full max-w-[356px]'><a href="#form" className='scroll-smooth'>Orçamento sem compromisso</a></button>
        </div>
      </div>
     
    </div>
    
  )
}