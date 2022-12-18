import LooksRare from '../LooksRare';
import OpenSea from '../OpenSea';

const Provenance = (props: { flipped: boolean, title: string, caption: string, image: string, lr?: string, os?: string, isLast?: boolean }) => {
  return (
    <>
      <div className='provenance grid justify-items-stretch max-w-3xl mx-auto mb-32'>
        <div className={`${props.flipped ? 'justify-self-end' : 'justify-self-start'} h-64 w-64 sm:h-96 sm:w-96 flex border-4 brightness-90`}>
          <img src={props.image} alt="" />
        </div>
        <div className={`provenance_card ${props.flipped ? 'justify-self-start' : 'justify-self-end'} h-64 w-64 sm:h-96 sm:w-96 flex flex-col items-center justify-center border-4 bg-white -mt-10 md:-mt-24 ${props.flipped ? 'ml-10 md:ml-24' : 'mr-10 md:mr-24'} drop-shadow-xl ${props.isLast ? 'provenance_card--last' : ''}`}>
          <h3 className='font-display text-7xl md:text-9xl text-center text-primary'>{props.title}</h3>
          <p className='text-primary text-2xl'>{props.caption}</p>
          <div className='links flex flex-row'>
            <a className='w-10 h-10 m-4' href={props.lr} target="_blank" rel="noopener noreferrer">
              <LooksRare />
            </a>
            <a className='w-10 h-10 m-4' href={props.os} target="_blank" rel="noopener noreferrer">
              <OpenSea />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Provenance