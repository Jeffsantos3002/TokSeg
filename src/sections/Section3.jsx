import Secruty from '../assets/icons/security.svg'
import ArrowGig from '../assets/icons/arrow-gif.gif'

export default function Section3 () {
  return(
    <div className="bg-dark w-full text-white py-12 lg:pl-28 sm:px-16 px-8 flex justify-center">
      <div className='w-full max-w-[1256px] '>
        <div className="flex flex-col justify-start items-start space-y-12 w-full max-w-[573px]">
          <img className='w-52' src={Secruty} alt="segurança" title='segurança'/>
          <h2 className='text-5xl text-black	'>Tornando o seu mundo <strong> <br/> mais seguro.</strong> </h2>
          <p className='text-3xl'>Proporcione mais segurança para você e sua família com a solução Tokseg, que coloca o morador no centro de tudo e avança constantemente para atender suas necessidades.</p>
          <div className='w-full space-y-8'>
            <div className='flex flex-col justify-center items-center max-w-80 w-full'>
              <img className='w-8' src={ArrowGig} alt="arrow-gif" title="arrow-gif" />
            </div>
            <button className='btn btn-success rounded-full max-w-80 w-full text-white text-center text-base'><a href="#form" className='scroll-smooth'>Falar com um especialista</a></button>
          </div>
        </div>
      </div>
    </div>
  )
}