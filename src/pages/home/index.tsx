import LocationCard from '../../components/locationCard'
import homeBanner from '../../assets/baniere-home.jpeg'

import bureau1 from '../../assets/bureau_1.jpg'
import bureau2 from '../../assets/bureau_2.jpg'
import bureau3 from '../../assets/bureau_3.jpg'
import color from '../../assets/styles/color'

function Home() {
    return (
        <div>
            <div className='relative w-full h-screen overflow-hidden'>
                {/* Image floutée */}
                <div
                    className='absolute inset-0 bg-cover bg-center blur-sm'
                    style={{ backgroundImage: `url(${homeBanner})` }}
                />

                {/* Overlay sombre (optionnel pour lisibilité) */}
                <div className='absolute inset-0 bg-black/35'/>

                {/* Contenu NON flou */}
                <div className="relative z-[1] flex flex-col text-center justify-center items-center h-full text-white font-bold">
                    <p className='text-6xl'>Cabinet d’ergothérapie à La Roche-sur-Yon</p>
                    <p className='text-3xl'>spécialisé en pédiatrie</p>
                </div>
            </div>
            <section className={`relative overflow-hidden bg-[${color.primary1}]`}>
                <div className="absolute -top-12 -left-16 size-48 rounded-full bg-emerald-200/40 z-0" />
                <div className="absolute top-10 -right-10 size-25 rounded-full bg-sky-200/40 z-0" />
                <div className="absolute bottom-0 left-1/3 size-24 rounded-full bg-orange-200/30 z-0" />
                <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16">
                    <h2 className='text-3xl md:text-4xl font-oswald-bold text-black mb-6 font-bold'>
                        <span className='block text-[#997f6b] font-leckerli'>Qu’est-ce que l’ergothérapie ?</span>
                    </h2>
                    <p className="text-lg leading-relaxed text-slate-700 text-justify">
                        « <span className="font-semibold">L’ergothérapeute</span> (Occupational Therapist) est un <span className="font-semibold">professionnel</span> de santé, exerçant dans les champs sanitaire, médico-social et social.
                        <span className="font-semibold">Collaborant avec de nombreux professionnels</span> (médecins, auxiliaires médicaux, travailleurs sociaux, acteurs de l’enseignement et de la formation,
                        techniciens de l’habitat…), il est un intervenant incontournable dans le processus d’adaptation, de réadaptation et d’intégration sociale des personnes.
                        <span className="font-semibold">Spécialiste du rapport entre l’activité</span> (ou occupation en lien avec la terminologie internationale désignant l’ergothérapie) et 
                        <span className="font-semibold"> la santé, il mène des actions d’une part pour prévenir et modifier les activités délétères</span> pour la santé,
                        et d’autre part pour <span className="font-semibold">assurer l’accès des individus aux occupations qu’ils veulent ou doivent faire</span> et
                        rendre possible leur accomplissement de façon sécurisée, autonome, indépendante et efficace. »
                        (ANFE : association nationale française des ergothérapeutes)
                    </p>
                </div>
            </section>
            <section className="relative overflow-hidden">
                <div className="absolute -top-0 -right-12 size-40 rounded-full bg-emerald-100/60 z-0" />
                <div className="absolute bottom-0 left-10 size-28 rounded-full bg-sky-100/60 z-0" />
                <div className="absolute top-100 right-70 size-25 rounded-full bg-sky-200/40 z-0" />
                <div className="absolute -left-12 top-60 size-36 rounded-full bg-orange-200/50 z-0" />
                <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16">
                    <h2 className='text-3xl md:text-4xl font-oswald-bold text-black mb-6 font-bold'>
                        <span className='block text-[#997f6b] font-leckerli'>Le cabinet</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="overflow-hidden rounded-2xl shadow-md">
                            <img
                                src={bureau1}
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="overflow-hidden rounded-2xl shadow-md">
                            <img
                                src={bureau2}
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="overflow-hidden rounded-2xl shadow-md">
                            <img
                                src={bureau3}
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                    <LocationCard />
                </div>
            </section>
        </div>
    )
}

export default Home
