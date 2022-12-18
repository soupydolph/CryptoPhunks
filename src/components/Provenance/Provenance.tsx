const Provenance = (props: { flipped: boolean, title: string, caption: string, image: string }) => {
  return (
    <>
      <div className='provenance grid justify-items-stretch max-w-3xl mx-auto mb-32'>
        <div className={`${props.flipped ? 'justify-self-end' : 'justify-self-start'} h-64 w-64 sm:h-96 sm:w-96 flex border-4 brightness-90`}>
          <img src={props.image} alt="" />
        </div>
        <div className={`card ${props.flipped ? 'justify-self-start' : 'justify-self-end'} h-64 w-64 sm:h-96 sm:w-96 flex flex-col items-center justify-center border-4 bg-white -mt-10 md:-mt-24 ${props.flipped ? 'ml-10 md:ml-24' : 'mr-10 md:mr-24'} drop-shadow-xl`}>
          <h3 className='font-display text-7xl md:text-9xl text-center text-primary'>{props.title}</h3>
          <p className='text-primary text-2xl'>{props.caption}</p>
          <div className='links flex flex-row'>
            <p>LooksRare</p>
            <p>Opensea</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Provenance