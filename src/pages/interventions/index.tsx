import interventionsBanner from "../../assets/baniere-les-interventions.webp"
import color from "../../assets/styles/color"

function Interventions() {
    return (
        <div className={`text-slate-900`}>
            <div className="relative w-full h-screen overflow-hidden">
                {/* Image floutée */}
                <div
                    className="absolute inset-0 bg-cover bg-center blur-sm"
                    style={{ backgroundImage: `url(${interventionsBanner})` }}
                />

                {/* Overlay sombre (optionnel pour lisibilité) */}
                <div className="absolute inset-0 bg-black/35" />

                {/* Contenu NON flou */}
                <div className="relative z-[1] flex flex-col text-center justify-center items-center h-full text-white font-bold">
                    <p className="text-6xl">Les interventions</p>
                </div>
            </div>

            <section className={`relative overflow-hidden bg-[${color.primary1}]`}>
                <div className="absolute -top-12 -left-16 size-48 rounded-full bg-emerald-200/40 z-0" />
                <div className="absolute top-10 -right-10 size-25 rounded-full bg-sky-200/40 z-0" />
                <div className="absolute bottom-0 left-1/3 size-24 rounded-full bg-orange-200/50 z-0" />
                <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16">
                    <h1 className="text-2xl md:text-4xl text-[#997f6b] font-leckerli font-bold">
                        Bilans d’évaluation
                    </h1>
                    <p className="text-lg text-slate-700 mt-4 text-justify">
                        Le bilan en ergothérapie en pédiatrie est réalisé sur prescription médicale et dure en
                        moyenne 2 à 3 heures.
                    </p>
                    <p className="text-lg text-slate-700 text-justify">
                        Il s’agit d’une évaluation complète qui permet de mieux comprendre le fonctionnement
                        de l’enfant dans son quotidien.
                    </p>
                </div>
            </section>

            <section className="px-6 py-6 max-w-6xl mx-auto">
                <div className="rounded-2xl p-6 shadow-sm border" style={{ backgroundColor: color.secondaireO1, borderColor: color.secondaireO1}}>
                    <h2 className="font-oswald-bold text-slate-700 mb-3">
                        L’ergothérapeute observe et analyse :
                    </h2>
                    <ul className="list-disc pl-5 space-y-2 text-slate-700">
                        <li>Les capacités et les difficultés de l’enfant.</li>
                        <li>Son environnement (scolaire, familial, social).</li>
                        <li>Ses habitudes de vie et ses activités.</li>
                    </ul>
                </div>
            </section>

            <section className="relative px-6 max-w-6xl mx-auto">
                <div className="absolute -left-30 top-10 size-32 rounded-full bg-emerald-100/60 z-0" />
                <div className="absolute right-6 bottom-2 size-24 rounded-full bg-sky-100/60 z-0" />
                <div className="relative z-10 space-y-6">
                    <p className="text-lg leading-relaxed text-slate-700 text-justify">
                        À partir de cette évaluation, l’ergothérapeute définit avec l’enfant et sa famille
                        les occupations prioritaires à travailler (par exemple : l’écriture, l’autonomie dans
                        l’habillage, la participation aux repas, l’organisation scolaire, etc.).
                        L’ergothérapeute évalue ensuite les difficultés qui freinent la réalisation de ces
                        activités.
                    </p>
                </div>
            </section>

            <section className="px-6 py-6 max-w-6xl mx-auto">
                <div className="rounded-2xl p-6 shadow-sm border" style={{ backgroundColor: color.secondaireO1, borderColor: color.secondaireO1}}>
                    <h2 className="font-oswald-bold text-slate-700 mb-3">
                        Le bilan peut avoir plusieurs objectifs :
                    </h2>
                    <ul className="list-disc pl-5 space-y-2 text-slate-700">
                        <li>Aider à la recherche d’un diagnostic médical.</li>
                        <li>
                            Définir un projet de rééducation ou de réadaptation (activité de vie quotidienne,
                            graphisme, sensoriel, alimentaire, troubles du calcul...).
                        </li>
                        <li>
                            Préconiser des aménagements scolaires (ex. : tiers-temps, adaptations pédagogiques)
                            et/ou du matériel adapté (ordinateur, tablette, outils spécifiques).
                        </li>
                    </ul>
                </div>
            </section>

            <section className="relative px-6 pb-12 max-w-6xl mx-auto">
                <div>
                    <p className="text-lg leading-relaxed text-slate-700 text-justify">
                        À l’issue du bilan, un compte rendu détaillé est remis à la famille et peut être
                        transmis aux professionnels concernés (médecins, enseignants, orthophonistes,
                        psychomotriciens, etc.), afin de favoriser une prise en charge cohérente et adaptée
                        aux besoins de l’enfant.
                    </p>
                </div>
            </section>

            <section className="relative overflow-hidden">
                <div className="absolute -top-0 -right-12 size-40 rounded-full bg-emerald-100/60 z-0" />
                <div className="absolute bottom-0 left-10 size-28 rounded-full bg-sky-100/60 z-0" />
                <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
                    <h2 className="text-2xl md:text-4xl text-[#997f6b] font-leckerli font-bold">
                        Séances au cabinet
                    </h2>
                    <p className="text-lg text-slate-700 mt-4 text-justify">
                        Les séances d’ergothérapie se déroulent au cabinet, à raison de 45 minutes par semaine.
                        La durée de l’accompagnement varie selon les besoins de l’enfant : il peut s’agir de
                        quelques séances ciblées ou d’un suivi plus régulier, par exemple sur une année scolaire.
                    </p>
                    <div className="rounded-2xl p-6 shadow-sm border mt-6" style={{ backgroundColor: color.secondaireO1, borderColor: color.secondaireO1}}>
                        <h2 className="font-oswald-bold text-slate-700 mb-3">
                            Chaque séance est personnalisée et peut avoir plusieurs objectifs :
                        </h2>
                        <ul className="list-disc pl-5 space-y-2 text-slate-700">
                            <li>
                                Rééducation des activités de vie quotidienne et scolaires : graphisme, habillage,
                                repas, utilisation du vélo, etc.
                            </li>
                            <li>
                                Mise en place de moyens de réadaptation : aménagements scolaires, outils adaptés,
                                matériel informatique, stratégies organisationnelles.
                            </li>
                            <li>
                                Prévention et accompagnement : conseils pour le choix des fournitures scolaires,
                                stratégies pour faciliter les devoirs, guidance parentale pour soutenir l’enfant à
                                la maison.
                            </li>
                        </ul>
                    </div>
                    <p className="text-lg text-slate-700 pt-4">
                        L’ergothérapeute travaille en étroite collaboration avec l’enfant, sa famille, l’école,
                        et les professionnels de santé.
                    </p>
                </div>
            </section>

            <section className="relative overflow-hidden">
                <div className="absolute -left-12 top-6 size-36 rounded-full bg-orange-200/50 z-0" />
                <div className="absolute right-8 bottom-0 size-24 rounded-full bg-emerald-100/60 z-0" />
                <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
                    <h2 className="text-2xl md:text-4xl text-[#997f6b] font-leckerli font-bold">
                        Séances à domicile ou dans les écoles
                    </h2>
                    <p className="text-lg text-slate-700 mt-4 text-justify">
                        En complément des séances réalisées au cabinet, des interventions ponctuelles à domicile
                        et/ou à l’école peuvent être proposées. Elles permettent de transférer les acquis
                        travaillés lors des séances dans les différents environnements de l’enfant et de
                        favoriser leur intégration dans son quotidien.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Interventions
