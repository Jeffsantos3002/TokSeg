import Secruty from '../assets/icons/security.png'
import ArrowGig from '../assets/icons/arrow-gif.gif'

export default function Section3 () {
  return(
    <div className="bg-dark w-full text-white py-12 lg:pl-28 sm:px-16 px-8">
      <div className="flex flex-col justify-start items-start space-y-12 w-full max-w-[573px]">
        <img className='w-52' src={Secruty} alt="segurança" title='segurança'/>
        <h2 className='text-4xl text-black	'>Prepare-se para um <strong>novo jeito <br/> de viver em condomínio</strong> </h2>
        <p className='text-3xl'>Muito mais segurança para você e sua família por meio da solução que avança levando sempre o morador em primeiro lugar!</p>
        <div className='w-full space-y-8'>
          <div className='flex flex-col justify-center items-center max-w-80 w-full'>
            <img className='w-8' src={ArrowGig} alt="arrow-gif" title="arrow-gif" />
          </div>
          <button className='btn btn-success rounded-full max-w-80 w-full text-white text-center text-base'><a href="#form" className='scroll-smooth'>Falar com um especialista</a></button>
        </div>
      </div>
    </div>
  )
}