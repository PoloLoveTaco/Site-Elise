function Contact() {
    return (
        <div className='bg-[#FAEEDA]'>
            <div className='relative w-full h-screen overflow-hidden'>
                {/* Image floutée */}
                <div className='absolute inset-0 bg-[url(src/assets/baniere-ergo-pedia.png)] bg-cover bg-center blur-sm'/>

                {/* Overlay sombre (optionnel pour lisibilité) */}
                <div className='absolute inset-0 bg-black/35'/>

                {/* Contenu NON flou */}
                <div className="relative z-[1] flex flex-col justify-center items-center h-full text-white font-bold">
                    <p className='text-6xl'>Contact</p>
                </div>
            </div>
        </div>
    )
}

export default Contact