import LocationCard from '../../components/locationCard'

function Home() {
    return (
        <div className='bg-[#FAEEDA] '>
            <div className='relative w-full h-screen overflow-hidden'>
                {/* Image floutée */}
                <div className='absolute inset-0 bg-[url(src/assets/baniere-home.jpeg)] bg-cover bg-center blur-sm'/>

                {/* Overlay sombre (optionnel pour lisibilité) */}
                <div className='absolute inset-0 bg-black/35'/>

                {/* Contenu NON flou */}
                <div className="relative z-[1] flex flex-col justify-center items-center h-full text-white font-bold">
                    <p className='text-6xl'>Elise Durand</p>
                    <p className='text-3xl'>Ergothérapeute</p>
                </div>
            </div>
            <section className='px-6 py-12 max-w-5xl mx-auto'>
                <h2 className='text-3xl md:text-4xl font-oswald-bold text-black mb-6'>
                    <span className='block'>Qu’est-ce que</span>
                    <span className='block'>l’ergothérapie ?</span>
                </h2>
                <ul className='space-y-4 text-lg leading-relaxed text-black/80 list-disc pl-6'>
                    <li>
                        L’ergothérapeute (Occupational Therapist) est un professionnel de santé, exerçant dans les champs sanitaire, médico-social et social. Collaborant avec de nombreux professionnels (médecins, auxiliaires médicaux, travailleurs sociaux, acteurs de l’enseignement et de la formation, techniciens de l’habitat…), il est un intervenant incontournable dans le processus d’adaptation, de réadaptation et d’intégration sociale des personnes.
                    </li>
                    <li>
                        Spécialiste du rapport entre l’activité (ou occupation en lien avec la terminologie internationale désignant l’ergothérapie) et la santé, il mène des actions d’une part pour prévenir et modifier les activités délétères pour la santé, et d’autre part pour assurer l’accès des individus aux occupations qu’ils veulent ou doivent faire et rendre possible leur accomplissement de façon sécurisée, autonome, indépendante et efficace.
                    </li>
                    <li>
                        (ANFE : association nationale française des ergothérapeute)
                    </li>
                </ul>
            </section>
            <LocationCard />
        </div>
    )
}

export default Home
