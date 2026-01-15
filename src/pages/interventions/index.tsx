function Interventions() {
    return (
        <div className="bg-[#FAEEDA] text-slate-900">
            <div className="relative w-full h-screen overflow-hidden">
                {/* Image floutee */}
                <div className="absolute inset-0 bg-[url('/baniere-les-interventions.webp')] bg-cover bg-center blur-sm" />

                {/* Overlay sombre (optionnel pour lisibilite) */}
                <div className="absolute inset-0 bg-black/35" />

                {/* Contenu NON flou */}
                <div className="relative z-[1] flex flex-col text-center justify-center items-center h-full text-white font-bold">
                    <p className="text-6xl">Les interventions</p>
                </div>
            </div>

            <section className="relative overflow-hidden bg-gradient-to-b from-[#F7E9D6] to-[#FAEEDA]">
                <div className="absolute -top-12 -left-16 size-48 rounded-full bg-emerald-200/40 z-0" />
                <div className="absolute top-10 -right-10 size-25 rounded-full bg-sky-200/40 z-0" />
                <div className="absolute bottom-0 left-1/3 size-24 rounded-full bg-orange-200/50 z-0" />
                <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16">
                    <h1 className="text-2xl md:text-4xl font-oswald-bold text-slate-900 font-bold">
                        Bilans d'evaluation
                    </h1>
                    <p className="text-lg text-slate-700 mt-4">
                        Le bilan en ergotherapie en pediatrie est realise sur prescription medicale et dure en
                        moyenne 2 a 3 heures.
                    </p>
                    <p className="text-lg text-slate-700">
                        Il s'agit d'une evaluation complete qui permet de mieux comprendre le fonctionnement
                        de l'enfant dans son quotidien.
                    </p>
                </div>
            </section>

            <section className="px-6 py-6 max-w-6xl mx-auto">
                <div className="bg-white/80 rounded-2xl p-6 shadow-sm border border-white/60">
                    <h2 className="text-2xl font-oswald-bold text-slate-900 mb-3">
                        L'ergotherapeute observe et analyse
                    </h2>
                    <ul className="list-disc pl-5 space-y-2 text-slate-700">
                        <li>Les capacites et les difficultes de l'enfant.</li>
                        <li>Son environnement (scolaire, familial, social).</li>
                        <li>Ses habitudes de vie et ses activites.</li>
                    </ul>
                </div>
            </section>

            <section className="relative px-6 max-w-6xl mx-auto">
                <div className="absolute -left-30 top-10 size-32 rounded-full bg-emerald-100/60 z-0" />
                <div className="absolute right-6 bottom-2 size-24 rounded-full bg-sky-100/60 z-0" />
                <div className="relative z-10 space-y-6">
                    <p className="text-lg leading-relaxed text-slate-700">
                        A partir de cette evaluation, l'ergotherapeute definit avec l'enfant et sa famille
                        les occupations prioritaires a travailler (par exemple : l'ecriture, l'autonomie dans
                        l'habillage, la participation aux repas, l'organisation scolaire, etc.).
                        L'ergotherapeute evalue ensuite les difficultes qui freinent la realisation de ces
                        activites.
                    </p>
                </div>
            </section>

            <section className="px-6 py-6 max-w-6xl mx-auto">
                <div className="bg-white/80 rounded-2xl p-6 shadow-sm border border-white/60">
                    <h2 className="text-2xl font-oswald-bold text-slate-900 mb-3">
                        Le bilan peut avoir plusieurs objectifs
                    </h2>
                    <ul className="list-disc pl-5 space-y-2 text-slate-700">
                        <li>Aider a la recherche d'un diagnostic medical.</li>
                        <li>
                            Definir un projet de reeducation ou de readaptation (activite de vie quotidienne,
                            graphisme, sensoriel, alimentaire, troubles du calcul...).
                        </li>
                        <li>
                            Preconiser des amenagements scolaires (ex. : tiers-temps, adaptations pedagogiques)
                            et/ou du materiel adapte (ordinateur, tablette, outils specifiques).
                        </li>
                    </ul>
                </div>
            </section>

            <section className="relative px-6 pb-12 max-w-6xl mx-auto">
                <div>
                    <p className="text-lg leading-relaxed text-slate-700">
                        A l'issue du bilan, un compte rendu detaille est remis a la famille et peut etre
                        transmis aux professionnels concernes (medecins, enseignants, orthophonistes,
                        psychomotriciens, etc.), afin de favoriser une prise en charge coherente et adaptee
                        aux besoins de l'enfant.
                    </p>
                </div>
            </section>

            <section className="relative overflow-hidden">
                <div className="absolute -top-0 -right-12 size-40 rounded-full bg-emerald-100/60 z-0" />
                <div className="absolute bottom-0 left-10 size-28 rounded-full bg-sky-100/60 z-0" />
                <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
                    <h2 className="text-2xl md:text-4xl font-oswald-bold text-slate-900 font-bold">
                        Seances au cabinet
                    </h2>
                    <p className="text-lg text-slate-700 mt-4">
                        Les seances d'ergotherapie se deroulent au cabinet, a raison de 45 minutes par semaine.
                        La duree de l'accompagnement varie selon les besoins de l'enfant : il peut s'agir de
                        quelques seances ciblees ou d'un suivi plus regulier, par exemple sur une annee scolaire.
                    </p>
                    <div className="bg-white/80 rounded-2xl p-6 shadow-sm border border-white/60 mt-6">
                        <h2 className="text-2xl font-oswald-bold text-slate-900 mb-3">
                            Chaque seance est personnalisee et peut avoir plusieurs objectifs :
                        </h2>
                        <ul className="list-disc pl-5 space-y-2 text-slate-700">
                            <li>
                                Reeduction des activites de vie quotidienne et scolaires : graphisme, habillage,
                                repas, utilisation du velo, etc.
                            </li>
                            <li>
                                Mise en place de moyens de readaptation : amenagements scolaires, outils adaptes,
                                materiel informatique, strategies organisationnelles.
                            </li>
                            <li>
                                Prevention et accompagnement : conseils pour le choix des fournitures scolaires,
                                strategies pour faciliter les devoirs, guidance parentale pour soutenir l'enfant a
                                la maison.
                            </li>
                        </ul>
                        <p className="text-lg text-slate-700 pt-4">
                            L'ergotherapeute travaille en etroite collaboration avec l'enfant, sa famille, l'ecole,
                            et les professionnels de sante.
                        </p>
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden">
                <div className="absolute -left-12 top-6 size-36 rounded-full bg-orange-200/50 z-0" />
                <div className="absolute right-8 bottom-0 size-24 rounded-full bg-emerald-100/60 z-0" />
                <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
                    <h2 className="text-2xl md:text-4xl font-oswald-bold text-slate-900 font-bold">
                        Seances à domicile ou dans les ecoles
                    </h2>
                    <p className="text-lg text-slate-700 mt-4">
                        En complement des seances realisees au cabinet, des interventions ponctuelles a domicile
                        et/ou a l'ecole peuvent etre proposees. Elles permettent de transferer les acquis
                        travailles lors des seances dans les differents environnements de l'enfant et de
                        favoriser leur integration dans son quotidien.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Interventions
