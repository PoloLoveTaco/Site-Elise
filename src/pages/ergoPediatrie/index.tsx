import ergoPediatrieBanner from "../../assets/baniere-ergo-pedia.png"
import color from "../../assets/styles/color"

function ErgoPediatrie() {
    return (
        <div className={`text-slate-900`}>
            <div className='relative w-full h-screen overflow-hidden'>
                {/* Image floutée */}
                <div
                    className='absolute inset-0 bg-cover bg-center blur-sm'
                    style={{ backgroundImage: `url(${ergoPediatrieBanner})` }}
                />

                {/* Overlay sombre (optionnel pour lisibilité) */}
                <div className='absolute inset-0 bg-black/35'/>

                {/* Contenu NON flou */}
                <div className="relative z-[1] flex flex-col text-center justify-center items-center h-full text-white font-bold">
                    <p className='text-6xl'>L’ergothérapie en pédiatrie</p>
                </div>
            </div>
            <section className={`relative overflow-hidden bg-[${color.primary1}]`}>
                <div className="absolute -top-12 -left-16 size-48 rounded-full bg-emerald-200/40 z-0" />
                <div className="absolute top-20 -right-10 size-40 rounded-full bg-sky-200/40 z-0" />
                <div className="absolute bottom-0 left-1/3 size-24 rounded-full bg-orange-200/50 z-0" />
            </section>

            <section className="px-6 py-12 max-w-6xl mx-auto">
                <div className="rounded-2xl shadow-sm p-6 border border-white/60" style={{ backgroundColor: color.secondaireO1}}>
                    <p className="text-lg leading-relaxed text-slate-700 text-justify">
                        « L’ergothérapie est une <span className="font-semibold">profession de santé paramédicale visant à prévenir, réduire
                        ou supprimer les situations de handicap des enfants de tout âge</span>. Elle se base sur des
                        <span className="font-semibold"> activités significatives</span> visant à
                        <span className="font-semibold"> préserver et développer leur indépendance et leur autonomie </span>
                        au quotidien, à l’école et dans leurs loisirs. Elle propose une 
                        <span className="font-semibold"> approche globale de l’enfant</span> et se pratique au travers de la rééducation, de la réadaptation,
                        par et pour l’activité ». (ANFE : association nationale française des ergothérapeutes)
                    </p>
                </div>
            </section>

            <section className="relative px-6 pb-12 max-w-6xl mx-auto">
                <div className="absolute -left-10 top-10 size-32 rounded-full bg-emerald-100/60 z-0" />
                <div className="absolute right-6 bottom-2 size-24 rounded-full bg-sky-100/60 z-0" />
                <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl text-[#997f6b] font-leckerli mb-4 font-bold">
                    Quand consulter ?
                </h2>
                <p className="text-lg leading-relaxed text-slate-700 mb-6 text-justify">
                    Vous pouvez contacter un ergothérapeute lorsque votre enfant rencontre une ou plusieurs
                    difficultés dans ses activités de vie quotidienne et/ou scolaires.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="rounded-2xl p-6 shadow-sm border" style={{ backgroundColor: color.secondaireO1, borderColor: color.secondaireO1}}>
                        <h3 className="text-xl font-oswald-bold text-slate-700 mb-3 font-leckerli">À la maison</h3>
                        <ul className="list-disc pl-5 space-y-2 text-slate-700">
                            <li>Difficultés lors de l’habillage (lacets, boutons de vêtements…)</li>
                            <li>Difficultés pour prendre sa douche</li>
                            <li>Difficultés pour aller aux toilettes</li>
                            <li>Difficultés pour manger (couverts, installation à table etc…)</li>
                            <li>Difficultés pour faire des activités de loisirs (vélo, rollers, jeux de sociétés…)</li>
                            <li>Difficultés pour effectuer des gestes fins et précis (lego, coloriage etc…)</li>
                        </ul>
                    </div>

                    <div className="rounded-2xl p-6 shadow-sm border" style={{ backgroundColor: color.secondaireO1, borderColor: color.secondaireO1}}>
                        <h3 className="text-xl font-oswald-bold text-slate-700 mb-3 font-leckerli">À l’école</h3>
                        <ul className="list-disc pl-5 space-y-2 text-slate-700">
                            <li>Difficultés lors de la tâche graphique (reproduire des lettres ou des formes etc...)</li>
                            <li>Difficultés pour tenir son crayon</li>
                            <li>Difficultés pour se concentrer en classe</li>
                            <li>Difficultés pour manipuler les outils scolaires (ciseaux, règle, compas…)</li>
                            <li>Difficultés pour organiser les affaires scolaires</li>
                            <li>Difficultés de comportements à l’école (interaction avec les camarades, travail de groupe…)</li>
                        </ul>
                    </div>

                    <div className="rounded-2xl p-6 shadow-sm border" style={{ backgroundColor: color.secondaireO1, borderColor: color.secondaireO1}}>
                        <h3 className="text-xl font-oswald-bold text-slate-700 mb-3 font-leckerli">Sensoriel</h3>
                        <ul className="list-disc pl-5 space-y-2 text-slate-700">
                            <li>Hypo ou hypersensibilité dans un (ou plusieurs) champ(s) sensoriel(s)</li>
                            <li>Comportements de retrait, de frustration ou d’agressivité inhabituels</li>
                            <li>Facilement distrait</li>
                            <li>Difficultés à s’adapter aux situations nouvelles</li>
                            <li>Se fatigue vite</li>
                            <li>Difficultés alimentaires (sélectivité alimentaire…)</li>
                            <li>Mauvaise coordination des mouvements / équilibre insuffisant</li>
                            <li>Niveau d’alerte exagérément haut ou inversement très bas</li>
                        </ul>
                    </div>
                </div>
                </div>
            </section>

            <section className="py-12">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-2xl md:text-3xl text-[#997f6b] font-leckerli font-bold">
                        L’ergothérapie en pédiatrie, pour qui ?
                    </h2>
                </div>
                <div className="max-w-6xl mx-auto px-6 py-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-orange-100 text-orange-900 p-6 text-center text-lg font-oswald-bold rounded-xl shadow-sm flex items-center justify-center">
                            Troubles spécifiques des apprentissages (dysgraphie, dyslexie...)
                        </div>

                        <div className="p-6 text-center text-lg font-oswald-bold rounded-xl shadow-sm flex items-center justify-center">
                            Troubles développementaux de la coordination (TDC)
                        </div>

                         <div className="bg-orange-100 text-orange-900 p-6 text-center text-lg font-oswald-bold rounded-xl shadow-sm flex items-center justify-center">
                            Troubles du déficit de l’attention avec ou sans hyperactivité (TDA/H)
                        </div>

                        <div className="p-6 text-center text-lg font-oswald-bold rounded-xl shadow-sm flex items-center justify-center">
                            Troubles du Spectre Autistique (TSA)
                        </div>

                        <div className="p-6 text-center text-lg font-oswald-bold rounded-xl shadow-sm flex items-center justify-center">
                            Troubles neurologiques (paralysie cérébrale, traumatisme crânien, syndrome cérébelleux...)
                        </div>

                         <div className="bg-orange-100 text-orange-900 p-6 text-center text-lg font-oswald-bold rounded-xl shadow-sm flex items-center justify-center">
                            Troubles moteurs
                        </div>

                        <div className="text-center text-lg font-oswald-bold rounded-xl shadow-sm flex items-center justify-center">
                            Retards de développement
                        </div>

                         <div className="bg-orange-100 text-orange-900 p-6 text-center text-lg font-oswald-bold rounded-xl shadow-sm flex items-center justify-center">
                            Déficience intellectuelle
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ErgoPediatrie
