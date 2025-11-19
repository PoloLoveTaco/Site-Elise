import LocationCard from '../../components/locationCard'

function Home() {
    return (
        <div className='bg-[#FAEEDA] '>
            <div className='relative w-full h-[calc(100vh-72px)] overflow-hidden' >
                {/* Image floutée */}
                <div className='absolute inset-0 bg-[url(src/assets/ergo-pediatrique.jpeg)] bg-cover bg-center blur-sm'/>

                {/* Overlay sombre (optionnel pour lisibilité) */}
                <div className='absolute inset-0 bg-black/35'/>

                {/* Contenu NON flou */}
                <div className="relative z-[1] flex flex-col justify-center items-center h-full text-white font-bold">
                    <p className='text-6xl'>Elise Durand</p>
                    <p className='text-3xl'>Ergothérapeute</p>
                </div>
            </div>
            <div className='flex py-14'>
                <img src='src/assets/Elise.jpg' className='w-100 h-100 object-cover object-top rounded-full shadow-lg'/>
                <p>Presentation</p>
            </div>
            <LocationCard />
        </div>
    )
}

export default Home